import type { AppProps } from "next/app"

import "@/styles/index.css"
import "@/styles/applies.css"
import "@/styles/classes.css"

import AppProviders from "@/components/AppProviders"

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <div className="font-sans">
        <Component {...pageProps} />
      </div>
    </AppProviders>
  )
}

export default App
