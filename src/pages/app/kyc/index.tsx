import { NextPage } from "next"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"

import Layout from "@/components/Layout"
import Seo from "@/components/Seo"

const KYCForm = dynamic(() => import("@/components/KYC/KYCForm"), {
  ssr: false,
})

const KYC: NextPage = () => {
  const router = useRouter()

  return (
    <Layout>
      <Seo
        templateTitle="Kyc"
        description="Seamlessly integrate compliance across all your DeFi platforms—one KYC, endless possibilities. Simplify onboarding, boost trust, and stay ahead of global regulations with a single, secure compliance layer built for decentralized ecosystems."
      />

      <main>
        <div className="main-page-panel">
          <KYCForm />
        </div>
      </main>
    </Layout>
  )
}

export default KYC
