import { createEvent, createStore } from 'effector'
import { useEffect, useRef, useState } from 'react'

import { getAuthorReq, getQuoteReq } from '../'

export const setQuote = createEvent<string>()

export const $quote = createStore<string | null>(null)

$quote.on(setQuote, (_, value) => value)

export const setAuthor = createEvent<string>()

export const $author = createStore<string | null>(null)

$author.on(setAuthor, (_, value) => value)

export const useQuoteData = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const controller = useRef<AbortController>(new AbortController())

  return { isLoaded, setIsLoaded, controller }
}

export const useQuote = (isOpen: boolean, onLoadEnd: () => void) => {
  const author = useQuoteData()
  const quote = useQuoteData()

  useEffect(() => {
    if (isOpen) {
      author.controller.current = new AbortController()
      quote.controller.current = new AbortController()
      author.setIsLoaded(false)
      quote.setIsLoaded(false)

      const getData = async () => {
        const { data: authorData } = await getAuthorReq(
          author.controller.current.signal
        )
        setAuthor(authorData.name)
        author.setIsLoaded(true)

        const { data: quoteData } = await getQuoteReq(
          { authorId: authorData.authorId },
          quote.controller.current.signal
        )
        setQuote(quoteData.quote)
        quote.setIsLoaded(true)
      }

      getData().then(() => onLoadEnd())
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  return {
    author,
    quote,
  }
}
