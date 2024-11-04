import type { NextPage } from "next"
import Link from "next/link"
import React from "react"

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
} from "@/components"
import IconComponent from "@/components/GenericIcon/IconComponent"
import Layout from "@/components/Layout"
import Seo from "@/components/Seo"

import { useDarkAtom } from "@/atom/darkAtom"
import HomeNonLoggedEntities from "@/pages/home/HomeNonLoggedEntities"

import network_dark from "~/videos/network_dark.mp4"
import network_light from "~/videos/network_light.mp4"

const HomePage: NextPage = () => {
  const { dark } = useDarkAtom()
  const [network, setNetwork] = React.useState(
    dark ? network_dark : network_light,
  )
  const vidRef = React.useRef<HTMLVideoElement>(null)

  React.useEffect(() => {
    if (dark) {
      setNetwork(network_dark)
    } else {
      setNetwork(network_light)
    }
    vidRef.current?.load()
  }, [dark])

  return (
    <Layout>
      <Seo />
      <main className="grid h-full w-full items-center md:justify-center">
        <section className="relative overflow-hidden pt-1">
          <div className="mx-auto px-2 pb-20 pt-14 relative z-10">
            <HomeNonLoggedEntities />
          </div>
          <div className="framer">
            <div className="relative w-full h-full flex-none">
              <video
                ref={vidRef}
                preload="auto"
                playsInline
                autoPlay
                muted
                loop
                className="cursor-auto w-full h-full block object-cover bg-[rgba(0,0,0,0)] object-[50%_50%] rounded-none"
                data-aos="fade-in"
                data-aos-delay="50"
              >
                <source
                  src={network}
                  type="video/mp4; codecs=hvc1.1.6.H120.b0"
                  media="(min-width:810px)"
                />
              </video>
            </div>
          </div>
        </section>
        <div className="grid sm:grid-cols-2 gap-4 mx-auto max-w-7xl overflow-hidden pb-20 mt-10">
          <div className="px-4 lg:px-8 overflow-hidden">
            <section className="mt-0 sm:mt-5 px-2">
              <p
                className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl"
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
                className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl"
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
              <p className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                <span className="hidden sm:block">
                  <span className="inline-block align-top text-balance">
                    Why Choose Our Decentralized Identity Solution?
                  </span>
                </span>
                <span className="sm:hidden">
                  Why Choose Our Decentralized Identity Solution?
                </span>
              </p>
            </div>
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
                    decentralized storage. Our solution ensures only you decide
                    who can access your credentials, reducing risks of data
                    breaches and misuse.
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
            <div
              className="mt-10 sm:flex sm:items-center sm:justify-center sm:gap-x-4"
              data-aos="fade-up"
              data-aos-delay="10"
            >
              <Button size="lg" variant="default">
                <Link href="#howItWorks">Learn More About the Technology</Link>
              </Button>
            </div>
          </section>
        </div>
        <div
          className="mx-auto max-w-7xl px-4 pt-10 lg:px-8 overflow-hidden pb-20"
          id="howItWorks"
        >
          <section className="mt-5 sm:mt-10 px-2">
            <div data-aos="fade-up" data-aos-delay="50">
              <h2 className="font-semibold tracking-tight text-[#FF5557]">
                How It Works
              </h2>
              <p
                className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl"
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
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-6">
              <Card
                className="bg-[linear-gradient(209.48deg,_#F3F2E9_-0.82%,_#E9F3E9_77.43%)] dark:bg-[linear-gradient(110.1deg,_rgba(46,_29,_99,_0.4)_0%,_#3D0F34_100%)] border-none"
                data-aos="fade-up"
                data-aos-delay="10"
              >
                <CardContent className="p-4">
                  <div className="grid grid-cols-[48px,auto] gap-4">
                    <span className="self-center flex h-12 w-12 font-bold items-center justify-center rounded-full bg-[#FF5557] text-[#FFF] text-4xl slashZero">
                      1
                    </span>
                    <div className="border-l-4 border-muted-foreground/30 pl-4">
                      <h4 className="font-semibold text-lg cursor-pointer flex gap-1">
                        Issue
                      </h4>
                      <p className="text-base/7 text-muted-foreground lg:text-md/7">
                        Trusted organizations create and issue verifiable
                        credentials (VCs) to individuals using Decentralized
                        Identifiers (DIDs).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card
                className="bg-[linear-gradient(125.85deg,_#E6F1F7_5.4%,_#E2E7F3_51.6%,_#E2E1F1_92.37%)] dark:bg-[linear-gradient(141.64deg,_#26066B_3.52%,_#0E3551_66.02%,_#052847_88.03%)] border-none"
                data-aos="fade-up"
                data-aos-delay="10"
              >
                <CardContent className="p-4">
                  <div className="grid grid-cols-[48px,auto] gap-4">
                    <span className="self-center flex h-12 w-12 font-bold items-center justify-center rounded-full bg-[#FF5557] text-[#FFF] text-4xl slashZero">
                      2
                    </span>
                    <div className="border-l-4 border-muted-foreground/30 pl-4">
                      <h4 className="font-semibold text-lg cursor-pointer flex gap-1">
                        Store
                      </h4>
                      <p className="text-base/7 text-muted-foreground lg:text-md/7">
                        Individuals securely store these credentials in their
                        digital wallets, fully controlling access and
                        distribution.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card
                className="bg-[linear-gradient(166.95deg,_#F3E8ED_-2.86%,_#E9E7FD_139.46%)] dark:bg-[linear-gradient(200.41deg,_rgba(99,_29,_62,_0.4)_-5.53%,_rgba(35,_98,_111,_0.5)_97.77%)] border-none"
                data-aos="fade-up"
                data-aos-delay="10"
              >
                <CardContent className="p-4">
                  <div className="grid grid-cols-[48px,auto] gap-4">
                    <span className="self-center flex h-12 w-12 font-bold items-center justify-center rounded-full bg-[#FF5557] text-[#FFF] text-4xl slashZero">
                      3
                    </span>
                    <div className="border-l-4 border-muted-foreground/30 pl-4">
                      <h4 className="font-semibold text-lg cursor-pointer flex gap-1">
                        Verify
                      </h4>
                      <p className="text-base/7 text-muted-foreground lg:text-md/7">
                        Organizations can instantly verify the authenticity of
                        credentials, ensuring trust, privacy, and efficiency.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
              <p className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
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
                className="grid grid-cols-1 lg:grid-cols-2 gap-2"
                data-aos="fade-up"
                data-aos-delay="10"
              >
                <Card>
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
                <Card>
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
                <Card>
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
                <Card>
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
        <div className="mx-auto max-w-sm sm:max-w-7xl px-4 lg:px-8 overflow-hidden pb-20">
          <section className="mt-0 sm:mt-5 px-2">
            <div data-aos="fade-up" data-aos-delay="50">
              <h2 className="font-semibold tracking-tight text-[#FF5557]">
                Use cases
              </h2>
              <p className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                <span className="hidden sm:block">
                  <span className="inline-block align-top text-balance">
                    Use Cases Across Industries
                  </span>
                </span>
                <span className="sm:hidden">Use Cases Across Industries</span>
              </p>
            </div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="ml-[2rem] mt-12 relative flex flex-wrap sm:mt-14 w-[calc(100%-4rem)]"
              data-aos="fade-up"
              data-aos-delay="10"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <div className="grid grid-rows-[auto,auto] gap-4">
                          <h4 className="text-lg font-semibold text-left text-sky-600">
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
                          <h4 className="text-lg font-semibold text-left text-purple-600">
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
                          <h4 className="text-lg font-semibold text-left text-green-600">
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
                          <h4 className="text-lg font-semibold text-left text-pink-600">
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
            <div
              className="mt-10 sm:flex sm:items-center sm:justify-center sm:gap-x-4"
              data-aos="fade-up"
              data-aos-delay="10"
            >
              <Button size="lg" variant="default">
                <Link href="/reviews">See All Use Cases</Link>
              </Button>
            </div>
          </section>
        </div>
        <div className="lg:w-full lg:max-w-4xl mx-auto px-4 pb-20 pt-6">
          <div className="mt-4 sm:mt-8 sm:text-center">
            <h1
              className="text-4xl font-semibold sm:text-4xl tracking-tight"
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
            <p
              className="mt-6 leading-7 sm:text-lg sm:leading-8"
              data-aos="fade-up"
              data-aos-delay="10"
            >
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
            <div
              className="mt-10 sm:flex sm:items-center sm:justify-center sm:gap-x-4"
              data-aos="fade-up"
              data-aos-delay="10"
            >
              <Button size="lg" variant="default">
                <Link href="/reviews">Let's do it</Link>
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
      </main>
    </Layout>
  )
}

export default HomePage
