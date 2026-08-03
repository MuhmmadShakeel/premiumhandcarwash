import Button from '../components/Button'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { benefits } from '../data/site'

export default function About() {
  return <>
    <PageHero centered eyebrow="About us" title="Houston car care, done by hand." text="A local team focused on the details that make your vehicle look and feel its best." highlights={['Local Houston team','Hand-finished care','Modern equipment']}/>
    <section className="flex min-h-[88vh] items-start overflow-hidden bg-white pb-14 pt-8 sm:pt-10 lg:pb-16 lg:pt-8" data-aos="fade-up" data-aos-duration="700">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14">
        <div className="group relative min-h-[460px] sm:min-h-[500px]" data-aos="fade-right" data-aos-duration="750"><div className="absolute inset-y-6 left-0 w-[84%] overflow-hidden rounded-[2rem] border border-zinc-200 shadow-[0_25px_65px_rgba(28,28,29,.12)]"><img src="/images/car-wash.jpg" alt="Careful hand washing" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025]"/><div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent"/></div><div className="absolute bottom-0 right-0 w-[68%] rounded-2xl border border-white/10 bg-ink p-6 text-white shadow-2xl sm:p-7"><span className="text-3xl font-black text-brand sm:text-4xl">100%</span><p className="mt-2 text-[10px] font-bold uppercase leading-5 tracking-[.12em] text-white/70">Focused on a careful, hand-finished result</p></div></div>
        <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="750"><SectionTitle eyebrow="Our commitment" title="Better car care for Houston." text="Premium Hand Car Wash LLC is committed to providing the best car wash experience in Houston, Texas, while having a minimal impact on our environment." titleClassName="lg:whitespace-nowrap lg:!text-[2.15rem] xl:!text-[2.45rem]"/><p className="mt-5 text-sm leading-7 text-zinc-500">We combine modern equipment with attentive hand work. That balance allows us to address the details automatic washes miss while treating paint, trim, leather and interior surfaces with the care they deserve.</p><p className="mt-4 text-sm leading-7 text-zinc-500">Whether you need a quick clean or a full detail, our goal stays the same: honest service, quality materials and a finish you are proud to drive away in.</p><Button to="/contact" className="mt-7 !min-h-11 !px-5 !py-2.5 !text-xs">Plan your visit</Button></div>
      </div>
    </section>
    <section className="dark-grid flex min-h-[82vh] items-start overflow-hidden pb-14 pt-8 text-white sm:pt-10 lg:pb-16 lg:pt-8" data-aos="fade-up" data-aos-duration="700">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8"><SectionTitle eyebrow="Our standards" title="Built around care, not shortcuts." text="The details of our approach are simple, practical and focused on your vehicle." light align="center" titleClassName="lg:whitespace-nowrap"/><div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{benefits.map((item,index)=><article key={item.title} data-aos="fade-up" data-aos-delay={index*90} className="group rounded-3xl border border-white/10 bg-white/[.04] p-7 transition duration-500 ease-out hover:-translate-y-1 hover:border-brand/35 hover:bg-white/[.07] hover:shadow-[0_24px_55px_rgba(0,0,0,.2)]"><span className="grid size-14 place-items-center rounded-2xl bg-brand text-white transition-transform duration-500 group-hover:scale-110"><Icon name={item.icon} size={27}/></span><h2 className="mt-8 text-xl font-black">{item.title}</h2><p className="mt-3 text-sm leading-7 text-white/50">{item.text}</p></article>)}</div></div>
    </section>
  </>
}
