import { useContext } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { ActionContext } from '../../components/context/SearchProvider'

export function Search() {
  const context = useContext(ActionContext)

  if (!context) return null

  const { setIsSearchOpen } = context

  return (
    <button
      onClick={() => setIsSearchOpen(true)}
      className="flex flex-1 cursor-text items-center gap-5 rounded-xl bg-neutral-200/20 p-2 text-sm leading-none backdrop-blur-3xl dark:bg-neutral-800/20"
    >
      <span className="flex items-center gap-3">
        <MagnifyingGlass size="1em" />
        <span className="text-neutral-600 dark:text-neutral-400">
          Search...
        </span>
        <kbd className="keyboard hidden md:flex">Ctrl K</kbd>
      </span>
    </button>
  )
}
