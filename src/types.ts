export interface Tag {
  name: string
  bgColor?: string
  txtColor?: string
}

export interface Image {
  src: string
  link: string
  // Opens the image full screen on click instead of following the link
  zoom?: boolean
  // Full-size file shown in the zoom modal when `src` is a smaller copy
  fullSrc?: string
}

export interface ThemedCardContent {
  title: string
  left: string
  github: string
  description: string
  tags?: Tag[]
  links: Image[]
}

export interface Project {
  key: string
  title: string
  github: string
  tags: Tag[]
  links?: Image[]
}

export interface WorkCardContent {
  title: string
  company: string
  tags: Tag[]
  description: string
  subjects: string[]
}
