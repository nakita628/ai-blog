export type Post = {
  title: string
  description: string
  date: string
  tags: string[]
  link: string
}

export type Matter = {
  title: string
  description: string
  date: string
  tags: string[]
  prev?: boolean | { text: string; link: string }
  next?: boolean | { text: string; link: string }
}
