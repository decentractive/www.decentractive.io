/* eslint-disable @typescript-eslint/no-explicit-any */
import * as VisuallyHidden from "@radix-ui/react-visually-hidden"
import Link from "next/link"
import { FC } from "react"
import React from "react"
import { SiGitbook } from "react-icons/si"

import clsxm from "@/lib/clsxm"
import { plusJakartaSans } from "@/lib/fonts"
import { gradients, resolvedRoute } from "@/lib/helpers"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Separator,
  ShadTooltip,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components"
import IconComponent from "@/components/GenericIcon/IconComponent"

import AlertDropdown from "@/alerts/alertDropDown"
import { useAlertAtom } from "@/atom/alertAtom"
import { useAuthAtom } from "@/atom/authAtom"
import { useDarkAtom } from "@/atom/darkAtom"

type BannerProps = {
  className?: string
}

const Banner: FC<BannerProps> = ({ className }) => {
  const { dark, setDark, gradientIndex } = useDarkAtom()
  const { notificationCenter } = useAlertAtom()
  const { isUser, isCompany, entityData } = useAuthAtom()

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
            <Link {...resolvedRoute("/app/kyc")} className="group px-1">
              <span
                className={`text-base font-semibold ${plusJakartaSans.className}`}
              >
                decentractive
              </span>
            </Link>
            <div className="flex items-center">
              {/* navigation menu for KYB */}
              <NavigationMenu>
                <NavigationMenuList className="hidden md:flex">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>How it works</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        <ListItem title="Overview" href="/app/kyb/register">
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
                        <ListItem
                          title="For Businesses vs. Individuals"
                          href="/app/kyb/register"
                        >
                          Tailored solutions for organizations and individual
                          users.
                        </ListItem>
                        <ListItem title="Demo Videos" href="/app/kyb/register">
                          Watch real-world examples of our platform in action
                        </ListItem>
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
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        <ListItem
                          title="Developer Documentation"
                          href="/app/kyc/register"
                        >
                          Comprehensive guides and API docs for developers.
                        </ListItem>
                        <ListItem
                          title="DID Registrar & Resolver API"
                          href="/app/kyc/register"
                        >
                          Detailed documentation for DID creation and
                          verification.
                        </ListItem>
                        <ListItem
                          title="Guides & Tutorials"
                          href="/app/kyc/register"
                        >
                          Step-by-step guides for implementing key use cases.
                        </ListItem>
                        <ListItem
                          title="Best Practices"
                          href="/app/kyc/register"
                        >
                          Recommended practices for secure and efficient
                          integration.
                        </ListItem>
                        <ListItem
                          title="Corporate & Workforce"
                          href="/app/kyc/register"
                        >
                          Verify employee credentials and certifications with
                          ease.
                        </ListItem>
                        <ListItem
                          title="Compliance Resources"
                          href="/app/kyc/register"
                        >
                          Whitepapers and guides for regulatory compliance.
                        </ListItem>
                        <ListItem
                          title="Webinars & Workshops"
                          href="/app/kyc/register"
                        >
                          Join upcoming sessions to deepen your platform
                          knowledge.
                        </ListItem>
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
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/business"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      About Us
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
            <div className="header-end-display">
              {!entityData ? (
                <>
                  <Button
                    size="sm"
                    variant="default"
                    className="hidden xl:inline-flex "
                  >
                    <Link href="/signup" className="whitespace-nowrap">
                      Request a Demo
                    </Link>
                  </Button>
                  <ShadTooltip
                    content="Join to verify your reviews"
                    asChild
                    side="bottom"
                  >
                    <button className="inline-flex xl:hidden">
                      <IconComponent
                        name="UserRoundPlus"
                        className="side-bar-button-size"
                      />
                    </button>
                  </ShadTooltip>
                </>
              ) : isUser ? (
                <>
                  <Button
                    size="sm"
                    variant="default"
                    className="hidden xl:inline-flex "
                  >
                    <Link href="/app/review/add" className="whitespace-nowrap">
                      Add a review
                    </Link>
                  </Button>
                  <ShadTooltip content="Add a review" asChild side="bottom">
                    <button className="inline-flex xl:hidden">
                      <IconComponent
                        name="MessageSquareText"
                        className="side-bar-button-size"
                      />
                    </button>
                  </ShadTooltip>
                </>
              ) : (
                <>
                  <Button
                    size="sm"
                    variant="default"
                    className="hidden xl:inline-flex "
                  >
                    <Link
                      href="/app/review/respond"
                      className="whitespace-nowrap"
                    >
                      Respond to reviews
                    </Link>
                  </Button>
                  <ShadTooltip
                    content="Respond to reviews"
                    asChild
                    side="bottom"
                  >
                    <button className="inline-flex xl:hidden">
                      <IconComponent
                        name="MessageSquareReply"
                        className="side-bar-button-size"
                      />
                    </button>
                  </ShadTooltip>
                </>
              )}
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
              <AlertDropdown>
                <div className="extra-side-bar-save-disable relative">
                  {notificationCenter && (
                    <div className="header-notifications"></div>
                  )}
                  <IconComponent
                    name="Bell"
                    className="side-bar-button-size"
                    aria-hidden="true"
                  />
                </div>
              </AlertDropdown>
              {entityData && (
                <>
                  <Separator orientation="vertical" />
                  <div>
                    <Sheet>
                      <SheetTrigger>
                        <Avatar className="h-7 w-7 focus-visible:outline-0 cursor-pointer overflow-hidden">
                          <AvatarImage src={entityData?.profile_image} />
                          <AvatarFallback
                            className={`${gradients[gradientIndex]}`}
                          ></AvatarFallback>
                        </Avatar>
                      </SheetTrigger>
                      <SheetContent className="w-1/2" side="right">
                        <SheetTitle>
                          <VisuallyHidden.Root>Menu</VisuallyHidden.Root>
                        </SheetTitle>
                        <SheetHeader>
                          <div className="grid grid-cols-[auto,1fr] grid-rows-1 gap-4 align-middle text-center items-center">
                            <Avatar className="h-7 w-7 focus-visible:outline-0 cursor-pointer overflow-hidden">
                              <AvatarImage src={entityData?.profile_image} />
                              <AvatarFallback
                                className={`${gradients[gradientIndex]}`}
                              ></AvatarFallback>
                            </Avatar>
                            <div className="grid grid-rows-2 gap-1 text-left">
                              <div className="text-sm font-semibold">
                                {entityData?.email ?? "Unknown email"}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {entityData?.fullname ?? "Unknown name"}
                              </div>
                            </div>
                          </div>
                        </SheetHeader>
                        <div className="flex flex-col pt-2 pb-4 h-[calc(100%-50px)]">
                          <div className="flex flex-col mb-3">
                            <nav>
                              <ul className="list-none text-sm">
                                <li className="rounded-lg hover:bg-accent list-none focus:outline-none">
                                  <button className="relative text-left grid items-start w-full grid-cols-[min-content_min-content_minmax(0,auto)_min-content_min-content] grid-rows-[min-content] p-2.5">
                                    <IconComponent
                                      name="Smile"
                                      className="h-4 w-4 text-foreground"
                                    />
                                    <span className="pl-2 text-ellipsis text-nowrap leading-3 font-medium pt-0.5">
                                      Set status
                                    </span>
                                  </button>
                                </li>
                                <li className="block h-px mt-[7px] mb-2 -mx-2 p-0 border-0 bg-accent" />
                                <li className="rounded-lg hover:bg-accent list-none focus:outline-none">
                                  <button className="relative text-left grid items-start w-full grid-cols-[min-content_min-content_minmax(0,auto)_min-content_min-content] grid-rows-[min-content] p-2.5">
                                    <IconComponent
                                      name="User"
                                      className="h-4 w-4 text-foreground"
                                    />
                                    <span className="pl-2 text-ellipsis text-nowrap leading-3 font-medium pt-0.5">
                                      Your profile
                                    </span>
                                  </button>
                                </li>
                                <li className="rounded-lg hover:bg-accent list-none focus:outline-none">
                                  <button className="relative text-left grid items-start w-full grid-cols-[min-content_min-content_minmax(0,auto)_min-content_min-content] grid-rows-[min-content] p-2.5">
                                    <IconComponent
                                      name="BarChartHorizontal"
                                      className="h-4 w-4 text-foreground"
                                    />
                                    <span className="pl-2 text-ellipsis text-nowrap leading-3 font-medium pt-0.5">
                                      Your activities
                                    </span>
                                  </button>
                                </li>
                                <li className="block h-px mt-[7px] mb-2 -mx-2 p-0 border-0 bg-accent" />
                                <li className="rounded-lg hover:bg-accent list-none focus:outline-none">
                                  <button className="relative text-left grid items-start w-full grid-cols-[min-content_min-content_minmax(0,auto)_min-content_min-content] grid-rows-[min-content] p-2.5">
                                    <IconComponent
                                      name="Wallet"
                                      className="h-4 w-4 text-foreground"
                                    />
                                    <span className="pl-2 text-ellipsis text-nowrap leading-3 font-medium pt-0.5">
                                      Plans
                                    </span>
                                  </button>
                                </li>
                                <li className="rounded-lg hover:bg-accent list-none focus:outline-none">
                                  <button className="relative text-left grid items-start w-full grid-cols-[min-content_min-content_minmax(0,auto)_min-content_min-content] grid-rows-[min-content] p-2.5">
                                    <IconComponent
                                      name="Settings"
                                      className="h-4 w-4 text-foreground"
                                    />
                                    <span className="pl-2 text-ellipsis text-nowrap leading-3 font-medium pt-0.5">
                                      Settings
                                    </span>
                                  </button>
                                </li>
                                <li className="block h-px mt-[7px] mb-2 -mx-2 p-0 border-0 bg-accent" />
                                <li className="rounded-lg hover:bg-accent list-none focus:outline-none">
                                  <button className="relative text-left grid items-start w-full grid-cols-[min-content_min-content_minmax(0,auto)_min-content_min-content] grid-rows-[min-content] p-2.5">
                                    <SiGitbook className="h-4 w-4 fill-current" />
                                    <span className="pl-2 text-ellipsis text-nowrap leading-3 font-medium pt-0.5">
                                      decentractive Docs
                                    </span>
                                  </button>
                                </li>
                                <li className="rounded-lg hover:bg-accent list-none focus:outline-none">
                                  <button className="relative text-left grid items-start w-full grid-cols-[min-content_min-content_minmax(0,auto)_min-content_min-content] grid-rows-[min-content] p-2.5">
                                    <IconComponent
                                      name="Headset"
                                      className="h-4 w-4 text-foreground"
                                    />
                                    <span className="pl-2 text-ellipsis text-nowrap leading-3 font-medium pt-0.5">
                                      Support
                                    </span>
                                  </button>
                                </li>
                                <li className="block h-px mt-[7px] mb-2 -mx-2 p-0 border-0 bg-accent" />
                                <li className="rounded-lg hover:bg-accent list-none focus:outline-none p-2.5 ">
                                  <Link {...resolvedRoute("/login")}>
                                    <span className="pl-2 text-ellipsis text-nowrap leading-3 font-medium pt-0.5">
                                      Sign out
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
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
