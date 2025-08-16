import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
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

export function getAllMarkdownFiles(): `${string}.md`[] {
  const readDirectory = (directory: string): `${string}.md`[] => {
    const entries = fs.readdirSync(directory, { withFileTypes: true })
    return entries.flatMap((entry): `${string}.md`[] => {
      const fullPath = path.join(directory, entry.name)
      if (entry.isDirectory()) {
        return readDirectory(fullPath)
      }
      return fileFilter(entry.name) && isMarkdownFile(fullPath) ? [fullPath] : []
    })
  }
  return readDirectory(path.resolve(__dirname, '../../../posts'))
}
