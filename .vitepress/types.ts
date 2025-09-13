export type Post = {
  readonly title: string
  readonly description: string
  readonly date: string
  readonly tags: string[]
  readonly link: string
}

export type Matter = {
  readonly title: string
  readonly description: string
  readonly date: string
  readonly tags: string[]
  readonly prev?: boolean | { readonly text: string; readonly link: string }
  readonly next?: boolean | { readonly text: string; readonly link: string }
}
