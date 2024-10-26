import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { useCallback, useEffect } from "react"

type DarkConfig = {
  dark: boolean
  gradientIndex: number
}

const darkAtom = atomWithStorage<DarkConfig>("darkAtom", {
  dark: false,
  gradientIndex: 0,
})

export function useDarkAtom() {
  const [config, setConfig] = useAtom(darkAtom)
  const setDark = (dark: boolean) => {
    setConfig((prev) => ({ ...prev, dark }))
  }
  const setGradientIndex = useCallback(
    (gradientIndex: number) => {
      setConfig((prev) => ({ ...prev, gradientIndex }))
    },
    [setConfig],
  )

  useEffect(() => {
    if (config.dark) {
      document.body.parentElement?.setAttribute("data-theme", "dark")
      document.body.classList.add("dark")
    } else {
      document.body.parentElement?.removeAttribute("data-theme")
      document.body.classList.remove("dark")
    }
  }, [config.dark])

  useEffect(() => {
    const min = 0
    const max = 30
    setGradientIndex(Math.floor(Math.random() * (max - min + 1)) + min)
  }, [setGradientIndex])

  return {
    dark: config.dark,
    setDark: setDark,
    gradientIndex: config.gradientIndex,
    setGradientIndex: setGradientIndex,
  }
}
