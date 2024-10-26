import Link from "next/link"
import { FC } from "react"

import { Button } from "@/components"
import IconComponent from "@/components/GenericIcon/IconComponent"

const HomeCompanies: FC = () => {
  return (
    <div className="md:layout lg:space-between max-md:px-8 lg:grid lg:w-full lg:max-w-4xl lg:grid-cols-[auto,1fr]">
      <div className="items-center text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-6xl">
          <span className="hidden sm:block align-top text-balance">
            Connect with your customers and respond to feedback.
          </span>
          <span className="sm:hidden">
            Connect with your customers and respond to feedback.
          </span>
        </h1>
        <p className="mt-6 leading-7 sm:text-lg sm:leading-8">
          <span className="hidden sm:block">
            <span className="inline-block text-balance align-top">
              Maintain your reputation by engaging with your customers and their
              feedback.
            </span>
          </span>
          <span className="sm:hidden">
            Maintain your reputation by engaging with your customers and their
            feedback.
          </span>
        </p>
        <div className="mt-10 sm:flex sm:items-center sm:justify-center sm:gap-x-4">
          <Button size="lg" variant="default">
            <Link href="/reviews">Browse reviews</Link>
          </Button>
          <Button variant="link" className="-pl-4">
            <Link className="flex" href="app/review/respond">
              <span className="text-sm text-[#FF5557] self-center -ml-4">
                Respond to reviews{" "}
              </span>
              <IconComponent
                name="ChevronRight"
                className="h-5 w-5 text-[#FF5557]"
              />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HomeCompanies
