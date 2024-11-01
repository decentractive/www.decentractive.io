import Link from "next/link"
import { FC } from "react"

import clsxm from "@/lib/clsxm"
import { resolvedRoute } from "@/lib/helpers"

import ExternalLinks from "@/components/ExternalLinks"
import { ShadTooltip } from "@/components/ShadTooltip"

import DecentractiveLogo from "~/images/svg/decentractive.svg"

type FooterProps = {
  className?: string
}

const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <>
      <div
        className={clsxm(
          "flex-none h-auto relative w-full border border-t",
          className,
        )}
      >
        <footer className="content-center items-center flex flex-col flex-wrap gap-0 h-min justify-start overflow-hidden relative p-0">
          <div className="items-center flex flex-none flex-col flex-nowrap gap-0 h-min justify-center overflow-visible relative w-full p-4 sm:p-10">
            <div className="flex-col gap-10 justify-start items-start flex flex-none sm:flex-row flex-nowrap sm:gap-5 h-min sm:justify-center max-w-7xl overflow-visible relative w-full pt-0 pb-10 px-0">
              <div className="sm:items-start flex sm:flex-[1_0_0px] flex-col flex-nowrap gap-0 h-min justify-start overflow-visible relative sm:w-px p-0">
                <div className="flex-none overflow-visible relative">
                  <Link {...resolvedRoute("/")} className="group">
                    <ShadTooltip content="Decentractive" side="right">
                      <DecentractiveLogo
                        className="h-7 w-auto"
                        alt="Decentractive"
                        aria-label="Decentractive"
                      />
                    </ShadTooltip>
                  </Link>
                </div>
                <div className="flex flex-col justify-start shrink-0">
                  <h6 className="text-sm text-muted-foreground">
                    We empower you to own your identity.
                  </h6>
                </div>
              </div>
              <div className="gap-10 grid-cols-[repeat(2,minmax(160px,1fr))] grid flex-none sm:gap-0 auto-rows-min sm:grid-cols-[repeat(5,minmax(160px,1fr))] grid-rows-[repeat(1,min-content)] h-min overflow-visible relative w-min p-0">
                <div className="items-start flex flex-none flex-col flex-nowrap gap-2.5 h-auto justify-start justify-self-start overflow-visible relative w-full pl-0 pr-5 py-0">
                  <h6 className="text-sm font-semibold">About Decentractive</h6>
                  <div className="flex-none h-auto relative w-auto text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                    <Link {...resolvedRoute("/app/kyc")}>Our Mission</Link>
                  </div>
                  <div className="flex-none h-auto relative w-auto text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                    <Link {...resolvedRoute("/app/kyc")}>Our Team</Link>
                  </div>
                  <div className="flex-none h-auto relative w-auto text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                    <Link {...resolvedRoute("/app/kyc")}>Careers</Link>
                  </div>
                  <div className="flex-none h-auto relative w-auto text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                    <Link {...resolvedRoute("/app/kyc")}>News & Updates</Link>
                  </div>
                </div>
                <div className="items-start flex flex-none flex-col flex-nowrap gap-2.5 h-auto justify-start justify-self-start overflow-visible relative w-full pl-0 pr-5 py-0">
                  <h6 className="text-sm font-semibold">Resources</h6>
                  <div className="flex-none h-auto relative w-auto text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                    <Link {...resolvedRoute("/app/kyc")}>Developer Docs</Link>
                  </div>
                  <div className="flex-none h-auto relative w-auto text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                    <Link {...resolvedRoute("/app/kyc")}>
                      DID Registrar & Resolver API
                    </Link>
                  </div>
                  <div className="flex-none h-auto relative w-auto text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                    <Link {...resolvedRoute("/app/kyc")}>
                      Guides & Tutorials
                    </Link>
                  </div>
                  <div className="flex-none h-auto relative w-auto text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                    <Link {...resolvedRoute("/app/kyc")}>FAQs</Link>
                  </div>
                </div>
                <div className="items-start flex flex-none flex-col flex-nowrap gap-2.5 h-auto justify-start justify-self-start overflow-visible relative w-full pl-0 pr-5 py-0">
                  <h6 className="text-sm font-semibold">Solutions</h6>
                  <div className="flex-none h-auto relative w-auto text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                    <Link {...resolvedRoute("/app/kyc")}>
                      Industry Applications
                    </Link>
                  </div>
                </div>
                <div className="items-start flex flex-none flex-col flex-nowrap gap-2.5 h-auto justify-start justify-self-start overflow-visible relative w-full pl-0 pr-5 py-0">
                  <h6 className="text-sm font-semibold">Community</h6>
                  <div className="flex-none h-auto relative w-auto text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                    <Link {...resolvedRoute("/app/kyc")}>
                      Join Our Community
                    </Link>
                  </div>
                  <div className="flex-none h-auto relative w-auto text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                    <Link {...resolvedRoute("/app/kyc")}>Get in Touch</Link>
                  </div>
                  <div className="flex-none h-auto relative w-auto text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                    <Link {...resolvedRoute("/app/kyc")}>
                      Ambassador Program
                    </Link>
                  </div>
                </div>
                <div className="items-start flex flex-none flex-col flex-nowrap gap-2.5 h-auto justify-start justify-self-start overflow-visible relative w-full pl-0 pr-5 py-0">
                  <h6 className="text-sm font-semibold">Legal</h6>
                  <div className="flex-none h-auto relative w-auto text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                    <Link {...resolvedRoute("/app/kyc")}>Privacy Policy</Link>
                  </div>
                  <div className="flex-none h-auto relative w-auto text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                    <Link {...resolvedRoute("/app/kyc")}>Terms of Service</Link>
                  </div>
                  <div className="flex-none h-auto relative w-auto text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                    <Link {...resolvedRoute("/app/kyc")}>Cookie Policy</Link>
                  </div>
                  <div className="flex-none h-auto relative w-auto text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                    <Link {...resolvedRoute("/app/kyc")}>Data Protection</Link>
                  </div>
                  <div className="flex-none h-auto relative w-auto text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                    <Link {...resolvedRoute("/app/kyc")}>
                      Acceptable Use Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-start flex flex-none flex-row flex-nowrap gap-5 h-min max-w-7xl overflow-visible relative w-full py-3 sm:py-5 px-0 border-0.5 border-t justify-between mt-10 border-dotted">
              <div className="gap-x-6 flex">
                <div className="flex-none h-auto relative w-auto">
                  <span className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Decentractive
                  </span>
                </div>
              </div>
              <div className="gap-x-6 gap-y-0 whitespace-normal grid-rows-[auto] grid-cols-[max-content] auto-cols-max grid-flow-col place-items-start grid">
                <ExternalLinks />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
