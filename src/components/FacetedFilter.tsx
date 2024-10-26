/* eslint-disable @typescript-eslint/no-explicit-any */
import { CheckIcon, PlusCircledIcon } from "@radix-ui/react-icons"
import { FC, useEffect, useState } from "react"

import clsxm from "@/lib/clsxm"
import { useClientReady } from "@/hooks"

import {
  Badge,
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
} from "@/components"

type FacetedFilterProps<T> = {
  className?: string
  data: T[] | undefined
  field: keyof T // Field to be filtered
  title: string
  setSelectedValues: (values: string[]) => void
  placeholder?: string
}

const FacetedFilter: FC<FacetedFilterProps<any>> = ({
  className,
  data,
  field,
  title,
  setSelectedValues: setExternalSelectedValues,
  placeholder,
}) => {
  const isClientReady = useClientReady()
  const [selectedValues, setSelectedValues] = useState<Set<string>>(
    new Set<string>(),
  )
  const [options, setOptions] = useState<string[]>([])

  useEffect(() => {
    if (data) {
      const values = new Set<string>()
      data.forEach((item) => {
        const value = item[field] as string
        if (value) {
          values.add(value)
        }
      })
      setOptions(Array.from(values))
    }
  }, [data, field])

  useEffect(() => {
    if (isClientReady) {
      setExternalSelectedValues(Array.from(selectedValues))
    }
  }, [field, isClientReady, selectedValues, setExternalSelectedValues])

  return (
    <div className={className}>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="border-dashed">
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            {title}
            {selectedValues?.size > 0 && (
              <>
                <Separator orientation="vertical" className="mx-2 h-4" />
                <Badge
                  variant="secondary"
                  className="rounded-sm px-1 font-normal lg:hidden"
                >
                  {selectedValues.size}
                </Badge>
                <div className="hidden space-x-1 lg:flex">
                  {selectedValues.size > 2 ? (
                    <Badge
                      variant="secondary"
                      className="rounded-sm px-1 font-normal"
                    >
                      {selectedValues.size} selected
                    </Badge>
                  ) : (
                    [...selectedValues].map((value) => (
                      <Badge
                        variant="secondary"
                        key={value}
                        className="rounded-sm px-1 font-normal"
                      >
                        {value}
                      </Badge>
                    ))
                  )}
                </div>
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <Command>
            <CommandInput placeholder={placeholder ?? title} />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = selectedValues.has(option)
                  return (
                    <CommandItem
                      key={option}
                      onSelect={() => {
                        if (isSelected) {
                          selectedValues.delete(option)
                        } else {
                          selectedValues.add(option)
                        }
                        const filterValues = Array.from(selectedValues)
                        setExternalSelectedValues(filterValues)
                      }}
                    >
                      <div
                        className={clsxm(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "opacity-50 [&_svg]:invisible",
                        )}
                      >
                        <CheckIcon className={clsxm("h-4 w-4")} />
                      </div>
                      <span>{option.replaceAll("_", " ")}</span>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
              {selectedValues.size > 0 && (
                <>
                  <CommandSeparator />
                  <CommandGroup>
                    <CommandItem
                      onSelect={() => {
                        setSelectedValues(new Set<string>())
                      }}
                      className="justify-center text-center"
                    >
                      Clear filters
                    </CommandItem>
                  </CommandGroup>
                </>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default FacetedFilter
