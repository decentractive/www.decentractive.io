import Link from "next/link"
import { useEffect, useState } from "react"
import { toast } from "sonner"

import { NoticeAlertType } from "@/types/alerts"

export default function NoticeAlert({
  title,
  link = "",
  id,
  removeAlert,
}: NoticeAlertType) {
  const [show, setShow] = useState(true)
  useEffect(() => {
    if (show) {
      toast.message(title, {
        duration: 5000,
        onAutoClose: () => {
          setShow(false)
          removeAlert(id)
        },
        description:
          link !== "" ? (
            <Link
              href={link}
              className="whitespace-nowrap font-medium text-info-foreground hover:text-accent-foreground"
            >
              Details
            </Link>
          ) : (
            <></>
          ),
      })
    }
  }, [id, link, removeAlert, show, title])

  return null
}
