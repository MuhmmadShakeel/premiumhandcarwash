import { Link } from '../router'
import Icon from './Icon'

export default function PageHero({ eyebrow, title, text, centered = false, highlights = [], backgroundWord = eyebrow, children }) {
  if (centered) return (
    <section className="dark-grid relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 text-center text-white sm:pb-20 sm:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,73,90,.12),transparent_42%)]"/>
      <div className="absolute -left-32 top-1/2 size-80 -translate-y-1/2 rounded-full bg-brand/10 blur-[110px]"/>
      <div className="absolute -right-32 top-1/3 size-80 rounded-full bg-brand/10 blur-[110px]"/>
      <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[10rem] font-black uppercase leading-none tracking-[-.07em] text-white/[.018] lg:block" aria-hidden="true">{backgroundWord}</span>
      <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden items-center justify-between px-[6%] lg:flex" aria-hidden="true"><span className="h-px w-32 bg-gradient-to-r from-transparent to-brand/50"/><span className="h-px w-32 bg-gradient-to-l from-transparent to-brand/50"/></div>

      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[.15em] text-white/40" data-aos="fade-down" data-aos-duration="650">
          <Link to="/" className="transition hover:text-brand">Home</Link><Icon name="chevron" size={13}/><span className="text-white/75">{eyebrow}</span>
        </div>
        <div className="mt-6" data-aos="fade-up" data-aos-delay="70">
          <div className="flex items-center justify-center gap-3"><span className="h-px w-9 bg-brand"/><p className="text-[10px] font-black uppercase tracking-[.32em] text-brand">{eyebrow}</p><span className="h-px w-9 bg-brand"/></div>
          <h1 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-black leading-[.98] tracking-[-.05em] sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/55 sm:text-base sm:leading-7" data-aos="fade-up" data-aos-delay="140">{text}</p>
        </div>
        {highlights.length > 0 && <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5" data-aos="fade-up" data-aos-delay="220">
          {highlights.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[.045] px-4 py-2 text-[9px] font-black uppercase tracking-[.16em] text-white/60 backdrop-blur-sm"><span className="mr-2 inline-block size-1.5 rounded-full bg-brand"/>{item}</span>)}
        </div>}
        {children && <div className="mt-8" data-aos="fade-up" data-aos-delay="220" data-aos-duration="750">{children}</div>}
      </div>
    </section>
  )

  return (
    <section className="dark-grid relative flex min-h-[54vh] items-end overflow-hidden pb-16 pt-36 text-white lg:pb-20">
      <div className="absolute -right-32 top-20 size-[28rem] rounded-full bg-brand/15 blur-3xl"/>
      <div className="absolute right-[8%] top-[25%] hidden text-[18rem] font-black leading-none text-white/[.025] lg:block">P</div>
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mb-7 flex items-center gap-2 text-xs font-bold text-white/45" data-aos="fade-up">
          <Link to="/" className="transition hover:text-brand">Home</Link><Icon name="chevron" size={14}/><span className="text-white">{eyebrow}</span>
        </div>
        <div className="max-w-4xl" data-aos="fade-up" data-aos-delay="80">
          <p className="mb-5 text-xs font-black uppercase tracking-[.35em] text-brand">{eyebrow}</p>
          <h1 className="text-balance text-4xl font-black leading-[1] tracking-[-.045em] sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60">{text}</p>
        </div>
      </div>
    </section>
  )
}
