import type { NextPage } from "next"
import Link from "next/link"

import { poppins } from "@/lib/fonts"

import {
  Button,
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components"
import IconComponent from "@/components/GenericIcon/IconComponent"
import Layout from "@/components/Layout"
import Seo from "@/components/Seo"

import HomeNonLoggedEntities from "@/pages/home/HomeNonLoggedEntities"

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Seo />
      <main className="grid h-full w-full items-center md:justify-center">
        <section className="relative overflow-hidden pt-1">
          <div className="mx-auto px-2 pb-20 pt-14">
            <HomeNonLoggedEntities />
          </div>
          {/* <div className="framer">
            <div className="relative w-full h-full flex-none">
              <video
                loop
                autoPlay
                className="cursor-auto w-full h-full block object-cover bg-[rgba(0,0,0,0)] object-[50%_50%] rounded-none"
              >
                <source
                  src="https://framerusercontent.com/assets/EPAjrPciwbYcRG4yHc9GGMQ69KU.webm"
                  type="video/webm; codecs=av01.0.08M.08.0.110.01.01.01.1"
                  media="(min-width:810px) and (-webkit-min-device-pixel-ratio: 2)"
                />
                <source
                  src="https://framerusercontent.com/assets/UEcewUs0sO1esTagR1XENajYHSY.mp4"
                  type="video/mp4; codecs=hvc1.1.6.H120.b0"
                  media="(min-width:810px)"
                />
                <source
                  src="https://framerusercontent.com/assets/2xzmrDT6kHCEyePneiicGOLssgk.webm"
                  type="video/webm; codecs=vp9"
                  media="(min-width:810px)"
                />
              </video>
            </div>
          </div> */}
        </section>
        <div className="grid sm:grid-cols-2 gap-4 mx-auto max-w-7xl overflow-hidden pb-20">
          <div className="px-4 lg:px-8 overflow-hidden">
            <section className="mt-0 sm:mt-5 px-2">
              <p
                className={`mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl ${poppins.className}`}
              >
                <span className="hidden sm:block">
                  <span className="inline-block align-top text-balance">
                    The Problem with Traditional Identity Systems
                  </span>
                </span>
                <span className="sm:hidden">
                  The Problem with Traditional Identity Systems
                </span>
              </p>
              <p className="mt-6 leading-7 sm:text-lg sm:leading-8">
                Today, our personal data is scattered across platforms, exposed
                to privacy risks and security breaches. Traditional identity
                systems rely on centralized databases that are inefficient,
                vulnerable to attacks, and difficult for users to control.
              </p>
              <p className="mt-2 leading-7 sm:text-lg sm:leading-8 font-bold">
                It’s time for a change.
              </p>
            </section>
          </div>
          <div className="px-4 lg:px-8 overflow-hidden">
            <section className="mt-0 sm:mt-5 px-2">
              <p
                className={`mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl ${poppins.className}`}
              >
                <span className="hidden sm:block">
                  <span className="inline-block align-top text-balance">
                    Our Solution: Decentralized Identity and Verifiable
                    Credentials
                  </span>
                </span>
                <span className="sm:hidden">
                  Our Solution: Decentralized Identity and Verifiable
                  Credentials
                </span>
              </p>
              <p className="mt-6 leading-7 sm:text-lg sm:leading-8">
                Our platform empowers you to manage secure, private credentials
                with ease. Through Decentralized Identifiers (DIDs) and
                Verifiable Credentials (VCs), we bring privacy, control, and
                efficiency to identity management—putting you in charge of your
                data, every step of the way.
              </p>
              <Button variant="link" className="pl-0">
                <div className="flex">
                  <span className="self-center text-[#FF5557] font-semibold">
                    Discover How It Works{" "}
                  </span>
                  <IconComponent
                    name="ChevronRight"
                    className="h-5 w-5 text-[#FF5557]"
                  />
                </div>
              </Button>
            </section>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 lg:px-8 overflow-hidden pb-20">
          <section className="mt-0 sm:mt-5 px-2">
            <h2 className="font-semibold tracking-tight text-[#FF5557]">
              Features & Benefits
            </h2>
            <p
              className={`mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl ${poppins.className}`}
            >
              <span className="hidden sm:block">
                <span className="inline-block align-top text-balance">
                  Why Choose Our Decentralized Identity Solution?
                </span>
              </span>
              <span className="sm:hidden">
                Why Choose Our Decentralized Identity Solution?
              </span>
            </p>
            <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-14 lg:grid-cols-2">
              <li className="flex flex-col items-start justify-between">
                <div>
                  <div className="-ml-1.5 mb-3 h-14 w-14 sm:mb-6 pt-3 border rounded-lg bg-foreground text-background shadow-lg">
                    <IconComponent
                      name="ShieldCheck"
                      className="w-8 h-8 m-auto"
                    />
                  </div>
                  <h4 className="mt-2 font-semibold cursor-pointer flex gap-1">
                    Privacy and Security by Design
                  </h4>
                  <p className="mt-2 text-base/7 text-muted-foreground lg:text-md/7">
                    Protect your data with end-to-end encryption and
                    decentralized storage. Our solution ensures only you decide
                    who can access your credentials, reducing risks of data
                    breaches and misuse.
                  </p>
                </div>
              </li>
              <li className="flex flex-col items-start justify-between">
                <div>
                  <div className="-ml-1.5 mb-3 h-14 w-14 sm:mb-6 pt-3 border rounded-lg bg-foreground text-background">
                    <IconComponent name="Zap" className="w-8 h-8 m-auto" />
                  </div>
                  <h4 className="mt-2 font-semibold cursor-pointer flex gap-1">
                    Simplified Credential Verification
                  </h4>
                  <p className="mt-2 text-base/7 text-muted-foreground lg:text-md/7">
                    No more waiting. Verifiers can instantly confirm the
                    authenticity of credentials without contacting the issuer,
                    streamlining the verification process and cutting down
                    unnecessary back-and-forth.
                  </p>
                </div>
              </li>
              <li className="flex flex-col items-start justify-between">
                <div>
                  <div className="-ml-1.5 mb-3 h-14 w-14 sm:mb-6 pt-3 border rounded-lg bg-foreground text-background">
                    <IconComponent name="Gavel" className="w-8 h-8 m-auto" />
                  </div>
                  <h4 className="mt-2 font-semibold cursor-pointer flex gap-1">
                    Regulatory Compliance and Standards-Based
                  </h4>
                  <p className="mt-2 text-base/7 text-muted-foreground lg:text-md/7">
                    Built on the W3C DID and Verifiable Credentials standards,
                    our solution aligns with global regulatory requirements,
                    from GDPR to HIPAA, ensuring trust and compliance across
                    industries.
                  </p>
                </div>
              </li>
              <li className="flex flex-col items-start justify-between">
                <div>
                  <div className="-ml-1.5 mb-3 h-14 w-14 sm:mb-6 pt-3 border rounded-lg bg-foreground text-background">
                    <IconComponent name="GitFork" className="w-8 h-8 m-auto" />
                  </div>
                  <h4 className="mt-2 font-semibold cursor-pointer flex gap-1">
                    Interoperable Across Networks
                  </h4>
                  <p className="mt-2 text-base/7 text-muted-foreground lg:text-md/7">
                    Our platform supports DIDs across multiple blockchains and
                    networks, ensuring flexibility and compatibility for
                    verifiers and issuers in diverse ecosystems.
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-10 sm:flex sm:items-center sm:justify-center sm:gap-x-4">
              <Button size="lg" variant="default">
                <Link href="/reviews">Learn More About the Technology</Link>
              </Button>
            </div>
          </section>
        </div>
        <div className="mx-auto max-w-7xl px-4 pt-10 lg:px-8 overflow-hidden pb-20">
          <section className="mt-0 sm:mt-5 px-2">
            <h2 className="font-semibold tracking-tight text-[#FF5557]">
              How It Works
            </h2>
            <p
              className={`mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl ${poppins.className}`}
            >
              <span className="hidden sm:block">
                <span className="inline-block align-top text-balance">
                  We make it easy for both issuers and verifiers.
                </span>
              </span>
              <span className="sm:hidden">
                We make it easy for both issuers and verifiers.
              </span>
            </p>
            <div className="mt-12 relative flex flex-wrap sm:mt-14">
              <div className="absolute left-0 right-0 top-6 hidden h-[1px]   lg:block ">
                <div className="h-[1px] w-full bg-teal-500 bg-gradient-to-r from-[#FF5557] ">
                  ‌
                </div>
              </div>
              <div className="mb-4 grid lg:grid-cols-3 lg:gap-8">
                <div className="mb-4 w-full">
                  <span className="relative mb-3 sm:mb-6 flex h-12 w-12 font-bold items-center justify-center rounded-full bg-[#FF5557] text-[#FFF] text-3xl slashZero">
                    1
                  </span>
                  <div className="mb-8 lg:mb-10">
                    <h4 className="mt-2 font-semibold text-lg cursor-pointer flex gap-1 mb-3">
                      Issue
                    </h4>
                    <p className="text-base/7 text-muted-foreground lg:text-md/7">
                      Trusted organizations create and issue verifiable
                      credentials (VCs) to individuals using Decentralized
                      Identifiers (DIDs).
                    </p>
                  </div>
                </div>
                <div className="mb-4 w-full">
                  <span className="relative mb-3 sm:mb-6 flex h-12 w-12 font-bold items-center justify-center rounded-full bg-[#FF5557] text-[#FFF] text-3xl slashZero">
                    2
                  </span>
                  <div className="mb-8 lg:mb-10">
                    <h4 className="mt-2 font-semibold text-lg cursor-pointer flex gap-1 mb-3">
                      Store
                    </h4>
                    <p className="text-base/7 text-muted-foreground lg:text-md/7">
                      Individuals securely store these credentials in their
                      digital wallets, fully controlling access and
                      distribution.
                    </p>
                  </div>
                </div>
                <div className="mb-4 w-full">
                  <span className="relative mb-3 sm:mb-6 flex h-12 w-12 font-bold items-center justify-center rounded-full bg-[#FF5557] text-[#FFF] text-3xl slashZero">
                    3
                    <span className="absolute z-20 border flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white opacity-5">
                      dfsdf
                    </span>
                  </span>
                  <div className="mb-8 lg:mb-10">
                    <h4 className="mt-2 font-semibold text-lg cursor-pointer flex gap-1 mb-3">
                      Verify
                    </h4>
                    <p className="text-base/7 text-muted-foreground lg:text-md/7">
                      Organizations can instantly verify the authenticity of
                      credentials, ensuring trust, privacy, and efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="mx-auto max-w-sm sm:max-w-7xl px-4 lg:px-8 overflow-hidden pb-20">
          <section className="mt-0 sm:mt-5 px-2">
            <h2 className="font-semibold tracking-tight text-[#FF5557]">
              Use cases
            </h2>
            <p
              className={`mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl ${poppins.className}`}
            >
              <span className="hidden sm:block">
                <span className="inline-block align-top text-balance">
                  Use Cases Across Industries
                </span>
              </span>
              <span className="sm:hidden">Use Cases Across Industries</span>
            </p>
            <Carousel
              opts={{
                align: "start",
              }}
              className="ml-[2rem] mt-12 relative flex flex-wrap sm:mt-14 w-[calc(100%-4rem)]"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <div className="grid grid-rows-[auto,auto] gap-4">
                          <h4 className="text-lg font-semibold text-left">
                            Education
                          </h4>
                          <p className="text-base/7 text-muted-foreground">
                            Enable universities and institutions to issue
                            tamper-proof diplomas and certificates, easily
                            verified by employers worldwide.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <div className="grid grid-rows-[auto,auto] gap-4">
                          <h4 className="text-lg font-semibold text-left">
                            Finance
                          </h4>
                          <p className="text-base/7 text-muted-foreground">
                            Streamline KYC (Know Your Customer) processes with
                            verifiable credentials, reducing onboarding time and
                            enhancing customer experience.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <div className="grid grid-rows-[auto,auto] gap-4">
                          <h4 className="text-lg font-semibold text-left">
                            Healthcare
                          </h4>
                          <p className="text-base/7 text-muted-foreground">
                            Empower patients with verifiable health credentials,
                            reducing paperwork and ensuring privacy while
                            meeting HIPAA compliance.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <div className="grid grid-rows-[auto,auto] gap-4">
                          <h4 className="text-lg font-semibold text-left">
                            Government & Public Services
                          </h4>
                          <p className="text-base/7 text-muted-foreground">
                            Provide citizens with secure digital identities,
                            enhancing accessibility to services while ensuring
                            data privacy and sovereignty.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="mt-10 sm:flex sm:items-center sm:justify-center sm:gap-x-4">
              <Button size="lg" variant="default">
                <Link href="/reviews">See All Use Cases</Link>
              </Button>
            </div>
          </section>
        </div>
        {/* <div className="lg:w-full lg:max-w-4xl mx-auto px-4 pb-20 pt-14">
          <div className="mt-4 sm:mt-8 sm:text-center">
            <h1
              className={`text-4xl font-semibold sm:text-6xl tracking-tight ${poppins.className}`}
            >
              <span className="hidden sm:block align-top text-balance">
                Ready to Transform Identity Verification?
              </span>
              <span className="sm:hidden">
                Ready to Transform Identity Verification?
              </span>
            </h1>
            <p className="mt-6 leading-7 sm:text-lg sm:leading-8">
              <span className="hidden sm:block">
                <span className="inline-block text-justify align-top">
                  Experience a new standard in identity management that
                  prioritizes privacy, security, and user control. Whether
                  you're an organization looking to issue secure credentials or
                  a verifier seeking instant, trustworthy validation, our
                  platform is designed for you. Join us in building the future
                  of decentralized identity.
                </span>
              </span>
              <span className="sm:hidden">
                Experience a new standard in identity management that
                prioritizes privacy, security, and user control. Whether you're
                an organization looking to issue secure credentials or a
                verifier seeking instant, trustworthy validation, our platform
                is designed for you. Join us in building the future of
                decentralized identity.
              </span>
            </p>
            <div className="mt-10 sm:flex sm:items-center sm:justify-center sm:gap-x-4">
              <Button size="lg" variant="default">
                <Link href="/reviews">Get Started Today</Link>
              </Button>
              <Button variant="link">
                <div className="flex">
                  <span className="text-sm self-center text-[#FF5557]">
                    Request a Demo{" "}
                  </span>
                  <IconComponent
                    name="ChevronRight"
                    className="h-5 w-5 text-[#FF5557]"
                  />
                </div>
              </Button>
            </div>
          </div>
        </div> */}
      </main>
    </Layout>
  )
}

export default HomePage
