'use client'

import type { RefObject, useEffect } from 'react'

export interface MutationCallback {
  (mutations: MutationRecord[], observer: MutationObserver): void
}

export const useMutationObserver = (
  elements: Array<RefObject<Element>>,
  callback: MutationCallback,
  config:
    | {
        /** Set to a list of attribute local names (without namespace) if not all attribute mutations need to be observed and attributes is true or omitted. */
        attributeFilter?: string[]
        /** Set to true if attributes is true or omitted and target's attribute value before the mutation needs to be recorded. */
        attributeOldValue?: boolean
        /** Set to true if mutations to target's attributes are to be observed. Can be omitted if attributeOldValue or attributeFilter is specified. */
        attributes?: boolean
        /** Set to true if mutations to target's data are to be observed. Can be omitted if characterDataOldValue is specified. */
        characterData?: boolean
        /** Set to true if characterData is set to true or omitted and target's data before the mutation needs to be recorded. */
        characterDataOldValue?: boolean
        /** Set to true if mutations to target's children are to be observed. */
        childList?: boolean
        /** Set to true if mutations to not just target, but also target's descendants are to be observed. */
        subtree?: boolean
      }
    | undefined,
) => {
  useEffect(() => {
    const mutationObserver = new MutationObserver((mutations) => {
      mutationObserver.disconnect()
      callback(mutations, mutationObserver)
      for (const elem of elements) {
        elem.current && mutationObserver.observe(elem.current, config)
      }
    })
    for (const elem of elements) {
      elem.current && mutationObserver.observe(elem.current, config)
    }
    return () => mutationObserver.disconnect()
  }, [callback, config, elements])
}
