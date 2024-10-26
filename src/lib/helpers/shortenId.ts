// shorten the checksummed version of the input id to have 0x + 4 characters at start and end
export function shortenId(id: string, chars = 4): string {
  return `${id.substring(0, chars + 2)}...${id.substring(35 - chars)}`
}

// shorten text to a certain length and add ellipsis if it exceeds
export function shortenText(text: string, length: number): string {
  return text.length > length ? `${text.substring(0, length)}...` : text
}

export function shortenName(name: string, chars = 4): string {
  return `${name.substring(0, chars + 2)}...${name.substring(name.length - chars)}`
}
