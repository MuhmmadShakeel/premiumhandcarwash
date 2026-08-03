import { useEffect, useState } from 'react'
import Button from '../components/Button'
import Icon from '../components/Icon'
import SectionTitle from '../components/SectionTitle'
import { benefits, company, plans, rules, services } from '../data/site'

function Hero() {
  const slides = [
    { title: 'Contactless', accent: 'Car Wash', text: 'Modern equipment and a careful process designed to protect every finish.', image: '/images/hero/front-exterior.jpg', position: 'center 55%' },
    { title: 'Nothing Like a', accent: 'Clean Car', text: 'Professional hand washing and detailing that makes every drive feel better.', image: '/images/hero/wash-in-action.jpg', position: 'center 58%' },
    { title: 'Care Service for', accent: 'Your Car', text: 'Personal attention, paint-safe materials and a finish you can see immediately.', image: '/images/hero/interior-service.jpg', position: 'center 62%' },
    { title: 'Interior & Exterior', accent: 'Cleaning', text: 'A complete clean that goes beyond the surface, inside and out.', image: '/images/hero/exterior-cleaning.jpg', position: 'center 58%' },
    { title: 'Quality Service', accent: 'For You', text: 'Local Houston car care built around detail, consistency and honest service.', image: '/images/hero/carwash-front.jpg', position: 'center 58%' },
  ]
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [query, setQuery] = useState('')
  useEffect(() => {
    if (paused) return undefined
    const timer = setInterval(() => setActive((current) => (current + 1) % slides.length), 5200)
    return () => clearInterval(timer)
  }, [paused, slides.length])
  const move = (direction) => setActive((current) => (current + direction + slides.length) % slides.length)
  const searchSite = (event) => {
    event.preventDefault()
    const term = query.trim().toLowerCase()
    const destination = /price|cost|plan|package/.test(term)
      ? '/pricing'
      : /contact|book|appointment|phone|location|address/.test(term)
        ? '/contact'
        : '/services'
    window.history.pushState({}, '', destination)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pb-24 pt-32 text-center text-white" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)} aria-roledescription="carousel" aria-label="Premium car wash highlights">
      {slides.map((slide, index) => <div key={slide.title} className={`absolute inset-0 transition duration-1000 ${active === index ? 'scale-100 opacity-100' : 'pointer-events-none scale-[1.03] opacity-0'}`} aria-hidden={active !== index}>
        <img src={slide.image} alt="" className="h-full w-full object-cover" style={{objectPosition: slide.position}} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'}/>
        <div className="absolute inset-0 bg-ink/60"/>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,28,29,.18)_0%,rgba(28,28,29,.72)_82%)]"/>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/25"/>
      </div>)}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <span className="hero-line absolute left-[5%] top-[31%] h-px w-40 origin-left bg-gradient-to-r from-transparent to-brand"/>
        <span className="hero-line absolute left-[9%] top-[35%] h-px w-24 origin-left bg-gradient-to-r from-transparent to-white/60" style={{animationDelay:'.7s'}}/>
        <span className="hero-line absolute right-[5%] top-[31%] h-px w-40 origin-right bg-gradient-to-l from-transparent to-brand" style={{animationDelay:'.35s'}}/>
        <span className="hero-line absolute right-[9%] top-[35%] h-px w-24 origin-right bg-gradient-to-l from-transparent to-white/60" style={{animationDelay:'1s'}}/>
        <span className="absolute left-[7%] top-[29%] size-2 rounded-full bg-brand shadow-[0_0_18px_#FB495A]"/>
        <span className="absolute right-[7%] top-[29%] size-2 rounded-full bg-brand shadow-[0_0_18px_#FB495A]"/>
      </div>
      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div data-aos="fade-up" aria-live="polite">
          <div className="mb-5 flex items-center justify-center gap-4"><span className="h-px w-9 bg-brand"/><span className="text-[10px] font-black uppercase tracking-[.32em] text-brand">Modern equipment</span><span className="h-px w-9 bg-brand"/></div>
          <h1 className="text-balance text-4xl font-black leading-[.98] tracking-[-.045em] sm:text-5xl lg:text-6xl">{slides[active].title} <span className="text-brand">{slides[active].accent}</span></h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">{slides[active].text}</p>
          <form onSubmit={searchSite} className="mx-auto mt-8 flex max-w-2xl items-center rounded-full border border-white/20 bg-white/10 p-1.5 shadow-2xl shadow-black/30 backdrop-blur-xl" role="search">
            <span className="ml-4 shrink-0 text-white/55"><Icon name="search" size={20}/></span>
            <label htmlFor="hero-search" className="sr-only">Search services, pricing or appointments</label>
            <input id="hero-search" value={query} onChange={(event)=>setQuery(event.target.value)} className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/45 focus:outline-none" placeholder="Search services, pricing or appointments..."/>
            <button type="submit" className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-brand px-5 text-xs font-black uppercase tracking-[.12em] text-white transition hover:bg-white hover:text-ink">Search<span className="hidden sm:inline"><Icon name="arrow" size={15}/></span></button>
          </form>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[10px] font-black uppercase tracking-[.16em] text-white/55"><Button to="/pricing" variant="outline" className="!min-h-10 !px-4 !py-1">View wash plans</Button><a href={company.phoneHref} className="transition hover:text-brand">Call {company.phone}</a></div>
        </div>
      </div>
      <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-3">
        <button onClick={() => move(-1)} className="grid size-11 place-items-center rounded-full border border-white/25 bg-ink/25 text-white backdrop-blur transition hover:border-brand hover:bg-brand" aria-label="Previous slide"><Icon name="chevron" size={18} className="rotate-180"/></button>
        <div className="flex gap-2">{slides.map((slide,index)=><button key={slide.title} onClick={()=>setActive(index)} className={`h-1 rounded-full transition-all duration-300 ${active===index?'w-7 bg-brand':'w-3 bg-white/30 hover:bg-white/60'}`} aria-label={`Go to slide ${index+1}`} aria-current={active===index}/>)}</div>
        <button onClick={() => move(1)} className="grid size-11 place-items-center rounded-full border border-white/25 bg-ink/25 text-white backdrop-blur transition hover:border-brand hover:bg-brand" aria-label="Next slide"><Icon name="chevron" size={18}/></button>
      </div>
    </section>
  )
}

