export interface Tag {
  name: string
  bgColor?: string
  txtColor?: string
}

export interface Image {
  src: string
  link: string
}

export interface ThemedCardContent {
  title: string
  left: string
  github: string
  description: string
  tags?: Tag[]
  links: Image[]
}

export interface WorkCardContent {
  title: string
  tags: Tag[]
  description: string
  subjects: string[]
}
