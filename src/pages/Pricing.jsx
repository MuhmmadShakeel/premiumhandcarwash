import { useState } from 'react'
import Button from '../components/Button'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { plans, rules } from '../data/site'

const vehicles = [{name:'Car',image:'/images/car-01.png',extra:0},{name:'SUV',image:'/images/car-02.png',extra:10},{name:'Truck',image:'/images/car-03.png',extra:15}]

export default function Pricing() {
  const [vehicle,setVehicle]=useState(0)
  return <>
    <PageHero centered eyebrow="Washing price" title="A plan for every kind of clean." text="Select your vehicle type and compare thoughtfully designed packages for the care your vehicle needs." highlights={['Clear starting prices','Vehicle-based options','Premium hand care']}/>
    <section className="min-h-[88vh] bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle eyebrow="Choose your plan" title="Simple options. Premium care." text="Prices start at the amounts shown and may vary depending on size and vehicle condition." align="center"/>
        <div className="mx-auto mt-10 flex max-w-xl gap-2 rounded-2xl border border-zinc-200 bg-white p-2 shadow-sm" role="tablist" aria-label="Vehicle type">
          {vehicles.map((item,index)=><button key={item.name} onClick={()=>setVehicle(index)} className={`flex flex-1 flex-col items-center rounded-xl px-3 py-3 transition ${vehicle===index?'bg-ink text-white shadow-lg':'text-zinc-500 hover:bg-zinc-100'}`} role="tab" aria-selected={vehicle===index}><img src={item.image} alt="" className="mb-1 h-10 w-20 object-contain"/><span className="text-xs font-black uppercase tracking-wider">{item.name}</span></button>)}
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan,index)=>{
            const price=Number(plan.price)+vehicles[vehicle].extra
            return <article key={plan.name} data-aos="fade-up" data-aos-delay={index*55} className={`relative flex flex-col rounded-3xl border p-7 sm:p-9 ${plan.featured?'border-ink bg-ink text-white shadow-2xl lg:-translate-y-4':'border-zinc-200 bg-white shadow-lg shadow-black/[.04]'}`}>
              {plan.featured&&<span className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-3xl bg-brand px-5 py-2 text-[10px] font-black uppercase tracking-widest">Most popular</span>}
              <p className="text-xs font-black uppercase tracking-[.22em] text-brand">{plan.label}</p><h2 className="mt-3 text-2xl font-black">{plan.name}</h2><p className={`mt-3 text-sm leading-6 ${plan.featured?'text-white/55':'text-zinc-500'}`}>{plan.description}</p>
              <div className="mt-7 flex items-start"><span className="mt-2 text-xl font-black">$</span><span key={price} className="text-6xl font-black tracking-[-.05em]">{price}</span><span className="ml-2 mt-8 text-xs opacity-50">and up</span></div>
              <div className={`my-7 h-px ${plan.featured?'bg-white/10':'bg-zinc-200'}`}/><ul className="grid gap-4">{plan.features.map(f=><li key={f} className="flex gap-3 text-sm"><span className={`grid size-5 shrink-0 place-items-center rounded-full ${plan.featured?'bg-brand':'bg-brand/10'} text-brand ${plan.featured?'!text-white':''}`}><Icon name="check" size={13}/></span>{f}</li>)}</ul><Button to="/contact" variant={plan.featured?'primary':'dark'} className="mt-9 w-full">Book this plan</Button>
            </article>
          })}
        </div>
      </div>
    </section>
    <section className="grid min-h-[82vh] bg-white lg:grid-cols-2">
        <div className="flex items-center px-5 py-20 sm:px-12 lg:px-[max(3rem,calc((100vw-80rem)/2))]" data-aos="fade-right"><div className="max-w-xl"><SectionTitle eyebrow="Please note" title="Clear expectations before your wash." text="Final cost and service time depend on vehicle size, condition and the work requested."/><div className="mt-9 divide-y divide-zinc-200 border-y border-zinc-200">{rules.map((rule,index)=><div key={rule} data-aos="fade-up" data-aos-delay={index*45} className="flex items-center gap-4 py-5"><span className="text-xs font-black text-brand">0{index+1}</span><p className="text-sm leading-6 text-zinc-600">{rule}</p></div>)}</div></div></div>
        <div className="dark-grid relative min-h-[520px] overflow-hidden p-8 text-white sm:p-12 lg:p-16" data-aos="fade-left"><div className="absolute -bottom-14 -right-24 size-80 rounded-full bg-brand/25 blur-3xl"/><p className="relative text-xs font-black uppercase tracking-[.3em] text-brand">Need a custom quote?</p><h2 className="relative mt-5 max-w-md text-4xl font-black tracking-[-.04em]">Tell us what your car needs.</h2><img src="/images/washer.png" alt="Premium car wash service" className="absolute bottom-0 left-0 w-[150%] max-w-none translate-x-[-18%] object-contain opacity-90"/></div>
    </section>
  </>
}
