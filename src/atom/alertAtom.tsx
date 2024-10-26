/* eslint-disable unused-imports/no-unused-vars */
import { atom, useAtom } from "jotai"
import _ from "lodash"
import { useCallback } from "react"

import { AlertItemType } from "@/types/alerts"

type AlertConfig = {
  errorData: { title: string; list: Array<string> }
  loading: boolean
  errorOpen: boolean
  noticeData: { title: string; link: string }
  noticeOpen: boolean
  successData: { title: string }
  successOpen: boolean
  notificationCenter: boolean
  notificationList: AlertItemType[]
}

const alertAtom = atom<AlertConfig>({
  errorData: { title: "", list: [] },
  loading: true,
  errorOpen: false,
  noticeData: { title: "", link: "" },
  noticeOpen: false,
  successData: { title: "" },
  successOpen: false,
  notificationCenter: false,
  notificationList: [],
})

export function useAlertAtom() {
  const [config, setConfig] = useAtom(alertAtom)

  const setLoading = useCallback(
    (newState: boolean) => {
      setConfig((prev) => ({ ...prev, loading: newState }))
    },
    [setConfig],
  )

  const setErrorOpen = useCallback(
    (newState: boolean) => {
      setConfig((prev) => ({ ...prev, errorOpen: newState }))
    },
    [setConfig],
  )

  const setNoticeOpen = useCallback(
    (newState: boolean) => {
      setConfig((prev) => ({ ...prev, noticeOpen: newState }))
    },
    [setConfig],
  )

  const setSuccessOpen = useCallback(
    (newState: boolean) => {
      setConfig((prev) => ({ ...prev, successOpen: newState }))
    },
    [setConfig],
  )

  const setNotificationCenter = useCallback(
    (newState: boolean) => {
      setConfig((prev) => ({ ...prev, notificationCenter: newState }))
    },
    [setConfig],
  )

  const setErrorDataState = useCallback(
    (newState: { title: string; list?: Array<string> }) => {
      setConfig((prev) => ({
        ...prev,
        errorData: {
          title: newState.title,
          list: newState.list ?? [],
        },
      }))
    },
    [setConfig],
  )

  const setNoticeDataState = useCallback(
    (newState: { title: string; link?: string }) => {
      setConfig((prev) => ({
        ...prev,
        noticeData: {
          title: newState.title,
          link: newState.link ?? "",
        },
      }))
    },
    [setConfig],
  )

  const setSuccessDataState = useCallback(
    (newState: { title: string }) => {
      setConfig((prev) => ({ ...prev, successData: newState }))
    },
    [setConfig],
  )

  const setNotificationList = useCallback(
    (newList: AlertItemType[]) => {
      setConfig((prev) => ({ ...prev, notificationList: newList }))
    },
    [setConfig],
  )

  const clearNotificationList = useCallback(() => {
    setNotificationList([])
  }, [setNotificationList])

  const removeFromNotificationList = useCallback(
    (index: string) => {
      const alertFiltered = config.notificationList.filter(
        (alert) => alert.id !== index,
      )
      // set the notification list to a new array that filters out the alert with the matching id
      setNotificationList(alertFiltered)
    },
    [config.notificationList, setNotificationList],
  )

  const pushNotificationList = useCallback(
    (notification: AlertItemType) => {
      const newNotificationList = _.cloneDeep(config.notificationList)
      newNotificationList.unshift(notification)
      setNotificationList(newNotificationList)
    },
    [config.notificationList, setNotificationList],
  )

  /*
   * Sets the error data state, opens the error dialog and pushes the new error notification to the notification list
   * @param newState An object containing the new error data, including title and optional list of error messages
   */
  const setErrorData = useCallback(
    (newState: { title: string; list?: Array<string> }) => {
      if (newState.title && newState.title !== "") {
        setErrorDataState(newState)
        setErrorOpen(true)
        setNotificationCenter(true)
        pushNotificationList({
          type: "error",
          title: newState.title,
          list: newState.list,
          id: _.uniqueId(),
        })
      }
    },
    [
      setErrorDataState,
      setErrorOpen,
      setNotificationCenter,
      pushNotificationList,
    ],
  )
  /**
   * Sets the state of the notice data and opens the notice modal, also adds a new notice to the notification center if the title is defined.
   * @param newState An object containing the title of the notice and optionally a link.
   */
  const setNoticeData = useCallback(
    (newState: { title: string; link?: string }) => {
      if (newState.title && newState.title !== "") {
        setNoticeDataState(newState)
        setNoticeOpen(true)
        // Add new notice to notification center
        setNotificationCenter(true)
        pushNotificationList({
          type: "notice",
          title: newState.title,
          link: newState.link,
          id: _.uniqueId(),
        })
      }
    },
    [
      setNoticeDataState,
      setNoticeOpen,
      setNotificationCenter,
      pushNotificationList,
    ],
  )
  /**
   * Update the success data state and show a success alert notification.
   * @param newState - A state object with a "title" property to set in the success data state.
   */
  const setSuccessData = useCallback(
    (newState: { title: string }) => {
      // If the new state has a "title" property, add a new success notification to the list
      if (newState.title && newState.title !== "") {
        setSuccessDataState(newState) // update the success data state with the provided new state
        setSuccessOpen(true) // open the success alert
        setNotificationCenter(true) // show the notification center
        pushNotificationList({
          // add the new notification to the list
          type: "success",
          title: newState.title,
          id: _.uniqueId(),
        })
      }
    },
    [
      setSuccessDataState,
      setSuccessOpen,
      setNotificationCenter,
      pushNotificationList,
    ],
  )

  return {
    ...config,
    removeFromNotificationList,
    clearNotificationList,
    setLoading,
    pushNotificationList,
    setNotificationCenter,
    setErrorData,
    setErrorOpen,
    setNoticeData,
    setNoticeOpen,
    setSuccessData,
    setSuccessOpen,
  }
}
