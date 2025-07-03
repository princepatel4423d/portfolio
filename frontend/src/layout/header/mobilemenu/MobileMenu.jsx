import { useState, useContext } from 'react'
import { ActionContext } from '../../../components/context/SearchProvider'
import { Link as RouterLink } from 'react-router-dom'
import {
  List,
  X,
  House,
  ArrowUpRight,
  File,
  GithubLogo,
  MagnifyingGlass,
  Note,
  User,
  Briefcase,
  Trophy
} from '@phosphor-icons/react'
import { MobileTheme } from './MobileTheme'

export function MobileMenu() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const context = useContext(ActionContext)

  const Link = ({ title, icon: Icon, href }) => (
    <RouterLink
      to={href}
      onClick={() => setIsDialogOpen(false)}
      className="flex items-center gap-7 px-7 py-4 leading-none active:bg-neutral-200 active:dark:bg-neutral-1000"
    >
      <Icon size="1em" weight="duotone" />
      <span>{title}</span>
    </RouterLink>
  )

  const OutLink = ({ title, icon: Icon, href, rel }) => (
    <a
      href={href}
      rel={rel}
      target="_blank"
      className="flex items-center gap-7 px-7 py-4 leading-none active:bg-neutral-200 active:dark:bg-neutral-1000"
    >
      <Icon size="1em" weight="duotone" />
      <span className="flex items-end gap-px">
        <span>{title}</span>
        <ArrowUpRight size="1em" className="text-xs" />
      </span>
    </a>
  )

  const Search = () => {
    if (!context) return null

    const { setIsSearchOpen } = context

    return (
      <button
        onClick={() => {
          setIsDialogOpen(false)
          setIsSearchOpen(true)
        }}
        className="flex items-center gap-7 px-7 py-4 leading-none active:bg-neutral-200 active:dark:bg-neutral-1000"
      >
        <MagnifyingGlass size="1em" weight="duotone" />
        <span className="flex items-end gap-px">
          <span>Search</span>
        </span>
      </button>
    )
  }

  return (
    <>
      {/* Menu Button */}
      <button
        className="px-4 py-3 md:hidden"
        aria-label="Open menu"
        onClick={() => setIsDialogOpen(true)}
      >
        <List size="1em" />
      </button>

      {/* Overlay and Sidebar */}
      {isDialogOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setIsDialogOpen(false)}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md animate-overlayShow"
          />

          {/* Sidebar Content */}
          <div className="fixed bottom-0 right-0 top-0 z-50 w-3/4 animate-slide-left">
            <div className="relative flex h-dvh w-full">
              {/* Close Button */}
              <button
                aria-label="Close"
                onClick={() => setIsDialogOpen(false)}
                className="absolute left-2 top-2 rounded-full p-2 backdrop-blur-lg active:bg-red-300/20 active:text-red-500 active:dark:bg-red-300/10 active:dark:text-red-400"
              >
                <X size="1em" weight="bold" />
              </button>

              {/* Menu Content */}
              <div className="flex flex-1 flex-col overflow-y-scroll rounded-bl-[2rem] rounded-tl-[2rem] bg-neutral-100 py-10 text-xl dark:bg-neutral-950">
                <Link title="Home" icon={House} href="/" />
                <Link title="Blog" icon={Note} href="/blog" />
                <Link title="Projects" icon={Briefcase} href="/projects" />
                <Link title="About" icon={User} href="/about" />
                <Link title="Achievement" icon={Trophy} href="/achievement" />

                <Search />

                <OutLink
                  title="License"
                  icon={File}
                  rel="license"
                  href="https://github.com/princepatel4423d/portfolio/blob/main/LICENSE"
                />
                <OutLink
                  title="Github"
                  icon={GithubLogo}
                  rel="external"
                  href="https://github.com/princepatel4423d"
                />

                <MobileTheme />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
