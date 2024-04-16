import { useEffect, useState } from 'react'

export default function useLocalStorage<T>(
  key: string,
  defaultValue?: T
): [T | undefined, (value: T) => void, () => void] {
  const [value, setValue] = useState(defaultValue)

  const remove = () => {
    localStorage.removeItem(key)
    dispatchEvent(new Event('storage'))
  }

  const setValueWrap = (value: T) => {
    try {
      setValue(value)

      localStorage.setItem(key, JSON.stringify(value))
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new StorageEvent('storage', { key }))
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    const item = localStorage.getItem(key)

    if (!item && defaultValue !== undefined) {
      localStorage.setItem(key, JSON.stringify(defaultValue))
    }

    setValue(item ? JSON.parse(item) : defaultValue)

    function handler(e: StorageEvent) {
      if (e.key !== key) return

      const lsi = localStorage.getItem(key)
      setValue(JSON.parse(lsi ?? ''))
    }

    window.addEventListener('storage', handler)

    return () => {
      window.removeEventListener('storage', handler)
    }
  }, [defaultValue, key])

  return [value, setValueWrap, remove]
}
