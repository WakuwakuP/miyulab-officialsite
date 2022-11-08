import type { RefObject } from 'react'
import { useCallback } from 'react'

type DOMRectProperty = keyof Omit<DOMRect, 'toJSON'>

/**
 * ElementのPropertyを取得する
 * @param elementRef
 * @returns number
 */
export const useGetElementProperty = <T extends HTMLElement>(elementRef: RefObject<T>) => {
  const getElementProperty = useCallback(
    (targetProperty: DOMRectProperty): number => {
      const clientRect = elementRef.current?.getBoundingClientRect()
      if (clientRect) {
        return clientRect[targetProperty]
      }
      return 0
    },
    [elementRef],
  )
  return {
    getElementProperty,
  }
}
