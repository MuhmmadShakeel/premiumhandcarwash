import { Link } from '../router'
import { company } from '../data/site'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="dark-grid border-t-4 border-brand text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.9fr]">
          <div>
            <Link to="/" className="flex items-center gap-4">
              <img src="/images/logo.jpeg" alt="Premium Hand Car Wash" className="h-24 w-18 rounded-lg border-2 border-white/20 object-cover shadow-xl"/>
              <div><p className="text-xl font-black uppercase">Premium Hand</p><p className="text-xs font-bold uppercase tracking-[.22em] text-brand">Car Wash LLC</p></div>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">Professional hand washing and cleaning with care, modern equipment and a commitment to a better finish.</p>
          </div>
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[.24em] text-brand">Explore</p>
            <div className="grid grid-cols-2 gap-3 text-sm font-bold text-white/70">
              <Link className="hover:text-brand" to="/">Home</Link><Link className="hover:text-brand" to="/services">Services</Link>
              <Link className="hover:text-brand" to="/pricing">Pricing</Link><Link className="hover:text-brand" to="/about">About</Link>
              <Link className="hover:text-brand" to="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[.24em] text-brand">Visit us</p>
            <div className="space-y-4 text-sm text-white/65">
              <a href={company.phoneHref} className="flex gap-3 hover:text-brand"><Icon name="phone" size={18} className="shrink-0 text-brand"/>{company.phone}</a>
              <p className="flex gap-3"><Icon name="map" size={18} className="shrink-0 text-brand"/>{company.address}</p>
              <a href={`mailto:${company.email}`} className="flex gap-3 break-all hover:text-brand"><Icon name="mail" size={18} className="shrink-0 text-brand"/>{company.email}</a>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Professional care. Premium finish.</p>
        </div>
      </div>
    </footer>
  )
}
