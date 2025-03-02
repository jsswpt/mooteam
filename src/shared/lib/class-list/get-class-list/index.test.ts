import { describe, expect, test } from 'vitest'

import { getClassList } from './get-class-list'

describe("Check if 'getClassList' works correctly", () => {
  test('If variants are passed', () => {
    const classes = getClassList(['first', 'second', 'third'], 'variant', '_')

    expect(classes).toStrictEqual({
      first: 'variant_first',
      second: 'variant_second',
      third: 'variant_third',
    })
  })

  test('If prefix or separator are not passed', () => {
    const classes = getClassList(['first', 'second', 'third'])

    expect(classes).toStrictEqual({
      first: 'first',
      second: 'second',
      third: 'third',
    })
  })

  test('If prefix is not passed', () => {
    const classes = getClassList(['first', 'second', 'third'], '', '_')

    expect(classes).toStrictEqual({
      first: 'first',
      second: 'second',
      third: 'third',
    })
  })

  test('If variants are not passed', () => {
    const classes = getClassList([], 'variant', '_')

    expect(classes).toStrictEqual({})
  })
})
