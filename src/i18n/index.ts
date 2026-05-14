import { en } from './en'
import { uk } from './uk'

export type Language = 'en' | 'uk'

// Widened dict type: same shape as `en` but all leaf strings widened to `string`
// so EN and UK literal-typed dictionaries both satisfy it.
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
  ? readonly Widen<U>[]
  : { [K in keyof T]: Widen<T[K]> }

export type Dict = Widen<typeof en>

export const dictionaries: Record<Language, Dict> = { en, uk }

export { en, uk }
