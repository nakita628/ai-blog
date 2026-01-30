import { describe, expect, it } from 'vitest'

import { buildPost, fileFilter, formatDate, isMarkdownFile, relativeMd } from '.'

// Test run
// npx vitest run .vitepress/data/utils/index.test.ts

describe('utils Test', () => {
  describe('buildPost Test', () => {
    it('buildPost($matter, $link)', () => {
      const result = buildPost(
        {
          title: 'Sample Post Title 1',
          description: 'This is a sample post description for testing purposes. 1',
          date: '2024-01-01',
          tags: ['typescript', 'test', 'example'],
          next: { text: 'Next Post 1', link: '2023/01' },
        },
        '2023/01',
      )
      const expected = {
        title: 'Sample Post Title 1',
        description: 'This is a sample post description for testing purposes. 1',
        date: '2024-01-01',
        tags: ['typescript', 'test', 'example'],
        link: '/blog/posts/2023/01',
      }
      expect(result).toStrictEqual(expected)
    })
  })

  describe('fileFilter Test', () => {
    it('fileFilter(1.md) -> true', () => {
      expect(fileFilter('01.md')).toBe(true)
    })
    it('fileFilter(index.md) -> false', () => {
      expect(fileFilter('index.md')).toBe(false)
    })
  })

  describe('formatDate Test', () => {
    it(`formatDate('2024-01-01T00:00:00.000Z') -> '2024-01-01'`, () => {
      expect(formatDate('2024-01-01T00:00:00.000Z')).toBe('2024-01-01')
    })
  })

  describe('relativeMd Test', () => {
    it(`relativeMd('1.md') -> '1'`, () => {
      expect(relativeMd('1.md')).toBe('1')
    })
  })

  describe('isMarkdownFile Test', () => {
    it('isMarkdownFile("1.md") -> true', () => {
      expect(isMarkdownFile('1.md')).toBe(true)
    })
    it('isMarkdownFile("index.html") -> false', () => {
      expect(isMarkdownFile('index.html')).toBe(false)
    })
  })
})
