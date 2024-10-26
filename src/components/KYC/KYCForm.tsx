import { useCallback, useState } from "react"

import { useClientReady } from "@/hooks"

import DocumentSelectionStep from "@/components/KYC/step/DocumentSelectionStep"
import WelcomeStep from "@/components/KYC/step/WelcomeStep"

export type KYCStepProps = {
  className?: string
  nextStep: () => void
  previousStep?: () => void
}

const KYCForm: React.FC = () => {
  const clientReady = useClientReady()
  const [step, setStep] = useState(0)

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1)
  }, [])

  const previousStep = useCallback(() => {
    setStep((prev) => prev - 1)
  }, [])

  const renderStep = () => {
    switch (step) {
      case 0:
        return <WelcomeStep nextStep={nextStep} />
      case 1:
        return (
          <DocumentSelectionStep
            nextStep={nextStep}
            previousStep={previousStep}
          />
        )
      // case 2:
      //   return <DocumentPhotoStep nextStep={nextStep} />
      // case 3:
      //   return <SelfieStep nextStep={nextStep} />
      // case 4:
      //   return <FinalStep />
      default:
        return null
    }
  }

  return <div>{renderStep()}</div>
}

export default KYCForm
