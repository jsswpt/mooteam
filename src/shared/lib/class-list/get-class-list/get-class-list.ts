type Result<
  V extends string,
  P extends string = '',
  S extends string = '',
> = Record<V, `${P}${S}${V}`>

export const getClassList = <
  V extends string,
  P extends string = '',
  S extends string = '',
>(
  variants: Array<V>,
  prefix?: P,
  separator?: S
): Result<V, P, S> =>
  variants.reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: `${prefix ?? ''}${prefix?.trim().length ? (separator ?? '') : ''}${curr}`,
    }),
    {} as Result<V, P, S>
  )
