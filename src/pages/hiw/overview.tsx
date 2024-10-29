import { NextPage } from "next"

import { poppins } from "@/lib/fonts"

import { Button } from "@/components"
import IconComponent from "@/components/GenericIcon/IconComponent"
import Layout from "@/components/Layout"
import Seo from "@/components/Seo"

const Overview: NextPage = () => {
  return (
    <Layout>
      <Seo
        templateTitle="Overview"
        description="Intro to our decentralized identity and verifiable
                          credentials platform"
      />
      <main className="grid h-full w-full items-center md:justify-center">
        <section className="relative overflow-hidden pt-1">
          <div className="mx-auto px-2 pb-6 pt-14">
            <div className="w-full sm:max-w-7xl mx-auto px-4 sm:px-10 pb-20 pt-14">
              <div className="mt-8">
                <h1
                  className={`text-5xl font-semibold sm:text-7xl tracking-tight ${poppins.className}`}
                >
                  <span className="hidden sm:block align-top text-balance">
                    Revolutionizing Identity for a Decentralized World
                  </span>
                  <span className="sm:hidden">
                    Revolutionizing Identity for a Decentralized World
                  </span>
                </h1>
                <p className="mt-6 leading-7 sm:text-lg sm:leading-8">
                  <span className="hidden sm:block">
                    <span className="inline-block text-balance align-top">
                      Decentractive empowers you to manage digital identities
                      and credentials with security, privacy, and ease. Welcome
                      to a future where control over your identity is in your
                      hands.
                    </span>
                  </span>
                  <span className="sm:hidden">
                    Decentractive empowers you to manage digital identities and
                    credentials with security, privacy, and ease. Welcome to a
                    future where control over your identity is in your hands.
                  </span>
                </p>
                <p className="mt-7 leading-7 sm:text-lg sm:leading-8 inline-block text-balance">
                  Decentractive is built on the principles of decentralized
                  identity and verifiable credentials, allowing users and
                  organizations to interact with trust, transparency, and
                  privacy. Discover how our platform simplifies identity
                  management, putting security and data control back where it
                  belongs—with you.
                </p>
                <div className="mt-6 sm:flex">
                  <Button variant="link" className="pl-0">
                    <div className="flex">
                      <span className="text-sm self-center text-[#FF5557]">
                        Learn How It Works{" "}
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
        </section>
        <div className="w-full sm:max-w-7xl mx-auto px-4 sm:px-10">
          <section className="mt-0 sm:mt-5">
            <p
              className={`mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl ${poppins.className}`}
            >
              <span className="hidden sm:block">
                <span className="inline-block align-top text-balance">
                  Decentralized Identity and Verifiable Credentials Explained
                </span>
              </span>
              <span className="sm:hidden">
                Decentralized Identity and Verifiable Credentials Explained
              </span>
            </p>
            <p className="mt-6 leading-7 sm:text-lg sm:leading-8">
              Empowering people and organizations to control and verify
              identities without intermediaries.
            </p>
            <p className="mt-7 leading-7 sm:text-lg sm:leading-8 text-balance">
              Decentralized Identity (DID) is a system that enables secure,
              self-sovereign identities where individuals control their data.
              Paired with Verifiable Credentials (VCs), this approach allows
              organizations to issue secure, tamper-proof digital credentials
              that users can present and verify instantly. Unlike traditional
              systems that rely on centralized databases, DID and VC use
              cryptographic technology to put control back in the hands of
              individuals, enhancing security, privacy, and trust.
            </p>
          </section>
        </div>
        <div className="w-full sm:max-w-7xl mx-auto px-4 sm:px-10">
          <section className="mt-20">
            <p
              className={`mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl ${poppins.className}`}
            >
              <span className="hidden sm:block">
                <span className="inline-block align-top text-balance">
                  Why Choose Decentractive for Decentralized Identity?
                </span>
              </span>
              <span className="sm:hidden">
                Why Choose Decentractive for Decentralized Identity?
              </span>
            </p>
            <p className="mt-6 leading-7 sm:text-lg sm:leading-8">
              Building trust with a privacy-first, user-centric approach.
            </p>
            <p className="mt-7 leading-7 sm:text-lg sm:leading-8 text-balance">
              Decentractive is designed to meet the modern demands of digital
              identity management by offering a secure, scalable, and compliant
              solution. By combining the latest in DID and VC technology with
              user-friendly features, we empower businesses, individuals, and
              organizations to create, manage, and verify digital identities
              effortlessly. With Decentractive, identity verification is not
              only more efficient but also more private and resilient against
              fraud and data breaches.
            </p>
            <div>
              <h2 className="mt-10 font-semibold tracking-tight text-[#FF5557]">
                Key Features
              </h2>
              <ul className="mt-2 grid grid-cols-1 gap-x-8 gap-y-6 sm:gap-y-12 lg:grid-cols-3">
                <li className="flex flex-col items-start justify-between">
                  <div>
                    <h4 className="mt-2 font-semibold cursor-pointer flex gap-1">
                      User Control
                    </h4>
                    <p className="mt-2 text-base/7 text-muted-foreground lg:text-md/7">
                      Individuals own their data and control access, reducing
                      reliance on third-party intermediaries.
                    </p>
                  </div>
                </li>
                <li className="flex flex-col items-start justify-between">
                  <div>
                    <h4 className="mt-2 font-semibold cursor-pointer flex gap-1">
                      Interoperability
                    </h4>
                    <p className="mt-2 text-base/7 text-muted-foreground lg:text-md/7">
                      Our platform supports multiple blockchain networks,
                      ensuring flexible and adaptable identity solutions.
                    </p>
                  </div>
                </li>
                <li className="flex flex-col items-start justify-between">
                  <div>
                    <h4 className="mt-2 font-semibold cursor-pointer flex gap-1">
                      Compliance and Trust
                    </h4>
                    <p className="mt-2 text-base/7 text-muted-foreground lg:text-md/7">
                      Built to meet global standards like W3C DID, GDPR, and
                      HIPAA.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div className="w-full sm:max-w-7xl mx-auto px-4 sm:px-10">
          <section className="mt-20">
            <p
              className={`mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl ${poppins.className}`}
            >
              <span className="hidden sm:block">
                <span className="inline-block align-top text-balance">
                  How Decentractive’s Platform Works
                </span>
              </span>
              <span className="sm:hidden">
                How Decentractive’s Platform Works
              </span>
            </p>
            <p className="mt-6 leading-7 sm:text-lg sm:leading-8">
              An intuitive process for issuing, storing, and verifying
              credentials.
            </p>
            <p className="mt-7 leading-7 sm:text-lg sm:leading-8 text-balance">
              Decentractive simplifies the decentralized identity process into
              three main steps: Issue, Store, and Verify. From start to finish,
              our platform keeps security, transparency, and ease of use at its
              core.
            </p>

            <h2 className="mt-10 font-semibold tracking-tight text-[#FF5557]">
              Steps
            </h2>
            <div className="mt-4 relative flex flex-wrap">
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
                      Organizations create verifiable credentials (VCs) and
                      issue them to individuals or entities, securely tied to a
                      Decentralized Identifier (DID).
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
                      Users store their credentials in a digital wallet,
                      maintaining full control and access over their data.
                    </p>
                  </div>
                </div>
                <div className="mb-4 w-full">
                  <span className="relative mb-3 sm:mb-6 flex h-12 w-12 font-bold items-center justify-center rounded-full bg-[#FF5557] text-[#FFF] text-3xl slashZero">
                    3
                  </span>
                  <div className="mb-8 lg:mb-10">
                    <h4 className="mt-2 font-semibold text-lg cursor-pointer flex gap-1 mb-3">
                      Verify
                    </h4>
                    <p className="text-base/7 text-muted-foreground lg:text-md/7">
                      Credentials can be instantly verified by any authorized
                      party without revealing unnecessary personal data,
                      ensuring quick, secure, and private interactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-full sm:max-w-7xl mx-auto px-4 sm:px-10 pb-20">
          <section className="mt-0 sm:mt-5">
            <p
              className={`mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl ${poppins.className}`}
            >
              <span className="hidden sm:block">
                <span className="inline-block align-top text-balance">
                  Privacy, Security, and Compliance at the Core
                </span>
              </span>
              <span className="sm:hidden">
                Privacy, Security, and Compliance at the Core
              </span>
            </p>
            <p className="mt-6 leading-7 sm:text-lg sm:leading-8">
              Designed to meet the highest standards of data protection and
              regulatory compliance.
            </p>
            <p className="mt-7 leading-7 sm:text-lg sm:leading-8 text-balance">
              In a world of evolving regulations and data security needs,
              Decentractive is committed to providing a platform that aligns
              with global standards like GDPR, HIPAA, and the W3C DID. Our
              privacy-first approach ensures that each interaction is secure and
              compliant, giving organizations and users peace of mind.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export default Overview
