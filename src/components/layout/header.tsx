import { RouterLink } from '../routerLink'
import React from 'react'
import { Logo } from '@/components/ui/icons'
import { Link } from 'react-router-dom'
import { CartLink } from '@/components/layout/cartLink'

export const mainNavLinks: { to: string; children: React.ReactNode }[] = [
  { to: '/', children: 'Каталог' },
]

const Header = () => {
  return (
    <header className="flex bg-opacity-75 shadow-xl bg-neutral-0 items-center z-50  top-0 w-full fixed min-h-[72px] ">
      <div className="container  justify-between items-center flex">
        <Link
          to={'/'}
          className="[&_svg_path]:fill-current focus-visible:ring-2 rounded-[12px]
          focus-visible:ring-accent-main  ring-offset-background outline-0 focus-visible:ring-offset-2  [&_*]:text-accent-green link">
          <Logo height={50} width={50} />
        </Link>
        <nav className="flex gap-[8px]">
          {mainNavLinks.map(link => (
            <RouterLink key={link.to} {...link} />
          ))}
          <CartLink />
        </nav>
      </div>
    </header>
  )
}

export default Header
