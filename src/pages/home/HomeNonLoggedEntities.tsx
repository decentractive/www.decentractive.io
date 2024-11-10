import Link from "next/link"
import { FC } from "react"

import { gabarito } from "@/lib/fonts"

import { Button } from "@/components"
import IconComponent from "@/components/GenericIcon/IconComponent"

const HomeNonLoggedEntities: FC = () => {
  return (
    <div className="lg:w-full max-w-7xl mx-auto px-4 pb-20 pt-14">
      <div className="mt-4 sm:mt-8 sm:text-center">
        <h1
          className={`text-5xl font-semibold sm:text-7xl tracking-tight ${gabarito.className}`}
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <span className="hidden sm:block align-top text-balance">
            Empowering the Future of Identity with Decentralized Trust
          </span>
          <span className="sm:hidden">
            Empowering the Future of Identity with Decentralized Trust
          </span>
        </h1>
        <p
          className="mt-6 leading-7 sm:text-lg sm:leading-8"
          data-aos="fade-up"
          data-aos-delay="10"
        >
          <span className="hidden sm:block">
            <span className="inline-block text-balance align-top">
              A secure, private, and efficient solution for managing identities
              and credentials.
            </span>
          </span>
          <span className="sm:hidden">
            A secure, private, and efficient solution for managing identities
            and credentials.
          </span>
        </p>
        <p
          className="leading-7 sm:text-lg sm:leading-8"
          data-aos="fade-up"
          data-aos-delay="10"
        >
          <span className="hidden sm:block">
            <span className="inline-block text-balance align-top">
              Powered by Decentralized Identifiers (DIDs) and Verifiable
              Credentials (VCs).
            </span>
          </span>
          <span className="sm:hidden">
            Powered by Decentralized Identifiers (DIDs) and Verifiable
            Credentials (VCs).
          </span>
        </p>
        <div
          className="mt-10 sm:flex sm:items-center sm:justify-center sm:gap-x-4"
          data-aos="fade-up"
          data-aos-delay="10"
        >
          <Button size="lg" variant="default">
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button variant="link">
            <div className="flex">
              <span className="text-sm self-center text-[#FF5557]">
                Learn more{" "}
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
  )
}

export default HomeNonLoggedEntities
