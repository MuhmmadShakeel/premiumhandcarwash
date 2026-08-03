import Button from './Button'
import { company } from '../data/site'

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-brand pb-14 pt-10 text-white sm:pt-12 lg:pb-16 lg:pt-11" data-aos="fade-up" data-aos-duration="700">
      <div className="absolute -right-16 -top-32 size-80 rounded-full border-[60px] border-white/10"/>
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-9 px-5 sm:px-8 lg:flex-row lg:items-center" data-aos="fade-up">
        <div><p className="text-xs font-black uppercase tracking-[.3em] text-white/70">Ready for a better clean?</p><h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-[-.035em] sm:text-4xl">Your car deserves the premium treatment.</h2></div>
        <Button href={company.phoneHref} variant="dark" className="shrink-0 bg-white !text-ink hover:!bg-ink hover:!text-white">Call {company.phone}</Button>
      </div>
    </section>
  )
}
