import { FC, useCallback } from "react"
import { Camera, FACING_MODES } from "react-html5-camera-photo"

import clsxm from "@/lib/clsxm"

import { KYCStepProps } from "@/components/KYC/KYCForm"
import { KYCDocument } from "@/components/KYC/step/DocumentSelectionStep"

import { useAlertAtom } from "@/atom/alertAtom"

type DocumentFlowProps = KYCStepProps & {
  changeView: (view: string) => void
  addDocument: (document: KYCDocument) => void
}

const FrontIdCard: FC<DocumentFlowProps> = ({
  className,
  nextStep,
  previousStep,
  changeView,
  addDocument,
}) => {
  const { setSuccessData, setErrorData } = useAlertAtom()
  const handleTakePhoto = useCallback(
    (dataUri: string) => {
      addDocument({ type: "frontIdCard", data: dataUri })
      setSuccessData({
        title: "Front of ID card photo taken",
      })
      nextStep()
    },
    [addDocument, nextStep, setSuccessData],
  )

  const handleCameraError = useCallback(
    (error: Error) => {
      setErrorData({
        title: "Camera Error",
        list: [error.message],
      })
    },
    [setErrorData],
  )

  return (
    <div className={clsxm("h-full w-full", className)}>
      <div className="main-page-nav-arrangement gap-2 pt-0 px-6">
        <span className="main-page-nav-title">
          Take a picture of the front of your ID card
        </span>
      </div>
      <span className="main-page-description-text w-[80%] pb-2">
        Make sure the photo is clear and all the details are visible. We need to
        see your name, date of birth, and photo.
      </span>
      <div className="flex justify-center p-6">
        <Camera
          onCameraError={(error) => {
            handleCameraError(error)
          }}
          idealFacingMode={FACING_MODES.ENVIRONMENT}
          idealResolution={{ width: 1920, height: 1080 }}
          onTakePhoto={(dataUri) => {
            handleTakePhoto(dataUri)
          }}
        />
      </div>
    </div>
  )
}

export default FrontIdCard
