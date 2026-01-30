import matter from 'gray-matter'
import fs from 'node:fs'
import path from 'node:path'

import type { Post } from '../../types'

import { buildPost, fileFilter, isMarkdownFile, relativeMd } from '../utils'

export function parseFileToPost(filePath: string): Post {
  const content = fs.readFileSync(filePath, 'utf-8')
  const res = matter(content)
  const { title, description, date, tags } = res.data
  const relativePath = path.relative(path.resolve(__dirname, '../../../posts'), filePath)
  const link = relativeMd(relativePath)
  return buildPost({ title, description, date, tags }, link)
}

export function getAllMarkdownFiles(): readonly `${string}.md`[] {
  const readDirectory = (directory: string): readonly `${string}.md`[] => {
    return fs
      .readdirSync(directory, { withFileTypes: true })
      .flatMap((entry): readonly `${string}.md`[] => {
        const fullPath = path.join(directory, entry.name)
        if (entry.isDirectory()) {
          return readDirectory(fullPath)
        }
        return fileFilter(entry.name) && isMarkdownFile(fullPath) ? [fullPath] : []
      })
  }
  return readDirectory(path.resolve(__dirname, '../../../posts'))
}
