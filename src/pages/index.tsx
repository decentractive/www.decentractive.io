import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import clsxm from "@/lib/clsxm"
import { gabarito } from "@/lib/fonts"

import {
  Button,
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Label,
  Separator,
} from "@/components"
import IconComponent from "@/components/GenericIcon/IconComponent"
import Layout from "@/components/Layout"
import Seo from "@/components/Seo"

import { useDarkAtom } from "@/atom/darkAtom"
import HomeNonLoggedEntities from "@/pages/home/HomeNonLoggedEntities"

import network_dark from "~/videos/network_dark.mp4"
import network_dark_webm from "~/videos/network_dark.webm"
import network_light from "~/videos/network_light.mp4"
import network_light_webm from "~/videos/network_light.webm"

const HomePage: NextPage = () => {
  const { dark } = useDarkAtom()

  const vidRefDark = React.useRef<HTMLVideoElement>(null)
  const vidRefLight = React.useRef<HTMLVideoElement>(null)

  React.useEffect(() => {
    vidRefDark.current?.load()
    vidRefLight.current?.load()
  }, [dark])

  return (
    <Layout>
      <Seo />
      <main className="grid h-full w-full items-center md:justify-center">
        <section className="relative overflow-hidden pt-1">
          <div className="mx-auto px-4 pb-20 pt-14 relative z-10 w-full">
            <HomeNonLoggedEntities />
          </div>
          <div className="framer">
            {dark ? (
              <div className="h-full w-full flex-none">
                <video
                  ref={vidRefDark}
                  preload="auto"
                  playsInline
                  autoPlay
                  muted
                  loop
                  data-aos="fade-in"
                  data-aos-delay="50"
                  className="cursor-auto w-full h-full block object-cover bg-[rgba(0,0,0,0)] object-[50%_50%] rounded-none"
                >
                  <source
                    src={network_dark_webm}
                    type="video/webm; codecs=vp9"
                  />
                  <source
                    src={network_dark}
                    type="video/mp4; codecs=hvc1.1.6.H120.b0"
                  />
                </video>
              </div>
            ) : (
              <div className="h-full w-full flex-none">
                <video
                  ref={vidRefLight}
                  preload="auto"
                  playsInline
                  autoPlay
                  muted
                  loop
                  data-aos="fade-in"
                  data-aos-delay="50"
                  className="cursor-auto w-full h-full block object-cover bg-[rgba(0,0,0,0)] object-[50%_50%] rounded-none"
                >
                  <source
                    src={network_light_webm}
                    type="video/webm; codecs=vp9"
                  />
                  <source
                    src={network_light}
                    type="video/mp4; codecs=hvc1.1.6.H120.b0"
                  />
                </video>
              </div>
            )}
          </div>
        </section>
        <div className="grid sm:grid-cols-2 gap-4 mx-auto max-w-7xl overflow-hidden pb-20 mt-10">
          <div className="px-4 lg:px-8 overflow-hidden">
            <section className="mt-0 sm:mt-5 px-2">
              <p
                className={`mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl ${gabarito.className}`}
                data-aos="fade-up"
                data-aos-delay="50"
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
              <div data-aos="fade-up" data-aos-delay="10">
                <p className="mt-6 leading-7 sm:text-lg sm:leading-8">
                  Today, our personal data is scattered across platforms,
                  exposed to privacy risks and security breaches. Traditional
                  identity systems rely on centralized databases that are
                  inefficient, vulnerable to attacks, and difficult for users to
                  control.
                </p>
                <p className="mt-2 leading-7 sm:text-lg sm:leading-8 font-bold">
                  It’s time for a change.
                </p>
              </div>
            </section>
          </div>
          <div className="px-4 lg:px-8 overflow-hidden">
            <section className="mt-0 sm:mt-5 px-2">
              <p
                className={`mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl ${gabarito.className}`}
                data-aos="fade-up"
                data-aos-delay="50"
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
              <div data-aos="fade-up" data-aos-delay="10">
                <p className="mt-6 leading-7 sm:text-lg sm:leading-8">
                  Our platform empowers you to manage secure, private
                  credentials with ease. Through Decentralized Identifiers
                  (DIDs) and Verifiable Credentials (VCs), we bring privacy,
                  control, and efficiency to identity management—putting you in
                  charge of your data, every step of the way.
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
              </div>
            </section>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 lg:px-8 overflow-hidden pb-20">
          <section className="mt-0 sm:mt-5 px-2">
            <div data-aos="fade-up" data-aos-delay="50">
              <h2 className="font-semibold tracking-tight text-[#FF5557]">
                Features & Benefits
              </h2>
              <p
                className={`mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl ${gabarito.className}`}
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
              <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
                <li className="flex flex-col items-start justify-between">
                  <div data-aos="fade-up" data-aos-delay="10">
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
                      decentralized storage. Our solution ensures only you
                      decide who can access your credentials, reducing risks of
                      data breaches and misuse.
                    </p>
                  </div>
                </li>
                <li className="flex flex-col items-start justify-between">
                  <div data-aos="fade-up" data-aos-delay="10">
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
                  <div data-aos="fade-up" data-aos-delay="10">
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
                  <div data-aos="fade-up" data-aos-delay="10">
                    <div className="-ml-1.5 mb-3 h-14 w-14 sm:mb-6 pt-3 border rounded-lg bg-foreground text-background">
                      <IconComponent
                        name="GitFork"
                        className="w-8 h-8 m-auto"
                      />
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
                  <Link href="#howItWorks">
                    Learn More About the Technology
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
        <div
          className="mx-auto max-w-7xl px-4 pt-10 lg:px-8 overflow-hidden pb-10"
          id="howItWorks"
        >
          <section className="mt-5 sm:mt-10 px-2">
            <div data-aos="fade-up" data-aos-delay="50">
              <h2 className="font-semibold tracking-tight text-[#FF5557]">
                How It Works
              </h2>
              <p
                className={`mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl ${gabarito.className}`}
                id="credentialFlow"
              >
                <span className="hidden sm:block">
                  <span className="inline-block align-top text-balance">
                    How Decentractive Works
                  </span>
                </span>
                <span className="sm:hidden">How Decentractive Works</span>
              </p>
              <p className="mt-3 leading-7 sm:text-lg sm:leading-8">
                With Decentralized Identifiers (DIDs) and Verifiable Credentials
                (VCs), Decentractive enables secure, self-sovereign identity
                management.
              </p>
            </div>
            <div
              className="mt-6 hidden sm:block relative flex-wrap sm:mt-7"
              data-aos="fade-up"
              data-aos-delay="10"
            >
              <div className="absolute left-0 right-0 top-4 hidden h-[1px] lg:block ">
                <div className="h-[1px] ml-4 w-2/3 bg-teal-500 bg-gradient-to-r from-[#FF5557] ">
                  ‌
                </div>
              </div>
              <div className="mb-4 grid lg:grid-cols-3 gap-0">
                <div className="mb-4 w-full px-4">
                  <span className="relative mb-3 sm:mb-6 flex h-8 w-8 font-bold items-center justify-center rounded-full bg-[#FF5557] text-[#FFF]">
                    1
                  </span>
                  <div className="mb-8 lg:mb-10">
                    <Card className="max-w-xl w-full bg-[linear-gradient(209.48deg,_#F3F2E9_-0.82%,_#E9F3E9_77.43%)] dark:bg-[linear-gradient(110.1deg,_rgba(46,_29,_99,_0.4)_0%,_#3D0F34_100%)] border-none">
                      <CardContent className="p-4">
                        <div className="font-semibold pb-3 text-lg">Issue</div>
                        <Separator />
                        <p className="text-base/7 text-muted-foreground lg:text-md/7 pt-3">
                          Trusted organizations create and issue verifiable
                          credentials (VCs) to individuals using Decentralized
                          Identifiers (DIDs).
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="mb-4 w-full px-4">
                  <span className="relative mb-3 sm:mb-6 flex h-8 w-8 font-bold items-center justify-center rounded-full bg-[#FF5557] text-[#FFF]">
                    2
                  </span>
                  <div className="mb-8 lg:mb-10">
                    <Card className="max-w-xl w-full bg-[linear-gradient(125.85deg,_#E6F1F7_5.4%,_#E2E7F3_51.6%,_#E2E1F1_92.37%)] dark:bg-[linear-gradient(141.64deg,_#26066B_3.52%,_#0E3551_66.02%,_#052847_88.03%)] border-none">
                      <CardContent className="p-4">
                        <div className="font-semibold pb-3 text-lg">Store</div>
                        <Separator />
                        <p className="text-base/7 text-muted-foreground lg:text-md/7 pt-3">
                          Individuals securely store these credentials in their
                          digital wallets, fully controlling access and
                          distribution.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="mb-4 w-full px-4">
                  <span className="relative mb-3 sm:mb-6 flex h-8 w-8 font-bold items-center justify-center rounded-full bg-[#FF5557] text-[#FFF]">
                    3
                  </span>
                  <div className="mb-8 lg:mb-10">
                    <Card className="max-w-xl w-full bg-[linear-gradient(166.95deg,_#F3E8ED_-2.86%,_#E9E7FD_139.46%)] dark:bg-[linear-gradient(200.41deg,_rgba(99,_29,_62,_0.4)_-5.53%,_rgba(35,_98,_111,_0.5)_97.77%)] border-none">
                      <CardContent className="p-4">
                        <div className="font-semibold pb-3 text-lg">Verify</div>
                        <Separator />
                        <p className="text-base/7 text-muted-foreground lg:text-md/7 pt-3">
                          Organizations can instantly verify the authenticity of
                          credentials, ensuring trust, privacy, and efficiency.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
            <ul
              className="mt-6 w-full sm:hidden"
              data-aos="fade-up"
              data-aos-delay="10"
            >
              <li
                className={clsxm(
                  "flex flex-col space-y-2 border-l border-[#FF5557] pl-4 ml-4",
                )}
              >
                <div
                  className={clsxm("-ml-8 grid grid-cols-[32px,auto] gap-2")}
                >
                  <div className="w-8 h-8 p-1 font-semibold text-center rounded-full bg-[#FF5557] text-[#FFF] border border-foreground/10">
                    1
                  </div>
                  <div className="grid grid-rows-[auto,auto] gap-2">
                    <div
                      className={clsxm("flex items-center space-x-2 -mt-2 p-2")}
                    >
                      <Card className="max-w-xl w-full bg-[linear-gradient(209.48deg,_#F3F2E9_-0.82%,_#E9F3E9_77.43%)] dark:bg-[linear-gradient(110.1deg,_rgba(46,_29,_99,_0.4)_0%,_#3D0F34_100%)] border-none">
                        <CardContent className="p-4">
                          <div className="font-semibold pb-3 text-lg">
                            Issue
                          </div>
                          <Separator />
                          <p className="text-base/7 text-muted-foreground lg:text-md/7 pt-3">
                            Trusted organizations create and issue verifiable
                            credentials (VCs) to individuals using Decentralized
                            Identifiers (DIDs).
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className={clsxm(
                  "flex flex-col space-y-2 border-l border-[#FF5557] pl-4 ml-4",
                )}
              >
                <div
                  className={clsxm("-ml-8 grid grid-cols-[32px,auto] gap-2")}
                >
                  <div className="w-8 h-8 p-1 font-semibold text-center rounded-full bg-[#FF5557] text-[#FFF] border border-foreground/10">
                    2
                  </div>
                  <div className="grid grid-rows-[auto,auto] gap-2">
                    <div
                      className={clsxm("flex items-center space-x-2 -mt-2 p-2")}
                    >
                      <Card className="max-w-xl w-full bg-[linear-gradient(125.85deg,_#E6F1F7_5.4%,_#E2E7F3_51.6%,_#E2E1F1_92.37%)] dark:bg-[linear-gradient(141.64deg,_#26066B_3.52%,_#0E3551_66.02%,_#052847_88.03%)] border-none">
                        <CardContent className="p-4">
                          <div className="font-semibold pb-3 text-lg">
                            Store
                          </div>
                          <Separator />
                          <p className="text-base/7 text-muted-foreground lg:text-md/7 pt-3">
                            Individuals securely store these credentials in
                            their digital wallets, fully controlling access and
                            distribution.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </li>
              <li className={clsxm("flex flex-col space-y-2 pl-4 ml-4")}>
                <div
                  className={clsxm("-ml-8 grid grid-cols-[32px,auto] gap-2")}
                >
                  <div className="w-8 h-8 p-1 font-semibold text-center rounded-full bg-[#FF5557] text-[#FFF] border border-foreground/10">
                    3
                  </div>
                  <div className="grid grid-rows-[auto,auto] gap-2">
                    <div
                      className={clsxm("flex items-center space-x-2 -mt-2 p-2")}
                    >
                      <Card className="max-w-xl w-full bg-[linear-gradient(166.95deg,_#F3E8ED_-2.86%,_#E9E7FD_139.46%)] dark:bg-[linear-gradient(200.41deg,_rgba(99,_29,_62,_0.4)_-5.53%,_rgba(35,_98,_111,_0.5)_97.77%)] border-none">
                        <CardContent className="p-4">
                          <div className="font-semibold pb-3 text-lg">
                            Verify
                          </div>
                          <Separator />
                          <p className="text-base/7 text-muted-foreground lg:text-md/7 pt-3">
                            Organizations can instantly verify the authenticity
                            of credentials, ensuring trust, privacy, and
                            efficiency.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div
          className="mx-auto max-w-7xl px-4 pt-10 lg:px-8 overflow-hidden pb-20"
          id="securityPrivacy"
        >
          <section className="mt-5 sm:mt-10 px-2">
            <div data-aos="fade-up" data-aos-delay="50">
              <h2 className="font-semibold tracking-tight text-[#FF5557]">
                Security & Privacy
              </h2>
              <p
                className={`mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl ${gabarito.className}`}
              >
                <span className="hidden sm:block">
                  <span className="inline-block align-top text-balance">
                    Security and Privacy First
                  </span>
                </span>
                <span className="sm:hidden">Security and Privacy First</span>
              </p>
              <p className="mt-3 leading-7 sm:text-lg sm:leading-8">
                Building trust through robust security and user-centric privacy
                protections.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-[auto,60%] gap-x-8 gap-y-6">
              <p
                className="text-base/7 text-muted-foreground lg:text-md/7 text-balance"
                data-aos="fade-up"
                data-aos-delay="10"
              >
                At Decentractive, we prioritize your data’s security and privacy
                from the ground up. We implement industry-standard encryption,
                adhere to GDPR guidelines, and follow privacy-by-design
                principles to ensure user control and data protection. As we
                grow, our commitment to security and privacy will continue to
                evolve, aligning with global standards to meet the needs of all
                our users.
              </p>
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-4"
                data-aos="fade-up"
                data-aos-delay="10"
              >
                <Card className="bg-accent/30">
                  <CardContent className="p-2">
                    <div className="grid grid-cols-[48px,auto] gap-2">
                      <div className="h-10 w-10 pt-2 border rounded-lg bg-foreground text-background shadow-lg self-center">
                        <IconComponent name="Lock" className="w-6 h-6 m-auto" />
                      </div>
                      <div>
                        <Label className="text-base">Data Encryption</Label>
                        <p className="text-sm text-muted-foreground">
                          End-to-end encryption to secure data in storage and
                          transit.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-accent/30">
                  <CardContent className="p-2">
                    <div className="grid grid-cols-[48px,auto] gap-2">
                      <div className="h-10 w-10 pt-2 border rounded-lg bg-foreground text-background shadow-lg self-center">
                        <IconComponent
                          name="UserCog"
                          className="w-6 h-6 m-auto"
                        />
                      </div>
                      <div>
                        <Label className="text-base">
                          User-Controlled Access
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Manage who can access your credentials. You decide who
                          to share your data with.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-accent/30">
                  <CardContent className="p-2">
                    <div className="grid grid-cols-[48px,auto] gap-2">
                      <div className="h-10 w-10 pt-2 border rounded-lg bg-foreground text-background shadow-lg self-center">
                        <IconComponent
                          name="ShieldCheck"
                          className="w-6 h-6 m-auto"
                        />
                      </div>
                      <div>
                        <Label className="text-base">Privacy by Design</Label>
                        <p className="text-sm text-muted-foreground">
                          Privacy-focused from the start to protect user data.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-accent/30">
                  <CardContent className="p-2">
                    <div className="grid grid-cols-[48px,auto] gap-2">
                      <div className="h-10 w-10 pt-2 border rounded-lg bg-foreground text-background shadow-lg self-center">
                        <IconComponent
                          name="Gavel"
                          className="w-6 h-6 m-auto"
                        />
                      </div>
                      <div>
                        <Label className="text-base">
                          GDPR Compliance Ready
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Following GDPR principles to ensure privacy and data
                          protection.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
        <div className="mx-auto max-w-7xl px-4 pt-10 lg:px-10 overflow-hidden pb-20">
          <section className="mt-0 sm:mt-5 px-2">
            <div data-aos="fade-up" data-aos-delay="50">
              <h2 className="font-semibold tracking-tight text-[#FF5557]">
                Use cases
              </h2>
              <p
                className={`mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl ${gabarito.className}`}
              >
                <span className="hidden sm:block">
                  <span className="inline-block align-top text-balance">
                    Use Cases Across Industries
                  </span>
                </span>
                <span className="sm:hidden">Use Cases Across Industries</span>
              </p>
              <p className="mt-3 leading-7 sm:text-lg sm:leading-8">
                Transforming Industries with Secure, Self-Sovereign Identity
                Solutions
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="10">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full mt-4 sm:mt-6 max-w-[18rem] sm:max-w-full ml-[3rem] sm:ml-0"
                data-aos="fade-up"
                data-aos-delay="10"
              >
                <CarouselContent>
                  <CarouselItem className="sm:basis-1/3">
                    <div className="flex flex-col relative overflow-hidden text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-md rounded-xl w-full h-[300px] col-span-12 sm:col-span-7">
                      <div className="flex p-3 w-full justify-start shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-lg absolute z-10 top-1 flex-col items-start">
                        <p className="text-base text-[#fff]/60 uppercase font-bold">
                          Education
                        </p>
                        <h5 className="text-[#fff]/90 font-medium text-xl bg-[#000]/40">
                          Academic Credentials
                        </h5>
                      </div>
                      <Image
                        src="/images/jpg/education.jpg"
                        className="relative opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none rounded-lg z-0 w-full h-full object-cover"
                        alt="Academic Credentials"
                        data-loaded="true"
                        width={0}
                        height={0}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                      <div className="p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large backdrop-blur backdrop-saturate-150 absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                        <div className="flex flex-grow gap-2 items-center">
                          <div className="flex flex-col">
                            <p className="text-sm text-[#fff]/80">
                              Enable universities and institutions to issue
                              tamper-proof diplomas and certificates, easily
                              verified by employers worldwide.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="sm:basis-1/3">
                    <div className="flex flex-col relative overflow-hidden text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-md rounded-xl w-full h-[300px] col-span-12 sm:col-span-7">
                      <div className="flex p-3 w-full justify-start shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-lg absolute z-10 top-1 flex-col items-start">
                        <p className="text-base text-[#fff]/60 uppercase font-bold">
                          Finance
                        </p>
                        <h5 className="text-[#fff]/90 font-medium text-xl bg-[#000]/40">
                          KYC & Onboarding
                        </h5>
                      </div>
                      <Image
                        src="/images/jpg/finance.jpg"
                        className="relative opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none rounded-lg z-0 w-full h-full object-cover"
                        alt="KYC & Onboarding"
                        data-loaded="true"
                        width={0}
                        height={0}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                      <div className="p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large backdrop-blur backdrop-saturate-150 absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                        <div className="flex flex-grow gap-2 items-center">
                          <div className="flex flex-col">
                            <p className="text-sm text-[#fff]/80">
                              Streamline KYC (Know Your Customer) processes with
                              verifiable credentials, reducing onboarding time
                              and enhancing customer experience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="sm:basis-1/3">
                    <div className="flex flex-col relative overflow-hidden text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-md rounded-xl w-full h-[300px] col-span-12 sm:col-span-7">
                      <div className="flex p-3 w-full justify-start shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-lg absolute z-10 top-1 flex-col items-start">
                        <p className="text-base text-[#000]/60 uppercase font-bold">
                          Healthcare
                        </p>
                        <h5 className="text-[#000]/90 font-medium text-xl">
                          Health Credentials
                        </h5>
                      </div>
                      <Image
                        src="/images/jpg/healthcare.jpg"
                        className="relative opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none rounded-lg z-0 w-full h-full object-cover"
                        alt="Health Credentials"
                        data-loaded="true"
                        width={0}
                        height={0}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                      <div className="p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large backdrop-blur backdrop-saturate-150 absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                        <div className="flex flex-grow gap-2 items-center">
                          <div className="flex flex-col">
                            <p className="text-sm text-[#fff]/80">
                              Empower patients with verifiable health
                              credentials, reducing paperwork and ensuring
                              privacy while meeting HIPAA compliance.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="sm:basis-1/3">
                    <div className="flex flex-col relative overflow-hidden text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-md rounded-xl w-full h-[300px] col-span-12 sm:col-span-7">
                      <div className="flex p-3 w-full justify-start shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-lg absolute z-10 top-1 flex-col items-start">
                        <p className="text-base text-[#fff]/60 uppercase font-bold">
                          Government & Public Services
                        </p>
                        <h5 className="text-[#fff]/90 font-medium text-xl">
                          Digital Identity
                        </h5>
                      </div>
                      <Image
                        src="/images/jpg/government.jpg"
                        className="relative opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none rounded-lg z-0 w-full h-full object-cover"
                        alt="Digital Identity"
                        data-loaded="true"
                        width={0}
                        height={0}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                      <div className="p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large backdrop-blur backdrop-saturate-150 absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                        <div className="flex flex-grow gap-2 items-center">
                          <div className="flex flex-col">
                            <p className="text-sm text-[#fff]/80">
                              Provide citizens with secure digital identities,
                              enhancing accessibility to services while ensuring
                              data privacy and sovereignty.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="bg-[#FF5557] hover:bg-red-700 hover:text-[#fff] disabled:bg-[#FF5557] text-[#fff] border-none font-semibold" />
                <CarouselNext className="bg-[#FF5557] hover:bg-red-700 hover:text-[#fff]  disabled:bg-[#FF5557] text-[#fff] border-none font-semibold" />
              </Carousel>
              <div className="mt-10 sm:flex sm:items-center sm:justify-center sm:gap-x-4">
                <Button size="lg" variant="default">
                  See All Use Cases
                </Button>
              </div>
            </div>
          </section>
        </div>
        <div className="lg:w-full lg:max-w-4xl mx-auto px-4 pb-20 pt-6">
          <div className="mt-4 sm:mt-8 sm:text-center">
            <h1
              className={`text-5xl font-semibold sm:text-6xl tracking-tight ${gabarito.className}`}
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <span className="hidden sm:block align-top text-balance">
                Ready to Transform Identity Verification?
              </span>
              <span className="sm:hidden">
                Ready to Transform Identity Verification?
              </span>
            </h1>
            <div data-aos="fade-up" data-aos-delay="10">
              <p className="mt-6 leading-7 sm:text-lg sm:leading-8">
                <span className="hidden sm:block">
                  <span className="inline-block text-justify align-top text-muted-foreground">
                    Experience a new standard in identity management that
                    prioritizes privacy, security, and user control. Whether
                    you're an organization looking to issue secure credentials
                    or a verifier seeking instant, trustworthy validation, our
                    platform is designed for you. Join us in building the future
                    of decentralized identity.
                  </span>
                </span>
                <span className="sm:hidden text-muted-foreground">
                  Experience a new standard in identity management that
                  prioritizes privacy, security, and user control. Whether
                  you're an organization looking to issue secure credentials or
                  a verifier seeking instant, trustworthy validation, our
                  platform is designed for you. Join us in building the future
                  of decentralized identity.
                </span>
              </p>
              <div className="mt-10 sm:flex sm:items-center sm:justify-center sm:gap-x-4">
                <Button size="lg" variant="default">
                  Let's do it
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
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default HomePage
