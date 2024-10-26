/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from "react"
import { Controller, FormProvider, useForm } from "react-hook-form"

import clsxm from "@/lib/clsxm"
import { useClientReady, useDebouncedValue } from "@/hooks"

import IconComponent from "@/components/GenericIcon/IconComponent"

type SearchProps<T> = {
  className?: string
  data: T[] | undefined
  setFilteredData: (data: T[]) => void
  onSearch?: (searchText: string) => void
  fields: Array<keyof T> // Fields to be searched
  placeholder: string
}

type SearchFormValues = {
  searchText: string
}

const Search: FC<SearchProps<any>> = ({
  className,
  data,
  setFilteredData,
  fields,
  placeholder,
  onSearch,
}) => {
  const isClientReady = useClientReady()
  const [internalFilteredData, setInternalFilteredData] = useState<
    any[] | undefined
  >(data)

  const form = useForm<SearchFormValues>({
    defaultValues: {
      searchText: "",
    },
    mode: "all",
    reValidateMode: "onChange",
  })

  const searchText = form.watch("searchText")
  const [searchTextDebounced, isDebounced] = useDebouncedValue(
    searchText,
    500,
    [searchText],
  )

  useEffect(() => {
    if (isDebounced && data) {
      // filter data based on search text
      // handle case insensitive search
      // handle multiple fields including date field
      const filteredData = data.filter((item) => {
        return fields.some((field) => {
          const value = item[field]
          if (typeof value === "string") {
            return value
              .toLowerCase()
              .includes(searchTextDebounced.toLowerCase())
          }
          if (typeof value === "number") {
            return String(value)
              .toLowerCase()
              .includes(searchTextDebounced.toLowerCase())
          }
          if (value instanceof Date) {
            return value
              .toLocaleString()
              .toLowerCase()
              .includes(searchTextDebounced.toLowerCase())
          }
          if (Array.isArray(value)) {
            return value.some((val) =>
              String(val)
                .toLowerCase()
                .includes(searchTextDebounced.toLowerCase()),
            )
          }
          // if value is an object
          if (typeof value === "object") {
            return Object.values(value).some((val) =>
              String(val)
                .toLowerCase()
                .includes(searchTextDebounced.toLowerCase()),
            )
          }
          return false
        })
      })
      setInternalFilteredData(filteredData)
      if (onSearch) {
        onSearch(searchTextDebounced)
      }
    }
  }, [data, fields, isDebounced, searchTextDebounced])

  useEffect(() => {
    if (isClientReady) {
      setFilteredData(internalFilteredData ?? [])
    }
  }, [JSON.stringify(internalFilteredData), isClientReady, setFilteredData])

  useEffect(() => {
    if (isClientReady) {
      setInternalFilteredData(data ?? [])
    }
  }, [data, isClientReady])

  return (
    <div
      className={clsxm(
        "pb-8 relative grid w-full gap-4",
        "max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl",
        className,
      )}
    >
      <div className="inline-flex w-full max-w-full text-foreground align-middle text-sm relative cursor-text bg-background items-center">
        <div className="grid grid-cols-[min-content_1fr_min-content] items-center w-full border pl-1 pr-px rounded-md border-solid focus-within:border-sky-400 focus-within:ring-1 focus-within:ring-lime-400 focus-within:ring-offset-background">
          <div className="text-center flex flex-row justify-items-start">
            <IconComponent name="Search" className="w-4 h-4 ml-1 mr-2" />
          </div>
          <div className="relative flex text-[inherit] items-center flex-1 self-stretch">
            <FormProvider {...form}>
              <form className="w-full">
                <Controller
                  control={form.control}
                  name="searchText"
                  rules={{
                    maxLength: 79,
                    validate: {
                      notEmpty: (text) =>
                        text.trim().length > 0 || "Enter a search term",
                    },
                  }}
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                  }) => (
                    <input
                      className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:ring-0 focus-visible:ring-transparent focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-background text-secondary-foreground hover:bg-background/80 dark:hover:bg-background/10 hover:shadow-sm h-10 py-2 px-0 relative pr-10"
                      type="text"
                      placeholder={placeholder}
                      autoComplete="off"
                      autoCorrect="off"
                      spellCheck="false"
                      onBlur={onBlur}
                      ref={ref}
                      name={name}
                      value={value}
                      onChange={(e) => {
                        onChange(e.target.value)
                      }}
                    />
                  )}
                />
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