function Welcome() {
  const process = [
    { icon: 'shield', title: 'Paint-safe care', text: 'Premium products' },
    { icon: 'wand', title: 'Hand finished', text: 'Detail-led results' },
    { icon: 'clock', title: 'Made convenient', text: 'Walk-ins welcome' },
  ]

  return (
    <section id="welcome" className="welcome-showcase relative flex min-h-[100svh] items-center overflow-hidden border-y border-zinc-100 pb-12 pt-8 text-ink sm:pb-14 sm:pt-10 lg:h-[100svh] lg:min-h-[680px] lg:max-h-[920px] lg:pb-10 lg:pt-6" data-aos="fade-up" data-aos-duration="700">
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 xl:gap-24">
        <div className="relative z-20 max-w-lg" data-aos="fade-right">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-brand"/>
            <span className="text-[10px] font-black uppercase tracking-[.3em] text-brand">The premium difference</span>
          </div>
          <h2 className="text-balance text-[clamp(2.25rem,4.2vw,4.35rem)] font-black leading-[.96] tracking-[-.05em]">
            More than clean.<br/><span className="text-brand">Immaculately cared for.</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-6 text-zinc-500 sm:leading-7">
            Professional hand washing in Houston, combining modern equipment with the human attention your vehicle deserves.
          </p>

          <div className="mt-7 grid grid-cols-3 border-y border-zinc-200 py-4">
            {process.map((item) => <div key={item.title} className="border-zinc-200 px-2 first:pl-0 not-first:border-l sm:px-4">
              <Icon name={item.icon} size={19} className="mb-2.5 text-brand"/>
              <p className="text-[11px] font-black sm:text-xs">{item.title}</p>
              <p className="mt-1 hidden text-[9px] uppercase tracking-[.12em] text-zinc-400 sm:block">{item.text}</p>
            </div>)}
          </div>

        </div>

        <div className="relative min-h-[350px] sm:min-h-[480px] lg:h-[min(68vh,640px)] lg:min-h-0" data-aos="fade-left">
          <div className="absolute bottom-[10%] right-[2%] top-[8%] w-[72%] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#1C1C1D] shadow-[0_30px_75px_rgba(28,28,29,.18)] sm:rounded-[2.5rem]">
            <span className="absolute -right-3 top-5 select-none text-[7rem] font-black leading-none text-brand/25 sm:text-[10rem]">01</span>
            <div className="absolute -left-px -top-px h-16 w-16 rounded-tl-[1.75rem] border-l-2 border-t-2 border-brand sm:h-24 sm:w-24 sm:rounded-tl-[2.5rem]"/>
            <div className="absolute -bottom-px -right-px h-16 w-16 rounded-br-[1.75rem] border-b-2 border-r-2 border-brand sm:h-24 sm:w-24 sm:rounded-br-[2.5rem]"/>
          </div>

          <div className="absolute right-[7%] top-[12%] z-20 flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-3 py-2 text-[8px] font-black uppercase tracking-[.18em] text-ink shadow-lg shadow-black/5 backdrop-blur-md sm:px-4 sm:text-[9px]"><span className="size-1.5 animate-pulse rounded-full bg-brand"/>Houston, Texas</div>

          <div className="wash-orbit absolute right-[4%] top-[32%] z-10 size-20 rounded-full border border-dashed border-brand/30 sm:size-28">
            <span className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_18px_#FB495A]"/>
          </div>

          <img src="/images/washer.png" alt="Professional hand wash specialist cleaning a red car" className="welcome-car absolute bottom-[7%] left-[-19%] z-10 w-[146%] max-w-none object-contain drop-shadow-[0_28px_25px_rgba(0,0,0,.24)] sm:left-[-12%] sm:w-[136%] lg:left-[-17%] lg:w-[146%]"/>

          <div className="group absolute bottom-0 right-0 z-20 w-[210px] overflow-hidden rounded-2xl border border-white/10 bg-[#1C1C1D] p-4 text-white shadow-[0_22px_55px_rgba(28,28,29,.25)] transition duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-[0_28px_65px_rgba(28,28,29,.34)] sm:bottom-[2%] sm:right-[1%] sm:w-[250px] sm:p-5">
            <span className="absolute -right-8 -top-10 size-28 rounded-full border-[18px] border-white/[.035] transition duration-500 group-hover:scale-110 group-hover:border-brand/[.08]" aria-hidden="true"/>
            <div className="relative flex items-center justify-between"><span className="grid size-9 place-items-center rounded-full bg-brand text-white shadow-lg shadow-brand/25 transition group-hover:rotate-6 group-hover:scale-105"><Icon name="sparkles" size={17}/></span><span className="text-[9px] font-black uppercase tracking-[.2em] text-brand">Our promise</span></div>
            <p className="mt-4 text-sm font-black leading-5">Careful hands. Brilliant finish.</p>
            <div className="mt-3 flex items-center gap-2 text-[10px] text-white/50"><Icon name="check" size={13} className="text-brand"/>Quality checked before handoff</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section className="flex min-h-[100svh] items-start overflow-hidden pb-10 pt-5 sm:pb-12 sm:pt-7 lg:h-[100svh] lg:min-h-[660px] lg:max-h-[900px] lg:pb-8 lg:pt-5" data-aos="fade-up" data-aos-duration="700">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="text-center" data-aos="fade-up">
          <div className="mb-4 flex items-center justify-center gap-3"><span className="h-px w-9 bg-brand"/><span className="text-[10px] font-black uppercase tracking-[.32em] text-brand">Why choose us</span><span className="h-px w-9 bg-brand"/></div>
          <h2 className="text-balance text-3xl font-black leading-tight tracking-[-.04em] text-ink sm:text-4xl lg:whitespace-nowrap lg:text-5xl">Care you can see in every detail.</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-500">Four simple promises guide every wash and every finish.</p>
        </div>

        <div className="mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4 lg:gap-5">
          {benefits.map((item, index) => <article key={item.title} data-aos="fade-up" data-aos-delay={index*55} className="group relative min-w-[82vw] snap-center overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_12px_35px_rgba(28,28,29,.045)] transition duration-300 hover:border-brand/35 hover:shadow-[0_20px_48px_rgba(28,28,29,.09)] sm:min-w-0 lg:min-h-[280px] lg:p-7">
            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-brand/45 to-transparent"/>
            <div className="flex items-start justify-between">
              <div className="grid size-13 place-items-center rounded-2xl border border-brand/15 bg-brand/[.08] text-brand shadow-sm transition-transform duration-300 group-hover:scale-110"><Icon name={item.icon} size={25}/></div>
              <span className="text-sm font-black tracking-[.12em] text-zinc-300">0{index+1}</span>
            </div>
            <div className="mt-10 h-px w-10 bg-zinc-200"/>
            <h3 className="mt-5 text-lg font-black tracking-tight text-ink lg:text-xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-500">{item.text}</p>
          </article>)}
        </div>
        <div className="mt-8 flex justify-center"><Button to="/services" variant="dark" className="!min-h-11 !px-5 !py-2.5 !text-xs">See all services</Button></div>
      </div>
    </section>
  )
}

