declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}

declare module "*.jpg" {
  const content: StaticImageData
  export default content
}

declare module "*.jpeg" {
  const content: StaticImageData
  export default content
}

declare module "*.gif" {
  const content: StaticImageData
  export default content
}

declare module "*.webp" {
  const content: StaticImageData
  export default content
}

declare module "*.ico" {
  const content: StaticImageData
  export default content
}

declare module "*.bmp" {
  const content: StaticImageData
  export default content
}

declare module "*.png" {
  const content: StaticImageData
  export default content
}

declare module "*.mp4" {
  const content: string
  export default content
}

declare module "*.webm" {
  const content: string
  export default content
}
