export default function SectionTitle({ eyebrow, title, text, light = false, align = 'left', titleClassName = '' }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`} data-aos="fade-up">
      <div className={`mb-5 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-px w-9 bg-brand"/><span className="text-[11px] font-black uppercase tracking-[.32em] text-brand">{eyebrow}</span>
      </div>
      <h2 className={`text-balance text-3xl font-black leading-[1.08] tracking-[-.035em] sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-ink'} ${titleClassName}`}>{title}</h2>
      {text && <p className={`mt-6 max-w-xl text-base leading-7 ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-white/60' : 'text-zinc-600'}`}>{text}</p>}
    </div>
  )
}
