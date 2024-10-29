/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from "next/dynamic"
import Link from "next/link"
import { FC, useCallback } from "react"
import React from "react"

import clsxm from "@/lib/clsxm"
import { resolvedRoute } from "@/lib/helpers"

import {
  Button,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Separator,
  ShadTooltip,
} from "@/components"
import IconComponent from "@/components/GenericIcon/IconComponent"

import { useDarkAtom } from "@/atom/darkAtom"

import DecentractiveLogo from "~/images/svg/decentractive.svg"

const MenuModal = dynamic(() => import("@/components/Modal/MenuModal"))

type BannerProps = {
  className?: string
}

const Banner: FC<BannerProps> = ({ className }) => {
  const { dark, setDark } = useDarkAtom()
  const [openMenuModal, setOpenMenuModal] = React.useState(false)

  const showMenuModal = useCallback(() => {
    setOpenMenuModal(true)
  }, [])

  return (
    <>
      <header
        className={clsxm(
          "sticky text-sm top-0 z-10 border-b border-black-50/10 bg-white backdrop-blur-lg",
          className,
        )}
      >
        <div className="layout relative items-center justify-between flex">
          <div className="items-center space-x-10 max-md:pl-1 flex py-1.5 md:my-2">
            <Link {...resolvedRoute("/")} className="group px-1">
              <ShadTooltip content="Decentractive" side="right">
                <DecentractiveLogo
                  className="h-7 w-auto"
                  alt="Decentractive"
                  aria-label="Decentractive"
                />
              </ShadTooltip>
            </Link>
            <div className="flex items-center">
              {/* navigation menu */}
              <NavigationMenu>
                <NavigationMenuList className="hidden md:flex">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>How it works</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        <ListItem title="Overview" href="/hiw/overview">
                          Intro to our decentralized identity and verifiable
                          credentials platform
                        </ListItem>
                        <ListItem
                          title="DID & Credential Flow"
                          href="/app/kyb/register"
                        >
                          See how identities and credentials are issued,
                          managed, and verified.
                        </ListItem>
                        <ListItem
                          title="Security & Privacy"
                          href="/app/kyb/register"
                        >
                          Built with robust encryption and user-controlled data
                          protection.
                        </ListItem>
                        <ListItemComingSoon title="For Businesses vs. Individuals">
                          Tailored solutions for organizations and individual
                          users.
                        </ListItemComingSoon>
                        <ListItemComingSoon title="Demo Videos">
                          Watch real-world examples of our platform in action
                        </ListItemComingSoon>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        <ListItem
                          title="Self-Sovereign Identity (SSI)"
                          href="/app/kyc/register"
                        >
                          Give users complete control over their digital
                          identity.
                        </ListItem>
                        <ListItem
                          title="Multi-Chain Support:"
                          href="/app/kyc/register"
                        >
                          Flexible integration across various blockchain
                          networks.
                        </ListItem>
                        <ListItem
                          title="Compliance & Standards"
                          href="/app/kyc/register"
                        >
                          Aligned with W3C, GDPR, HIPAA, and global regulatory
                          standards.
                        </ListItem>
                        <ListItem
                          title="Interoperability"
                          href="/app/kyc/register"
                        >
                          Seamlessly integrates with existing identity
                          verification systems.
                        </ListItem>
                        <ListItem
                          title="Audit & Access Logs"
                          href="/app/kyc/register"
                        >
                          Full transparency with trackable activity logs for
                          compliance.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        <ListItem title="Education" href="/app/kyc/register">
                          Issue and verify digital diplomas and academic
                          credentials.
                        </ListItem>
                        <ListItem
                          title="Finance & Banking"
                          href="/app/kyc/register"
                        >
                          Efficient, compliant KYC processes with verifiable
                          credentials.
                        </ListItem>
                        <ListItem title="Healthcare" href="/app/kyc/register">
                          Secure, private health records that meet HIPAA
                          standards.
                        </ListItem>
                        <ListItem
                          title="Government & Public Services"
                          href="/app/kyc/register"
                        >
                          Enable citizen ID management with data privacy.
                        </ListItem>
                        <ListItem
                          title="Corporate & Workforce"
                          href="/app/kyc/register"
                        >
                          Verify employee credentials and certifications with
                          ease.
                        </ListItem>
                        <ListItem
                          title="Customer Identity & Verification (CIV)"
                          href="/app/kyc/register"
                        >
                          Quickly authenticate customer identities with trust
                          and security.
                        </ListItem>
                        <li>
                          <Button variant="link">
                            <div className="flex">
                              <span className="text-sm self-center text-[#FF5557]">
                                See all use cases{" "}
                              </span>
                              <IconComponent
                                name="ChevronRight"
                                className="h-5 w-5 text-[#FF5557]"
                              />
                            </div>
                          </Button>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/reviews"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      Pricing
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <Button
            size="sm"
            className="hidden xl:inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-44 lg:w-72"
          >
            Search for companies, reviews...
            <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
          <div className="header-end-division">
            <div className="hidden md:flex header-end-display">
              <Button size="sm" variant="default">
                <Link href="/signup" className="whitespace-nowrap">
                  Request a Demo
                </Link>
              </Button>
              <Separator orientation="vertical" />
              <button
                className="extra-side-bar-save-disable"
                onClick={() => {
                  setDark(!dark)
                }}
              >
                {dark ? (
                  <IconComponent
                    name="SunIcon"
                    className="side-bar-button-size"
                  />
                ) : (
                  <IconComponent
                    name="MoonIcon"
                    className="side-bar-button-size"
                  />
                )}
              </button>
            </div>
            <div className="md:hidden grid grid-cols-[auto,auto] gap-3">
              <button
                className="extra-side-bar-save-disable"
                onClick={() => {
                  setDark(!dark)
                }}
              >
                {dark ? (
                  <IconComponent
                    name="SunIcon"
                    className="side-bar-button-size"
                  />
                ) : (
                  <IconComponent
                    name="MoonIcon"
                    className="side-bar-button-size"
                  />
                )}
              </button>
              <div
                className="my-3 hover:border border border-input hover:bg-accent hover:text-accent-foreground rounded-md p-2"
                onClick={showMenuModal}
              >
                <IconComponent
                  name="Menu"
                  className="side-bar-button-size"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <MenuModal open={openMenuModal} setOpen={setOpenMenuModal} />
    </>
  )
}

export default Banner

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
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
      </NavigationMenuLink>
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
      <NavigationMenuLink asChild>
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
              <span className="max-lg:hidden">Coming</span> soon
            </span>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </span>
      </NavigationMenuLink>
    </li>
  )
})

ListItemComingSoon.displayName = "ListItemComingSoon"
