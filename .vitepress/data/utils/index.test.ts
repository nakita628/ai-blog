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
          prev: { text: 'Previous Post 1', link: '/posts/previous1' },
          next: { text: 'Next Post 1', link: '2023/1' },
        },
        '2023/1',
      )
      const expected = {
        title: 'Sample Post Title 1',
        description: 'This is a sample post description for testing purposes. 1',
        date: '2024-01-01',
        tags: ['typescript', 'test', 'example'],
        link: '/ai-blog/posts/2023/1',
      }
      expect(result).toEqual(expected)
    })
  })

  describe('fileFilter Test', () => {
    it('fileFilter(1.md) -> true', () => {
      const result = fileFilter('1.md')
      const expected = true
      expect(result).toBe(expected)
    })
    it('fileFilter(index.md) -> false', () => {
      const result = fileFilter('index.md')
      const expected = false
      expect(result).toBe(expected)
    })
  })

  describe('formatDate Test', () => {
    it(`formatDate('2024-01-01T00:00:00.000Z') -> '2024-01-01'`, () => {
      const result = formatDate('2024-01-01T00:00:00.000Z')
      const expected = '2024-01-01'
      expect(result).toBe(expected)
    })
  })

  describe('relativeMd Test', () => {
    it(`relativeMd('1.md') -> '1'`, () => {
      const result = relativeMd('1.md')
      const expected = '1'
      expect(result).toBe(expected)
    })
  })

  describe('isMarkdownFile Test', () => {
    it('isMarkdownFile("1.md") -> true', () => {
      const result = isMarkdownFile('1.md')
      const expected = true
      expect(result).toBe(expected)
    })
    it('isMarkdownFile("index.html") -> false', () => {
      const result = isMarkdownFile('index.html')
      const expected = false
      expect(result).toBe(expected)
    })
  })
})
