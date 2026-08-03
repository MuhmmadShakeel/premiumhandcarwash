import { useState } from 'react'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import { company } from '../data/site'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const onSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return <>
    <PageHero centered eyebrow="Contact us" title="Let’s make your car shine." text="Call for an appointment, visit our Houston location or send us your service request.">
      <div className="grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-4">
        <div className="group rounded-2xl border border-white/10 bg-white/[.045] p-4 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[.08]">
          <div className="flex items-center gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand text-white transition-transform duration-500 group-hover:scale-110"><Icon name="map" size={17}/></span><p className="text-[9px] font-black uppercase tracking-[.18em] text-brand">Location</p></div>
          <p className="mt-3 text-xs font-bold leading-5 text-white/75">842 Freeport St,<br/>Houston, TX 77015</p>
        </div>
        <a href={company.phoneHref} className="group rounded-2xl border border-white/10 bg-white/[.045] p-4 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[.08]">
          <div className="flex items-center gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand text-white transition-transform duration-500 group-hover:scale-110"><Icon name="phone" size={17}/></span><p className="text-[9px] font-black uppercase tracking-[.18em] text-brand">Phones</p></div>
          <p className="mt-3 text-sm font-black text-white">713-453-4461</p>
        </a>
        <a href={`mailto:${company.email}`} className="group min-w-0 rounded-2xl border border-white/10 bg-white/[.045] p-4 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[.08]">
          <div className="flex items-center gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand text-white transition-transform duration-500 group-hover:scale-110"><Icon name="mail" size={17}/></span><p className="text-[9px] font-black uppercase tracking-[.18em] text-brand">Email</p></div>
          <p className="mt-3 truncate text-xs font-bold text-white/75">Mariothanoon@hotmail.com</p>
        </a>
        <div className="group rounded-2xl border border-white/10 bg-white/[.045] p-4 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[.08]">
          <div className="flex items-center gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand text-white transition-transform duration-500 group-hover:scale-110"><Icon name="clock" size={17}/></span><p className="text-[9px] font-black uppercase tracking-[.18em] text-brand">Working hours</p></div>
          <div className="mt-3 space-y-1 text-[10px] text-white/65"><div className="flex justify-between gap-2"><b className="text-white">MON – SAT</b><span>8AM – 5PM</span></div><div className="flex justify-between gap-2"><b className="text-white">SUNDAY</b><span>8AM – 3PM</span></div></div>
        </div>
      </div>
    </PageHero>

    <section className="overflow-hidden py-12 sm:py-14 lg:py-16" data-aos="fade-up" data-aos-duration="700">
      <div className="mx-auto grid w-full max-w-7xl items-stretch gap-6 px-5 sm:px-8 lg:grid-cols-2 lg:gap-9">
        <div className="group relative min-h-[440px] overflow-hidden rounded-[2rem] border border-zinc-200 shadow-[0_24px_65px_rgba(28,28,29,.12)] lg:min-h-[760px]" data-aos="fade-right" data-aos-duration="750">
          <img src="/images/car-wash.jpg" alt="Premium Hand Car Wash location in Houston" className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025]"/>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/5 to-ink/10"/>
          <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-ink/45 px-4 py-2 text-[9px] font-black uppercase tracking-[.18em] text-white backdrop-blur-md sm:left-8 sm:top-8"><span className="size-1.5 rounded-full bg-brand shadow-[0_0_12px_#FB495A]"/>Houston, Texas</div>
          <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9 sm:right-9"><span className="grid size-12 place-items-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/25"><Icon name="sparkles" size={22}/></span><p className="mt-5 text-[9px] font-black uppercase tracking-[.22em] text-brand">Premium hand car care</p><h2 className="mt-2 max-w-md text-2xl font-black tracking-[-.035em] text-white sm:text-3xl">A better finish starts with a conversation.</h2><p className="mt-3 max-w-sm text-sm leading-6 text-white/55">Tell us what your vehicle needs and we’ll help you plan the right service.</p></div>
        </div>

        <div className="flex min-h-[440px] flex-col justify-center rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_24px_65px_rgba(28,28,29,.07)] sm:p-9 lg:min-h-[760px] lg:p-10 xl:p-12" data-aos="fade-left" data-aos-delay="100" data-aos-duration="750">
          <div className="text-center"><p className="text-[10px] font-black uppercase tracking-[.28em] text-brand">Request an appointment</p><h2 className="mt-4 text-3xl font-black tracking-[-.04em] text-ink sm:text-4xl">Tell us how we can help.</h2><p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-500">Share your vehicle and preferred service, then call us to confirm availability.</p></div>
          {submitted ? <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-7"><span className="grid size-12 place-items-center rounded-full bg-green-500 text-white"><Icon name="check"/></span><h3 className="mt-5 text-xl font-black">Request prepared.</h3><p className="mt-2 text-sm leading-6 text-zinc-600">Thank you. Because this demo has no email backend, please call <a className="font-black text-brand" href={company.phoneHref}>{company.phone}</a> to confirm your appointment.</p><button onClick={()=>setSubmitted(false)} className="mt-5 text-sm font-black text-brand">Send another request</button></div> :
          <form className="mt-8 grid gap-5" onSubmit={onSubmit}>
            <div className="grid gap-5 sm:grid-cols-2"><label className="text-xs font-black uppercase tracking-wider text-zinc-500">Your name<input required name="name" autoComplete="name" className="mt-2 min-h-13 w-full rounded-xl border border-zinc-200 bg-surface px-4 text-sm font-normal text-ink transition focus:border-brand" placeholder="Full name"/></label><label className="text-xs font-black uppercase tracking-wider text-zinc-500">Phone number<input required type="tel" name="phone" autoComplete="tel" className="mt-2 min-h-13 w-full rounded-xl border border-zinc-200 bg-surface px-4 text-sm font-normal text-ink transition focus:border-brand" placeholder="(713) 000-0000"/></label></div>
            <label className="text-xs font-black uppercase tracking-wider text-zinc-500">Email address<input type="email" name="email" autoComplete="email" className="mt-2 min-h-13 w-full rounded-xl border border-zinc-200 bg-surface px-4 text-sm font-normal text-ink transition focus:border-brand" placeholder="you@example.com"/></label>
            <div className="grid gap-5 sm:grid-cols-2"><label className="text-xs font-black uppercase tracking-wider text-zinc-500">Vehicle type<select name="vehicle" className="mt-2 min-h-13 w-full rounded-xl border border-zinc-200 bg-surface px-4 text-sm font-normal text-ink transition focus:border-brand"><option>Car</option><option>SUV</option><option>Truck</option><option>Other</option></select></label><label className="text-xs font-black uppercase tracking-wider text-zinc-500">Service<select name="service" className="mt-2 min-h-13 w-full rounded-xl border border-zinc-200 bg-surface px-4 text-sm font-normal text-ink transition focus:border-brand"><option>Premium Hand Wash</option><option>Wash & Detail</option><option>Full Detail</option><option>Engine Service</option><option>Carpet Shampoo</option></select></label></div>
            <label className="text-xs font-black uppercase tracking-wider text-zinc-500">Message<textarea name="message" rows="5" className="mt-2 w-full resize-y rounded-xl border border-zinc-200 bg-surface p-4 text-sm font-normal text-ink transition focus:border-brand" placeholder="Tell us about your vehicle and preferred day."/></label>
            <button type="submit" className="group flex min-h-14 items-center justify-center gap-3 rounded-full bg-brand px-7 text-sm font-black text-white shadow-lg shadow-brand/20 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark">Send request<span className="grid size-7 place-items-center rounded-full bg-white/15"><Icon name="arrow" size={15}/></span></button>
          </form>}
        </div>
      </div>
    </section>
  </>
}
