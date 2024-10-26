/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance } from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "universal-cookie"

import { useAlertAtom } from "@/atom/alertAtom"
import { useAuthAtom } from "@/atom/authAtom"
import { renewAccessToken } from "@/controllers/api"

// Create a new Axios instance
const api: AxiosInstance = axios.create({
  baseURL: "",
})

function ApiInterceptor() {
  const navigate = useNavigate()
  const { setErrorData } = useAlertAtom()
  const {
    logout,
    login,
    authenticationErrorCount,
    setAuthenticationErrorCount,
  } = useAuthAtom()
  const cookies = new Cookies()
  const accessToken = cookies?.get("access_tkn_yyy")

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        if (error.response?.status === 401) {
          const tryNumber = authenticationErrorCount + 1
          setAuthenticationErrorCount(tryNumber)
          if (tryNumber > 3) {
            setAuthenticationErrorCount(0)
            logout()
            navigate("/")
            navigate(0)
          }

          try {
            const res = await renewAccessToken()
            if (res?.data?.access_token) {
              login(res?.data?.access_token)
            }
            if (error?.config?.headers) {
              delete error.config.headers["Authorization"]
              error.config.headers["Authorization"] = `Bearer ${accessToken}`
              const response = await axios.request(error.config)
              return response
            }
          } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 401) {
              logout()
              navigate("/")
              navigate(0)
            } else {
              console.error(error)
              logout()
              navigate("/")
              navigate(0)
            }
          }

          if (error?.config?.url?.includes("login")) {
            return Promise.reject(error)
          } else {
            logout()
            navigate("/")
            navigate(0)
            return Promise.reject(error)
          }
        } else {
          return Promise.reject(error)
        }
      },
    )

    const isAuthorizedURL = (url: any) => {
      const authorizedDomains = [] as string[]

      const authorizedEndpoints = ["/home"]

      try {
        const parsedURL = new URL(url)

        const isDomainAllowed = authorizedDomains.some(
          (domain) => parsedURL.origin === new URL(domain).origin,
        )
        const isEndpointAllowed = authorizedEndpoints.some((endpoint) =>
          parsedURL.pathname.includes(endpoint),
        )

        return isDomainAllowed || isEndpointAllowed
      } catch (e) {
        // Invalid URL
        return false
      }
    }

    // Request interceptor to add access token to every request
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        if (
          accessToken !== null &&
          accessToken !== undefined &&
          accessToken !== "" &&
          !isAuthorizedURL(config?.url)
        ) {
          config.headers["Authorization"] = `Bearer ${accessToken}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )

    return () => {
      // Clean up the interceptors when the component unmounts
      api.interceptors.response.eject(interceptor)
      api.interceptors.request.eject(requestInterceptor)
    }
  }, [accessToken, setErrorData])

  return null
}

export { api, ApiInterceptor }
