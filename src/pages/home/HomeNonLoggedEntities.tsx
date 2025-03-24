import { FC } from "react"

import { gabarito } from "@/lib/fonts"

import { Button } from "@/components"
import IconComponent from "@/components/GenericIcon/IconComponent"

const HomeNonLoggedEntities: FC = () => {
  return (
    <div className="flex mx-auto px-4 pb-20">
      <div className="mt-4 sm:mt-8 w-[100vw] h-[calc(100vh-300px)] pt-[calc(15vh-70px)]">
        <h1
          className={`text-5xl font-semibold sm:text-8xl mx-auto max-w-7xl tracking-tighter ${gabarito.className}`}
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
          className="mt-6 leading-7 text-xl sm:text-2xl sm:leading-8 mx-auto max-w-7xl"
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
          className="leading-7 text-lg sm:text-xl sm:leading-8 mx-auto max-w-7xl"
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
          className="mt-10 sm:flex sm:gap-x-4 mx-auto max-w-7xl"
          data-aos="fade-up"
          data-aos-delay="10"
        >
          <Button size="lg" variant="default">
            Get Started
          </Button>
          <Button variant="link">
            <div className="flex">
              <span className="text-sm self-center font-semibold text-[#FF5557]">
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
