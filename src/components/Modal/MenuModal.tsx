import Link from "next/link"
import React from "react"

import clsxm from "@/lib/clsxm"
import { resolvedRoute } from "@/lib/helpers"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Label,
  Separator,
  ShadTooltip,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components"
import ExternalLinks from "@/components/ExternalLinks"

import DecentractiveLogo from "~/images/svg/decentractive.svg"

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
      <SheetContent className="w-full" side="right">
        <SheetHeader>
          <SheetTitle className="flex text-md pb-2">
            <Link {...resolvedRoute("/")} className="group">
              <ShadTooltip content="Decentractive" side="right">
                <DecentractiveLogo
                  className="h-7 w-auto"
                  alt="Decentractive"
                  aria-label="Decentractive"
                />
              </ShadTooltip>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col pt-2 pb-4 h-[calc(100%-100px)]">
          <Separator />
          <Accordion
            type="single"
            collapsible
            className="w-full h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-accent scrollbar-track-muted-foreground scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-hover:scale-150 scrollbar-track-hover:scale-150"
          >
            <AccordionItem
              value="How it works"
              className={clsxm(`px-3 transition-all`)}
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between space-x-2">
                  <Label className="flex flex-col space-y-1 text-left w-full text-base">
                    How it works
                  </Label>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="grid w-full gap-1">
                  <ListItem title="Overview" href="/app/kyb/register">
                    Intro to our decentralized identity and verifiable
                    credentials platform
                  </ListItem>
                  <ListItem
                    title="DID & Credential Flow"
                    href="/app/kyb/register"
                  >
                    See how identities and credentials are issued, managed, and
                    verified.
                  </ListItem>
                  <ListItem title="Security & Privacy" href="/app/kyb/register">
                    Built with robust encryption and user-controlled data
                    protection.
                  </ListItem>
                </ul>
              </AccordionContent>
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
              <AccordionContent>
                <ul className="grid w-full gap-1">
                  <ListItem
                    title="Self-Sovereign Identity (SSI)"
                    href="/app/kyc/register"
                  >
                    Give users complete control over their digital identity.
                  </ListItem>
                  <ListItem
                    title="Multi-Chain Support:"
                    href="/app/kyc/register"
                  >
                    Flexible integration across various blockchain networks.
                  </ListItem>
                  <ListItem
                    title="Compliance & Standards"
                    href="/app/kyc/register"
                  >
                    Aligned with W3C, GDPR, HIPAA, and global regulatory
                    standards.
                  </ListItem>
                  <ListItem title="Interoperability" href="/app/kyc/register">
                    Seamlessly integrates with existing identity verification
                    systems.
                  </ListItem>
                  <ListItem
                    title="Audit & Access Logs"
                    href="/app/kyc/register"
                  >
                    Full transparency with trackable activity logs for
                    compliance.
                  </ListItem>
                </ul>
              </AccordionContent>
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
          <ExternalLinks className="flex justify-start py-2" />
          <div className="flex-none h-auto relative w-auto">
            <span className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Decentractive
            </span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={clsxm(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className,
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  )
})
ListItem.displayName = "ListItem"

const ListItemComingSoon = React.forwardRef<
  React.ElementRef<"span">,
  React.ComponentPropsWithoutRef<"span">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <span
        ref={ref}
        className={clsxm(
          "cursor-not-allowed items-center block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className,
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">
          {title}
          <span className="ml-1 grow-0 rounded bg-red-600/20 px-1 py-0.5 text-xs uppercase leading-tight text-red-500/80">
            Coming soon
          </span>
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </span>
    </li>
  )
})

ListItemComingSoon.displayName = "ListItemComingSoon"
