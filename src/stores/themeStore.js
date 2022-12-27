import { atom } from 'jotai'

export const isDark = atom(false)
export const chooseColor = atom({
  light: 'bg-gray-200',
  dark: 'bg-gray-700'
})
