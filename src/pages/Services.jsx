import Icon from '../components/Icon'
import PageHero from '../components/PageHero'

const careServices = [
  { icon: 'drops', number: '01', title: 'Contactless Washing', text: 'We use top of the line equipment to protect your vehicle.' },
  { icon: 'shield', number: '02', title: 'Safety Materials', text: 'We use the best safety materials we can to protect your vehicle for years to come.' },
  { icon: 'wand', number: '03', title: 'Modern Equipment', text: 'Our modern equipment will get you in and out fast, while having your vehicle spot clean.' },
  { icon: 'sparkles', number: '04', title: 'Extensive Cleaning', text: 'Our team goes over and beyond to have your vehicle looking like it is brand new.' },
]

export default function Services() {
  return <>
    <PageHero centered eyebrow="Our services" title="Care for every part of your car." text="Professional hand washing, detailing and restorative cleaning tailored to your vehicle's needs." highlights={['Hand wash','Interior detailing','Finish protection']}/>
    <section className="flex min-h-[100svh] items-center overflow-hidden py-14 sm:py-16 lg:py-12" data-aos="fade-up" data-aos-duration="700">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <div className="mb-4 flex items-center justify-center gap-3"><span className="h-px w-9 bg-brand"/><span className="text-[10px] font-black uppercase tracking-[.3em] text-brand">Premium care</span><span className="h-px w-9 bg-brand"/></div>
          <h2 className="text-balance text-3xl font-black leading-tight tracking-[-.04em] text-ink sm:text-4xl lg:text-5xl">The standards behind every clean.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-500">Professional care built around protection, modern equipment and close attention to every visible detail.</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {careServices.map((service,index)=><article key={service.title} data-aos="fade-up" data-aos-delay={index*70} className="group relative min-h-[280px] overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-[0_14px_38px_rgba(28,28,29,.05)] transition-[transform,background-color,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:border-brand/40 hover:bg-[#1C1C1D] hover:shadow-[0_26px_60px_rgba(28,28,29,.22)] sm:p-7">
            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-brand/60 to-transparent"/>
            <span className="absolute -bottom-16 -right-16 size-40 rounded-full border-[28px] border-brand/0 transition-all duration-700 ease-out group-hover:scale-110 group-hover:border-brand/[.06]" aria-hidden="true"/>
            <div className="flex items-start justify-between">
              <span className="grid size-13 place-items-center rounded-2xl border border-brand/15 bg-brand/[.08] text-brand transition-[transform,background-color,color,border-color,box-shadow] duration-500 ease-out group-hover:scale-110 group-hover:border-brand group-hover:bg-brand group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand/20"><Icon name={service.icon} size={24}/></span>
              <span className="text-sm font-black tracking-[.15em] text-zinc-300 transition-colors duration-500 group-hover:text-brand/45">{service.number}</span>
            </div>
            <div className="mt-10 h-px w-10 bg-brand/40 transition-all duration-500 ease-out group-hover:w-16 group-hover:bg-brand"/>
            <h3 className="relative mt-5 text-xl font-black tracking-[-.025em] text-ink transition-colors duration-500 group-hover:text-white">{service.title}</h3>
            <p className="relative mt-3 text-sm leading-6 text-zinc-500 transition-colors duration-500 group-hover:text-white/55">{service.text}</p>
          </article>)}
        </div>
      </div>
    </section>
    <section className="overflow-hidden py-12 sm:py-14 lg:py-16" data-aos="fade-up" data-aos-duration="700">
      <div className="mx-auto grid w-full max-w-7xl items-stretch gap-6 px-5 sm:px-8 lg:grid-cols-2 lg:gap-9">
        <div className="group relative h-[500px] overflow-hidden rounded-[2rem] border border-zinc-200 shadow-[0_24px_65px_rgba(28,28,29,.12)] sm:h-[540px] lg:h-[560px]" data-aos="fade-right">
          <img src="/images/car-wash.jpg" alt="Professional exterior car wash" className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025]"/>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-ink/10"/>
          <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-ink/45 px-4 py-2 text-[9px] font-black uppercase tracking-[.18em] text-white backdrop-blur-md sm:left-8 sm:top-8"><span className="size-1.5 rounded-full bg-brand shadow-[0_0_12px_#FB495A]"/>Our proven process</div>
          <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9 sm:right-9">
            <span className="grid size-12 place-items-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/25"><Icon name="shield" size={23}/></span>
            <p className="mt-5 text-[9px] font-black uppercase tracking-[.22em] text-brand">Paint-safe at every stage</p>
            <h2 className="mt-2 max-w-md text-2xl font-black tracking-[-.035em] text-white sm:text-3xl">Careful methods. Consistent results.</h2>
          </div>
        </div>

        <div className="relative flex h-[500px] flex-col justify-center overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_24px_65px_rgba(28,28,29,.07)] sm:h-[540px] sm:p-9 lg:h-[560px] lg:p-10 xl:p-12" data-aos="fade-left">
          <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand via-brand/45 to-transparent"/>
          <span className="absolute -right-12 -top-14 size-44 rounded-full border-[30px] border-ink/[.025]" aria-hidden="true"/>
          <div className="relative">
            <div className="mb-4 flex items-center gap-3"><span className="h-px w-9 bg-brand"/><span className="text-[10px] font-black uppercase tracking-[.3em] text-brand">How we work</span></div>
            <h2 className="text-balance text-3xl font-black leading-[1.03] tracking-[-.045em] text-ink sm:text-4xl">Thoughtful steps. A visibly better finish.</h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-500">A thorough process that treats every surface with care from inspection to final handoff.</p>

            <div className="mt-7 divide-y divide-zinc-200 border-y border-zinc-200">{[['01','Inspect','We identify every area that needs extra attention.'],['02','Clean','Vehicle-safe products lift grime without harsh shortcuts.'],['03','Finish','We dry, detail and quality-check the completed work.']].map(([n,t,d])=><div key={n} className="group/step flex items-center gap-4 py-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand/[.08] text-[11px] font-black text-brand transition duration-300 group-hover/step:bg-brand group-hover/step:text-white">{n}</span>
              <div><h3 className="text-sm font-black text-ink">{t}</h3><p className="mt-1 text-xs leading-5 text-zinc-500 sm:text-sm">{d}</p></div>
            </div>)}</div>
          </div>
        </div>
      </div>
    </section>
  </>
}
