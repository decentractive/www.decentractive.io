/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useCallback, useEffect, useState } from "react"

import clsxm from "@/lib/clsxm"

import { KYCStepProps } from "@/components/KYC/KYCForm"
import DocumentTypeSelection from "@/components/KYC/step/document/DocumentTypeSelection"
import FrontIdCard from "@/components/KYC/step/document/FrontIdCard"

export type KYCDocument = {
  type: string
  data: string
}

const DocumentSelectionStep: FC<KYCStepProps> = ({
  className,
  nextStep,
  previousStep,
}) => {
  const [currentView, setCurrentView] = useState("")
  const [documents, setDocuments] = useState<KYCDocument[]>([])

  useEffect(() => {
    setCurrentView("documentType")
  }, [])

  const clearAndAddDocument = useCallback(
    (document: KYCDocument) => {
      // Clear the documents array and add the new document
      setDocuments([document])
    },
    [setDocuments],
  )

  return (
    <div className={clsxm("h-full w-full p-5", className)}>
      {currentView === "documentType" && (
        <DocumentTypeSelection
          changeView={setCurrentView}
          nextStep={nextStep}
          previousStep={previousStep}
        />
      )}
      {currentView === "frontIdCard" && (
        <FrontIdCard
          nextStep={nextStep}
          previousStep={previousStep}
          changeView={setCurrentView}
          addDocument={clearAndAddDocument}
        />
      )}
    </div>
  )
}

export default DocumentSelectionStep
