import AOS from "aos"
import type { AppProps } from "next/app"
import { useEffect } from "react"

import "aos/dist/aos.css" // You can also use <link> for styles
import "@/styles/index.css"
import "@/styles/applies.css"
import "@/styles/classes.css"

import AppProviders from "@/components/AppProviders"

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out-cubic",
      once: true,
    })
  }, [])

  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  )
}

export default App
