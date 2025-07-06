import type { Post } from '../../types'
import matter from 'gray-matter'
import path from 'node:path'
import { buildPost, relativeMd, fileFilter, isMarkdownFile } from '../utils'
import { BASE_DIR } from '../constants'
import fs from 'node:fs'

export function parseFileToPost(filePath: string): Post {
  const content = fs.readFileSync(filePath, 'utf-8')
  const res = matter(content)
  const { title, description, date, tags } = res.data
  const relativePath = path.relative(BASE_DIR, filePath)
  const link = relativeMd(relativePath)
  return buildPost({ title, description, date, tags }, link)
}

export function getAllMarkdownFiles(): `${string}.md`[] {
  const files: `${string}.md`[] = []
  const readDirectory = (directory: string) => {
    const entries = fs.readdirSync(directory, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name)
      if (entry.isDirectory()) {
        readDirectory(fullPath)
        continue
      }
      if (fileFilter(entry.name) && isMarkdownFile(fullPath)) {
        files.push(fullPath)
      }
    }
  }
  readDirectory(BASE_DIR)
  return files
}
