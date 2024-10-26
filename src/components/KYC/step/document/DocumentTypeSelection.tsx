import { FC } from "react"

import clsxm from "@/lib/clsxm"

import { KYCStepProps } from "@/components/KYC/KYCForm"

type DocumentFlowProps = KYCStepProps & {
  changeView: (view: string) => void
}

const DocumentTypeSelection: FC<DocumentFlowProps> = ({
  className,
  nextStep,
  previousStep,
  changeView,
}) => {
  return (
    <div className={clsxm("h-full w-full", className)}>
      <div className="main-page-nav-arrangement gap-2 pt-0 px-6">
        <span className="main-page-nav-title">Select your document</span>
      </div>
      <span className="main-page-description-text w-[80%] pb-2">
        Choose the type of document you'd like to use for verification. We
        accept government-issued IDs, passports, or driver’s licenses. Make sure
        your document is up-to-date, undamaged, and readable.
      </span>
      <div className="grid gap-2 px-6 py-0 max-w-[500px]">
        <div
          className="border -mx-2 flex items-start space-x-4 rounded-md p-4 transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer"
          onClick={() => changeView("frontIdCard")}
        >
          <div className="space-y-1">
            <p className="font-medium leading-none">ID Card</p>
            <p className="text-muted-foreground">
              Government-issued ID card with a photo.
            </p>
          </div>
        </div>
        <div className="border -mx-2 flex items-start space-x-4 rounded-md hover:bg-accent hover:text-accent-foreground p-4 transition-all cursor-pointer">
          <div className="space-y-1">
            <p className="font-medium leading-none">Driver license</p>
            <p className="text-muted-foreground">
              Government-issued driver license with a photo.
            </p>
          </div>
        </div>
        <div className="border -mx-2 flex items-start space-x-4 rounded-md p-4 transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer">
          <div className="space-y-1">
            <p className="font-medium leading-none">Passport</p>
            <p className="text-muted-foreground">
              Government-issued passport with a photo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentTypeSelection
