import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from '../router'
import { company } from '../data/site'
import Icon from './Icon'

const links = [
  ['Home', '/'], ['Services', '/services'], ['Pricing', '/pricing'], ['About', '/about'], ['Contact', '/contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-white/95 transition-all duration-300 backdrop-blur-xl ${scrolled ? 'shadow-[0_12px_40px_rgba(0,0,0,.09)]' : ''}`}>
      <div className={`hidden overflow-hidden bg-ink text-white transition-all duration-300 md:block ${scrolled ? 'max-h-0' : 'max-h-9'}`}>
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-8 text-[10px] font-bold uppercase tracking-[.14em] text-white/55">
          <span className="flex items-center gap-2"><Icon name="map" size={13} className="text-brand"/>{company.address}</span>
          <span className="flex items-center gap-2"><Icon name="clock" size={13} className="text-brand"/>Mon–Sat 8AM–5PM <span className="text-white/20">•</span> Sun 8AM–3PM</span>
        </div>
      </div>
      <nav className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all sm:px-8 ${scrolled ? 'h-17' : 'h-20'}`} aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-3" aria-label={`${company.name} home`}>
          <span className="grid h-13 w-11 place-items-center overflow-hidden bg-white">
            <img src="/images/logo.jpeg" alt="Premium Hand Car Wash logo" className="h-full w-full object-contain"/>
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-black uppercase tracking-[-.02em] text-ink">Premium Hand</span>
            <span className="block text-[9px] font-black uppercase tracking-[.22em] text-brand">Car Wash LLC</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} className={({ isActive }) => `rounded-full px-2.5 py-2 text-[11px] font-black uppercase tracking-[.12em] transition ${isActive ? 'bg-brand/10 text-brand' : 'text-zinc-600 hover:text-brand'}`}>{label}</NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={company.phoneHref} className="grid size-10 place-items-center rounded-full border border-zinc-200 text-ink transition hover:border-brand hover:bg-brand hover:text-white" aria-label={`Call ${company.phone}`}><Icon name="phone" size={17}/></a>
          <Link to="/contact" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-xs font-black uppercase tracking-[.1em] text-white transition hover:bg-brand">Book a wash<Icon name="arrow" size={15}/></Link>
        </div>

        <button className="grid size-11 place-items-center rounded-full bg-ink text-white lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          <Icon name={open ? 'close' : 'menu'} size={21}/>
        </button>
      </nav>
      <div className="h-0.5 bg-gradient-to-r from-transparent via-brand to-transparent opacity-70"/>

      <div className={`overflow-hidden bg-white transition-[max-height,opacity] duration-300 lg:hidden ${open ? 'max-h-[32rem] border-t border-zinc-100 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="space-y-1 px-5 py-5">
          {links.map(([label, path]) => <NavLink key={path} to={path} className={({isActive}) => `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold ${isActive ? 'bg-brand text-white' : 'text-zinc-700 hover:bg-zinc-100'}`}>{label}<Icon name="arrow" size={17}/></NavLink>)}
          <a href={company.phoneHref} className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-ink px-4 py-4 text-sm font-bold text-white"><Icon name="phone" size={17}/>{company.phone}</a>
        </div>
      </div>
    </header>
  )
}