function FeaturedServices() {
  const service = services[2]
  return (
    <section className="dark-grid relative flex min-h-[100svh] items-center overflow-hidden py-12 text-white sm:py-14 lg:h-[100svh] lg:min-h-[720px] lg:max-h-[940px] lg:py-10" data-aos="fade-up" data-aos-duration="700">
      <div className="pointer-events-none absolute -left-40 top-1/3 size-96 rounded-full bg-brand/10 blur-[120px]" aria-hidden="true"/>
      <div className="pointer-events-none absolute -right-32 bottom-0 size-80 rounded-full border-[60px] border-white/[.018]" aria-hidden="true"/>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="text-center" data-aos="fade-up">
          <div className="mb-4 flex items-center justify-center gap-3"><span className="h-px w-10 bg-brand"/><span className="text-[10px] font-black uppercase tracking-[.32em] text-brand">What we do</span><span className="h-px w-10 bg-brand"/></div>
          <h2 className="text-balance text-3xl font-black tracking-[-.045em] sm:text-4xl lg:text-5xl">Premium washing services</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/45">Specialist care, thoughtful preparation and a finish checked by hand.</p>
        </div>

        <div className="relative mt-9 grid items-stretch gap-5 lg:grid-cols-[1.08fr_.92fr] lg:gap-8" data-aos="zoom-in" data-aos-duration="800">
          <div className="group relative min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-ink shadow-[0_30px_75px_rgba(0,0,0,.28)] sm:min-h-[420px] lg:min-h-[470px]">
            <span className="absolute inset-x-0 top-0 z-30 h-1 bg-gradient-to-r from-brand via-brand to-transparent"/>
            <img src="/images/engine-service.jpg" alt="Technician carefully cleaning a vehicle engine bay with a red microfiber cloth" className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025]"/>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/10"/>
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-ink/45 px-4 py-2 text-[9px] font-black uppercase tracking-[.18em] backdrop-blur-md sm:left-7 sm:top-7"><span className="size-1.5 rounded-full bg-brand shadow-[0_0_12px_#FB495A]"/>Precision engine care</div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
              <div><p className="text-[9px] font-black uppercase tracking-[.22em] text-brand">Protected. Cleaned. Finished.</p><p className="mt-2 text-sm font-black text-white">Care for every visible detail</p></div>
              <span className="text-5xl font-black leading-none text-white/25 sm:text-6xl">03</span>
            </div>
          </div>

          <div className="relative flex flex-col justify-center overflow-hidden rounded-[2rem] border border-zinc-200/70 bg-white p-7 text-ink shadow-[0_30px_75px_rgba(0,0,0,.22)] sm:p-9 lg:p-10 xl:p-12">
            <span className="absolute inset-x-0 top-0 z-30 h-1 bg-gradient-to-r from-brand to-brand/10"/>
            <span className="absolute -right-12 -top-14 size-44 rounded-full border-[30px] border-ink/[.025]" aria-hidden="true"/>
            <div className="relative flex items-center justify-between">
              <span className="grid size-12 place-items-center rounded-2xl bg-ink text-brand shadow-lg shadow-black/15"><Icon name={service.icon} size={23}/></span>
              <span className="rounded-full border border-zinc-200 bg-surface px-3 py-2 text-[8px] font-black uppercase tracking-[.18em] text-zinc-500">From $40</span>
            </div>
            <p className="mt-7 text-[9px] font-black uppercase tracking-[.24em] text-brand">Featured service</p>
            <h3 className="mt-2 text-3xl font-black tracking-[-.04em] sm:text-4xl">{service.title}</h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">A careful engine-bay clean with sensitive areas protected, precise drying and a polished final finish.</p>
            <ul className="mt-6 grid gap-x-5 gap-y-3 text-xs font-bold text-zinc-600 sm:grid-cols-2">{['Inspect engine bay','Protect sensitive areas','Clean and agitate','Dry with precision','Dress plastic trim'].map(item=><li key={item} className="flex items-center gap-2.5"><span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand/10 text-brand"><Icon name="check" size={12}/></span>{item}</li>)}</ul>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button to="/services" variant="dark" className="!min-h-11 !px-5 !py-2.5 !text-xs">View service details</Button>
              <span className="text-[10px] font-bold text-zinc-400">Final price depends on condition</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingPreview() {
  return (
    <section className="flex min-h-[90vh] items-start bg-white pb-14 pt-8 sm:pt-10 lg:pb-14 lg:pt-7" data-aos="fade-up" data-aos-duration="700">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionTitle eyebrow="Washing price" title="Choose your plan" text="Straightforward packages for cars, SUVs and trucks. Final pricing depends on vehicle size and condition." align="center"/>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan,index)=><article key={plan.name} data-aos="fade-up" data-aos-delay={index*55} className={`relative flex flex-col overflow-hidden rounded-3xl border p-7 sm:p-9 ${plan.featured ? 'border-ink bg-ink text-white shadow-2xl lg:-translate-y-4' : 'border-zinc-200 bg-white shadow-lg shadow-black/[.04]'}`}>
            {plan.featured&&<span className="absolute right-0 top-0 rounded-bl-2xl bg-brand px-5 py-2 text-[10px] font-black uppercase tracking-widest">Most popular</span>}
            <p className="text-xs font-black uppercase tracking-[.22em] text-brand">{plan.label}</p><h3 className="mt-3 text-2xl font-black">{plan.name}</h3><div className="mt-7 flex items-start"><span className="mt-2 text-xl font-black">$</span><span className="text-6xl font-black tracking-[-.05em]">{plan.price}</span><span className="ml-2 mt-8 text-xs opacity-50">and up</span></div><p className={`mt-4 text-sm leading-6 ${plan.featured?'text-white/55':'text-zinc-500'}`}>{plan.description}</p>
            <ul className="my-8 grid gap-3">{plan.features.slice(0,5).map(f=><li key={f} className="flex gap-3 text-sm"><Icon name="check" size={16} className="shrink-0 text-brand"/>{f}</li>)}</ul><Button to="/pricing" variant={plan.featured?'primary':'dark'} className="mt-auto w-full">Plan details</Button>
          </article>)}
        </div>
      </div>
    </section>
  )
}

function Rules() {
  return (
    <section className="grid min-h-[86vh] bg-surface lg:grid-cols-2" data-aos="fade-up" data-aos-duration="700">
      <div className="flex items-start px-5 pb-14 pt-9 sm:px-12 sm:pt-11 lg:px-[max(3rem,calc((100vw-80rem)/2))] lg:pt-9" data-aos="fade-right">
        <div className="max-w-xl"><SectionTitle eyebrow="Before you visit" title="Car wash rules" text="A few important notes help us provide safe, consistent service for every customer."/>
          <ol className="mt-8 divide-y divide-zinc-200 border-y border-zinc-200">{rules.map((rule,index)=><li key={rule} data-aos="fade-up" data-aos-delay={index*45} className="flex gap-5 py-4"><span className="text-xs font-black text-brand">0{index+1}</span><span className="text-sm leading-6 text-zinc-600">{rule}</span></li>)}</ol>
          <div className="mt-8 border-l-2 border-brand pl-5"><p className="font-black">Appointments: Monday through Thursday</p><p className="mt-2 text-sm leading-6 text-zinc-500">Shampoo and carpeting services are appointment-only. <a className="font-black text-brand" href={company.phoneHref}>{company.phone}</a></p></div>
        </div>
      </div>
      <div className="relative min-h-[500px]" data-aos="fade-left"><div className="absolute inset-0 overflow-hidden"><img src="/images/car-wash.jpg" alt="Car being washed by hand" className="h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent"/></div><div className="absolute bottom-8 left-5 right-5 bg-ink p-6 text-white shadow-2xl sm:left-8 sm:right-8 lg:-left-14 lg:right-10"><p className="text-[10px] font-black uppercase tracking-[.25em] text-brand">Visit us in Houston</p><p className="mt-2 text-base font-black">{company.address}</p></div></div>
    </section>
  )
}

export default function Home() { return <><Hero/><Welcome/><Benefits/><FeaturedServices/><PricingPreview/><Rules/></> }
