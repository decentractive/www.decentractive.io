import Link from "next/link"

import clsxm from "@/lib/clsxm"
import { plusJakartaSans } from "@/lib/fonts"
import { resolvedRoute } from "@/lib/helpers"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Label,
  Separator,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components"
import ExternalLinks from "@/components/ExternalLinks"

type MenuModalPropsType = {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function MenuModal({
  open,
  setOpen,
}: MenuModalPropsType): JSX.Element {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-[90%]" side="right">
        <SheetHeader>
          <SheetTitle className="flex text-md pb-2">
            <Link {...resolvedRoute("/app/kyc")} className="group px-1">
              <span
                className={`text-base font-semibold ${plusJakartaSans.className}`}
              >
                decentractive
              </span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col pt-2 pb-4 h-[calc(100%-80px)]">
          <Separator />
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="Policies"
          >
            <AccordionItem
              value="Policies"
              className={clsxm(`px-3 transition-all`)}
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between space-x-2">
                  <Label className="flex flex-col space-y-1 text-left w-full text-base">
                    How it works
                  </Label>
                </div>
              </AccordionTrigger>
              <AccordionContent>fdsfs</AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="Features"
              className={clsxm(`px-3 transition-all`)}
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between space-x-2">
                  <Label className="flex flex-col space-y-1 text-left w-full text-base">
                    Features
                  </Label>
                </div>
              </AccordionTrigger>
              <AccordionContent>dffsfdsf</AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="Use Cases"
              className={clsxm(`px-3 transition-all`)}
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between space-x-2">
                  <Label className="flex flex-col space-y-1 text-left w-full text-base">
                    Use Cases
                  </Label>
                </div>
              </AccordionTrigger>
              <AccordionContent>dffsfdsf</AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="Resources"
              className={clsxm(`px-3 transition-all`)}
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between space-x-2">
                  <Label className="flex flex-col space-y-1 text-left w-full text-base">
                    Resources
                  </Label>
                </div>
              </AccordionTrigger>
              <AccordionContent>dffsfdsf</AccordionContent>
            </AccordionItem>
            <div className="border-b px-3 transition-all">
              <h3 className="flex">
                <Link
                  {...resolvedRoute("/app/pricing")}
                  className="py-4 text-base"
                >
                  Pricing
                </Link>
              </h3>
            </div>
          </Accordion>
        </div>
        <div className="grid grid-rows-[auto,auto] gap-2 items-start">
          <div className="flex-none h-auto relative w-auto">
            <span className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Decentractive
            </span>
          </div>
          <ExternalLinks className="flex justify-start" />
        </div>
      </SheetContent>
    </Sheet>
  )
}
