import { atom, useAtom } from "jotai"
import { useCallback, useEffect, useState } from "react"
import Cookies from "universal-cookie"

import { useWhoAmi } from "@/hooks"

import { Entity } from "@/types/api"

type AuthConfig = {
  isAuthenticated: boolean
  accessToken: string | null
  entityData: Entity | null
  authenticationErrorCount: number
}

const authAtom = atom<AuthConfig>({
  isAuthenticated: false,
  accessToken: null,
  entityData: null,
  authenticationErrorCount: 0,
})

export function useAuthAtom() {
  const [cookies, setCookies] = useState<Cookies | null>(null)
  const [config, setConfig] = useAtom(authAtom)
  const [goGetUserData, setGoGetUserData] = useState<boolean>(false)
  const { data } = useWhoAmi({
    enabled: goGetUserData,
  })
  useEffect(() => {
    setCookies(new Cookies())
  }, [])

  const setIsAuthenticated = useCallback(
    (isAuthenticated: boolean) => {
      setConfig((prev) => ({ ...prev, isAuthenticated }))
    },
    [setConfig],
  )

  const setAccessToken = useCallback(
    (accessToken: string | null) => {
      setConfig((prev) => ({ ...prev, accessToken }))
    },
    [setConfig],
  )

  const setEntityData = useCallback(
    (entityData: Entity | null) => {
      setConfig((prev) => ({ ...prev, entityData }))
    },
    [setConfig],
  )

  const setAuthenticationErrorCount = useCallback(
    (authenticationErrorCount: number) => {
      setConfig((prev) => ({ ...prev, authenticationErrorCount }))
    },
    [setConfig],
  )

  const getAuthentication = useCallback(() => {
    const storedAccess = cookies?.get("access_tkn_yyy")
    const auth = storedAccess ? true : false
    return auth
  }, [cookies])

  const login = useCallback(
    (newAccessToken: string) => {
      if (
        newAccessToken !== null &&
        newAccessToken !== "" &&
        newAccessToken !== undefined
      ) {
        cookies?.set("access_tkn_yyy", newAccessToken, { path: "/" })
        setAccessToken(newAccessToken)
        setIsAuthenticated(true)
        setGoGetUserData(true)
      }
    },
    [cookies, setAccessToken, setIsAuthenticated],
  )

  const logout = useCallback(() => {
    cookies?.remove("access_tkn_yyy", { path: "/" })
    setEntityData(null)
    setAccessToken(null)
    setIsAuthenticated(false)
    setGoGetUserData(false)
  }, [cookies, setEntityData, setAccessToken, setIsAuthenticated])

  useEffect(() => {
    if (cookies) {
      const storedAccessToken = cookies.get("access_tkn_yyy")
      if (
        storedAccessToken !== null &&
        storedAccessToken !== "" &&
        storedAccessToken !== undefined
      ) {
        setAccessToken(storedAccessToken)
        setIsAuthenticated(true)
        setGoGetUserData(true)
      } else {
        logout()
      }
    }
  }, [cookies, logout, setAccessToken, setIsAuthenticated])

  useEffect(() => {
    if (data) {
      setEntityData(data)
      setGoGetUserData(false)
    }
  }, [data, setEntityData])

  return {
    isAuthenticated: config.isAuthenticated,
    accessToken: config.accessToken,
    entityData: config.entityData,
    setUserData: setEntityData,
    authenticationErrorCount: config.authenticationErrorCount,
    getAuthentication,
    login,
    logout,
    setAuthenticationErrorCount,
    isUser: config.entityData?.type === "user",
    isCompany: config.entityData?.type === "company",
  }
}
