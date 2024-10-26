import { FC } from "react"

import clsxm from "@/lib/clsxm"

import { Button } from "@/components/Button"
import { KYCStepProps } from "@/components/KYC/KYCForm"

const WelcomeStep: FC<KYCStepProps> = ({ className, nextStep }) => {
  return (
    <div className={clsxm("h-full w-full p-5", className)}>
      <div className="main-page-nav-arrangement gap-2 pt-0 px-6">
        <span className="main-page-nav-title">
          Welcome to the KYC Verification Process
        </span>
      </div>
      <span className="main-page-description-text w-[80%] pb-2">
        To keep your account secure and in compliance with regulations, we'll
        walk you through a quick identity verification process. In a few steps,
        you’ll be asked to upload an official document and take a selfie. Please
        have your ID, passport, or driver’s license ready.
      </span>
      <Button
        className="flex ml-6"
        onClick={nextStep}
        size="lg"
        variant="outline"
      >
        Start
      </Button>
    </div>
  )
}

export default WelcomeStep
