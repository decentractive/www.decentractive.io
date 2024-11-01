import { NextPage } from "next"

import { poppins } from "@/lib/fonts"

import { Button } from "@/components"
import IconComponent from "@/components/GenericIcon/IconComponent"
import Layout from "@/components/Layout"
import Seo from "@/components/Seo"

const SecurityPrivacy: NextPage = () => {
  return (
    <Layout>
      <Seo
        templateTitle="Security and Privacy"
        description="Built with robust encryption and user-controlled data protection"
      />
      <main className="grid h-full w-full items-center md:justify-center">
        <section className="relative overflow-hidden pt-1">
          <div className="mx-auto px-2 pb-6 pt-14">
            <div className="w-full sm:max-w-7xl mx-auto px-4 sm:px-10 pt-14">
              <div className="mt-8">
                <h1
                  className={`text-5xl font-semibold sm:text-7xl tracking-tight ${poppins.className}`}
                >
                  <span className="hidden sm:block align-top text-balance">
                    Security and Privacy at the Core of Decentractive
                  </span>
                  <span className="sm:hidden">
                    Security and Privacy at the Core of Decentractive
                  </span>
                </h1>
                <p className="mt-6 leading-7 sm:text-lg sm:leading-8">
                  <span className="hidden sm:block">
                    <span className="inline-block text-balance align-top">
                      Our platform is built on the principles of privacy,
                      security, and user empowerment. At Decentractive, we
                      ensure your data remains yours, always protected and under
                      your control.
                    </span>
                  </span>
                  <span className="sm:hidden">
                    Our platform is built on the principles of privacy,
                    security, and user empowerment. At Decentractive, we ensure
                    your data remains yours, always protected and under your
                    control.
                  </span>
                </p>
                <p className="mt-7 leading-7 sm:text-lg sm:leading-8 inline-block text-balance">
                  Decentractive is dedicated to safeguarding your data with
                  cutting-edge technology and privacy-by-design principles. We
                  adhere to industry standards to provide a safe, transparent,
                  and private platform where your identity and credentials are
                  managed securely and responsibly.
                </p>
                <div className="mt-6 sm:flex">
                  <Button variant="link" className="pl-0">
                    <div className="flex">
                      <span className="text-sm self-center text-[#FF5557]">
                        Learn More About Our Security{" "}
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
            <p className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
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
            <p className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              <span className="hidden sm:block">
                <span className="inline-block align-top text-balance">
                  Why Security and Privacy Matter in Digital Identity?
                </span>
              </span>
              <span className="sm:hidden">
                Why Security and Privacy Matter in Digital Identity?
              </span>
            </p>
            <p className="mt-6 leading-7 sm:text-lg sm:leading-8">
              Empowering users while protecting their information.
            </p>
            <p className="mt-7 leading-7 sm:text-lg sm:leading-8 text-balance">
              In the digital world, privacy and security are essential for
              building trust and ensuring users feel safe. Traditional identity
              systems often rely on centralized databases, making them
              vulnerable to breaches and misuse. Decentractive's decentralized
              approach gives users control over their data, reducing risks and
              enabling more secure, private online interactions.
            </p>
          </section>
        </div>
        <div className="w-full sm:max-w-7xl mx-auto px-4 sm:px-10">
          <section className="mt-20">
            <p className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              <span className="hidden sm:block">
                <span className="inline-block align-top text-balance">
                  Privacy by Design: Built for User Control
                </span>
              </span>
              <span className="sm:hidden">
                Privacy by Design: Built for User Control
              </span>
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mx-auto max-w-7xl overflow-hidden pb-20">
              <div>
                <p className="mt-3 leading-7 sm:text-lg sm:leading-8 font-semibold">
                  Protecting user data with a privacy-first approach.
                </p>
                <p className="mt-7 leading-7 sm:text-lg sm:leading-8 text-balance">
                  Our platform is designed with privacy at its core.
                  Decentractive leverages Decentralized Identifiers (DIDs) and
                  Verifiable Credentials (VCs) to give users full control over
                  their data. Only the minimum information necessary for
                  verification is shared, and users decide who can access it,
                  ensuring that data stays private and secure.
                </p>
              </div>
              <div>
                <div className="border-l-4 pl-5 border-[#FF5557]">
                  <h2 className="mt-3 font-semibold tracking-tight text-[#FF5557]">
                    Key Privacy Practices
                  </h2>
                  <ul className="mt-2 grid grid-cols-1 gap-x-8 gap-y-3">
                    <li className="flex flex-col items-start justify-between">
                      <div>
                        <h4 className="mt-2 font-semibold cursor-pointer flex gap-1">
                          Minimal Data Exposure
                        </h4>
                        <p className="text-base/7 text-muted-foreground lg:text-md/7">
                          Only essential data is shared for verification.
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-col items-start justify-between">
                      <div>
                        <h4 className="mt-2 font-semibold cursor-pointer flex gap-1">
                          No Centralized Storage
                        </h4>
                        <p className="text-base/7 text-muted-foreground lg:text-md/7">
                          Data is not stored in centralized databases, reducing
                          breach risks.
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-col items-start justify-between">
                      <div>
                        <h4 className="mt-2 font-semibold cursor-pointer flex gap-1">
                          User-Managed Permissions
                        </h4>
                        <p className="text-base/7 text-muted-foreground lg:text-md/7">
                          Users control who can view or verify their
                          credentials.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-full sm:max-w-7xl mx-auto px-4 sm:px-10">
          <section className="mt-0 sm:mt-5">
            <p className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              <span className="hidden sm:block">
                <span className="inline-block align-top text-balance">
                  Advanced Security Architecture and Encryption
                </span>
              </span>
              <span className="sm:hidden">
                Advanced Security Architecture and Encryption
              </span>
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mx-auto max-w-7xl overflow-hidden pb-20">
              <div>
                <p className="mt-3 leading-7 sm:text-lg sm:leading-8 font-semibold">
                  Using state-of-the-art technology to secure every interaction.
                </p>
                <p className="mt-7 leading-7 sm:text-lg sm:leading-8 text-balance">
                  Our security architecture is designed to protect data at every
                  step, using end-to-end encryption, cryptographic protocols,
                  and secure storage methods. With distributed ledger
                  technology, Decentractive ensures that each interaction is
                  secure, immutable, and resistant to tampering.
                </p>
              </div>
              <div>
                <div className="border-l-4 pl-5 border-[#FF5557]">
                  <h2 className="mt-3 font-semibold tracking-tight text-[#FF5557]">
                    Key Security Measures
                  </h2>
                  <ul className="mt-2 grid grid-cols-1 gap-x-8 gap-y-3">
                    <li className="flex flex-col items-start justify-between">
                      <div>
                        <h4 className="mt-2 font-semibold cursor-pointer flex gap-1">
                          End-to-End Encryption
                        </h4>
                        <p className="text-base/7 text-muted-foreground lg:text-md/7">
                          Protects data during transmission and storage.
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-col items-start justify-between">
                      <div>
                        <h4 className="mt-2 font-semibold cursor-pointer flex gap-1">
                          Cryptographic Verification
                        </h4>
                        <p className="text-base/7 text-muted-foreground lg:text-md/7">
                          Ensures data authenticity and integrity.
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-col items-start justify-between">
                      <div>
                        <h4 className="mt-2 font-semibold cursor-pointer flex gap-1">
                          Distributed Ledger Technology
                        </h4>
                        <p className="text-base/7 text-muted-foreground lg:text-md/7">
                          Tamper-resistant and transparent to prevent
                          unauthorized access.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-full sm:max-w-7xl mx-auto px-4 sm:px-10">
          <section className="mt-0 sm:mt-5">
            <p className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              <span className="hidden sm:block">
                <span className="inline-block align-top text-balance">
                  User Control Over Data and Permissions
                </span>
              </span>
              <span className="sm:hidden">
                User Control Over Data and Permissions
              </span>
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mx-auto max-w-7xl overflow-hidden pb-20">
              <div>
                <p className="mt-3 leading-7 sm:text-lg sm:leading-8 font-semibold">
                  You decide what, when, and with whom to share.
                </p>
                <p className="mt-7 leading-7 sm:text-lg sm:leading-8 text-balance">
                  At Decentractive, you are in control of your data. Our
                  platform allows you to manage permissions, granting access to
                  only those you trust. Each credential is tied to your unique
                  Decentralized Identifier (DID), and you can revoke or update
                  permissions as needed.
                </p>
              </div>
              <div>
                <div className="border-l-4 pl-5 border-[#FF5557]">
                  <h2 className="mt-3 font-semibold tracking-tight text-[#FF5557]">
                    Features of User Control
                  </h2>
                  <ul className="mt-2 grid grid-cols-1 gap-x-8 gap-y-3">
                    <li className="flex flex-col items-start justify-between">
                      <div>
                        <h4 className="mt-2 font-semibold cursor-pointer flex gap-1">
                          Permission Management
                        </h4>
                        <p className="text-base/7 text-muted-foreground lg:text-md/7">
                          Users grant or deny access to their credentials at any
                          time.
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-col items-start justify-between">
                      <div>
                        <h4 className="mt-2 font-semibold cursor-pointer flex gap-1">
                          Revocable Access
                        </h4>
                        <p className="text-base/7 text-muted-foreground lg:text-md/7">
                          Users can revoke access to data without third-party
                          interference.
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-col items-start justify-between">
                      <div>
                        <h4 className="mt-2 font-semibold cursor-pointer flex gap-1">
                          Audit Logs
                        </h4>
                        <p className="text-base/7 text-muted-foreground lg:text-md/7">
                          Transparency through access logs showing data usage
                          and permissions.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-full sm:max-w-7xl mx-auto px-4 sm:px-10">
          <section className="mt-0 sm:mt-5">
            <p className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              <span className="hidden sm:block">
                <span className="inline-block align-top text-balance">
                  Transparency at Every Level
                </span>
              </span>
              <span className="sm:hidden">Transparency at Every Level</span>
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mx-auto max-w-7xl overflow-hidden pb-20">
              <div>
                <p className="mt-3 leading-7 sm:text-lg sm:leading-8 font-semibold">
                  Ensuring visibility and accountability in data management.
                </p>
                <p className="mt-7 leading-7 sm:text-lg sm:leading-8 text-balance">
                  Transparency is fundamental to building trust. Decentractive
                  provides audit logs and detailed access records, so users know
                  when and by whom their data has been accessed. With real-time
                  monitoring, we ensure every transaction and interaction is
                  visible, tracked, and accountable.
                </p>
              </div>
              <div>
                <div className="border-l-4 pl-5 border-[#FF5557]">
                  <h2 className="mt-3 font-semibold tracking-tight text-[#FF5557]">
                    Key Transparency Measures
                  </h2>
                  <ul className="mt-2 grid grid-cols-1 gap-x-8 gap-y-3">
                    <li className="flex flex-col items-start justify-between">
                      <div>
                        <h4 className="mt-2 font-semibold cursor-pointer flex gap-1">
                          Audit Logs
                        </h4>
                        <p className="text-base/7 text-muted-foreground lg:text-md/7">
                          A complete record of all access and data interactions.
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-col items-start justify-between">
                      <div>
                        <h4 className="mt-2 font-semibold cursor-pointer flex gap-1">
                          Real-Time Monitoring
                        </h4>
                        <p className="text-base/7 text-muted-foreground lg:text-md/7">
                          Proactive security monitoring for potential threats.
                        </p>
                      </div>
                    </li>
                    <li className="flex flex-col items-start justify-between">
                      <div>
                        <h4 className="mt-2 font-semibold cursor-pointer flex gap-1">
                          User Notifications
                        </h4>
                        <p className="text-base/7 text-muted-foreground lg:text-md/7">
                          Users are notified of critical account changes or
                          access.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export default SecurityPrivacy
