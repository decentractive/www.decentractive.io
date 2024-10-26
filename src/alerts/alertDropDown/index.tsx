import { useState } from "react"

import IconComponent from "@/components/GenericIcon/IconComponent"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover"

import SingleAlert from "@/alerts/alertDropDown/components/singleAlertComponent"
import { useAlertAtom } from "@/atom/alertAtom"

import { AlertDropdownType } from "@/types/alerts"

export default function AlertDropdown({ children }: AlertDropdownType) {
  const {
    notificationList,
    clearNotificationList,
    removeFromNotificationList,
    setNotificationCenter,
  } = useAlertAtom()

  const [open, setOpen] = useState(false)

  return (
    <Popover
      open={open}
      onOpenChange={(target: boolean) => {
        setOpen(target)
        if (target) setNotificationCenter(false)
      }}
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className="flex h-[500px] w-[500px] flex-col">
        <div className="text-md flex flex-row justify-between pl-3 font-medium text-foreground">
          Notifications
          <div className="flex gap-3 pr-3 ">
            <button
              className="text-foreground hover:text-status-red"
              onClick={() => {
                setOpen(false)
                setTimeout(clearNotificationList, 100)
              }}
            >
              <IconComponent name="Trash2" className="h-[1.1rem] w-[1.1rem]" />
            </button>
            <button
              className="text-foreground hover:text-status-red"
              onClick={() => {
                setOpen(false)
              }}
            >
              <IconComponent name="X" className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="text-high-foreground mt-3 flex h-full w-full flex-col overflow-y-scroll scrollbar-hide">
          {notificationList.length !== 0 ? (
            notificationList.map((alertItem, _) => (
              <SingleAlert
                key={alertItem.id}
                dropItem={alertItem}
                removeAlert={removeFromNotificationList}
              />
            ))
          ) : (
            <div className="flex h-full w-full items-center justify-center pb-16 text-ring">
              No new notifications
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
