import { expect, describe, test } from 'vitest'
import { a } from '../src/index'

describe("test sdk-a", () => {
  test("sdk-a", ()  => {
    expect(a).toBe(111)
  })
})