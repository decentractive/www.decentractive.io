import { useEffect, useState } from "react"
import { toast } from "sonner"

import { SuccessAlertType } from "@/types/alerts"

export default function SuccessAlert({
  title,
  id,
  removeAlert,
}: SuccessAlertType) {
  const [show, setShow] = useState(true)
  useEffect(() => {
    if (show) {
      toast.success(title, {
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
