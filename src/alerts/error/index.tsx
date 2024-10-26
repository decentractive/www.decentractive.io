import { useEffect, useState } from "react"
import { toast } from "sonner"

import { ErrorAlertType } from "@/types/alerts"

export default function ErrorAlert({ title, id, removeAlert }: ErrorAlertType) {
  const [show, setShow] = useState(true)
  useEffect(() => {
    if (show) {
      toast.error(title, {
        duration: 5000,
        onAutoClose: () => {
          setShow(false)
          removeAlert(id)
        },
      })
    }
  }, [id, removeAlert, show, title])

  return null
}
