/* eslint-disable @typescript-eslint/no-explicit-any */
import _ from "lodash"
import { FC, PropsWithChildren, useEffect, useState } from "react"

import Banner from "@/components/Banner"
import Footer from "@/components/Footer"

import ErrorAlert from "@/alerts/error"
import NoticeAlert from "@/alerts/notice"
import SuccessAlert from "@/alerts/success"
import { useAlertAtom } from "@/atom/alertAtom"

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const {
    errorData,
    errorOpen,
    setErrorOpen,
    noticeData,
    noticeOpen,
    setNoticeOpen,
    successData,
    successOpen,
    setSuccessOpen,
  } = useAlertAtom()

  // Initialize state variable for the list of alerts
  const [alertsList, setAlertsList] = useState<
    Array<{
      type: string
      data: { title: string; list?: Array<string>; link?: string }
      id: string
    }>
  >([])

  // Use effect hook to update alertsList when a new alert is added
  useEffect(() => {
    // If there is an error alert open with data, add it to the alertsList
    if (errorOpen && errorData) {
      if (
        alertsList.length > 0 &&
        JSON.stringify(alertsList[alertsList.length - 1].data) ===
          JSON.stringify(errorData)
      ) {
        return
      }
      setErrorOpen(false)
      setAlertsList((old) => {
        const newAlertsList = [
          ...old,
          { type: "error", data: _.cloneDeep(errorData), id: _.uniqueId() },
        ]
        return newAlertsList
      })
    }
    // If there is a notice alert open with data, add it to the alertsList
    else if (noticeOpen && noticeData) {
      if (
        alertsList.length > 0 &&
        JSON.stringify(alertsList[alertsList.length - 1].data) ===
          JSON.stringify(noticeData)
      ) {
        return
      }
      setNoticeOpen(false)
      setAlertsList((old) => {
        const newAlertsList = [
          ...old,
          { type: "notice", data: _.cloneDeep(noticeData), id: _.uniqueId() },
        ]
        return newAlertsList
      })
    }
    // If there is a success alert open with data, add it to the alertsList
    else if (successOpen && successData) {
      if (
        alertsList.length > 0 &&
        JSON.stringify(alertsList[alertsList.length - 1].data) ===
          JSON.stringify(successData)
      ) {
        return
      }
      setSuccessOpen(false)
      setAlertsList((old) => {
        const newAlertsList = [
          ...old,
          { type: "success", data: _.cloneDeep(successData), id: _.uniqueId() },
        ]
        return newAlertsList
      })
    }
  }, [
    alertsList,
    errorData,
    errorOpen,
    noticeData,
    noticeOpen,
    setErrorOpen,
    setNoticeOpen,
    setSuccessOpen,
    successData,
    successOpen,
  ])

  const removeAlert = (id: string) => {
    setAlertsList((prevAlertsList) =>
      prevAlertsList.filter((alert) => alert.id !== id),
    )
  }

  return (
    <>
      <div className="min-h-screen-small relative z-[1] grid grid-cols-1 grid-rows-[auto,1fr]">
        <Banner />
        <div className="layout px-0">{children}</div>

        <div className="flex h-full flex-col">
          <div className="app-div" style={{ zIndex: 999 }}>
            {alertsList.map((alert: any) => (
              <div key={alert.id}>
                {alert.type === "error" ? (
                  <ErrorAlert
                    key={alert.id}
                    title={alert.data.title}
                    list={alert.data.list}
                    id={alert.id}
                    removeAlert={removeAlert}
                  />
                ) : alert.type === "notice" ? (
                  <NoticeAlert
                    key={alert.id}
                    title={alert.data.title}
                    link={alert.data.link}
                    id={alert.id}
                    removeAlert={removeAlert}
                  />
                ) : (
                  <SuccessAlert
                    key={alert.id}
                    title={alert.data.title}
                    id={alert.id}
                    removeAlert={removeAlert}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
