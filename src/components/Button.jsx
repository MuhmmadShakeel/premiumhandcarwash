import { Link } from '../router'
import Icon from './Icon'

export default function Button({ to, href, children, variant = 'primary', className = '', icon = true }) {
  const styles = variant === 'outline'
    ? 'border border-white/25 bg-white/5 text-white hover:border-brand hover:bg-brand'
    : variant === 'dark'
      ? 'bg-ink text-white hover:bg-brand'
      : 'bg-brand text-white shadow-lg shadow-brand/20 hover:bg-brand-dark'
  const classes = `group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-bold tracking-wide transition duration-300 hover:-translate-y-0.5 ${styles} ${className}`
  const content = <>{children}{icon && <span className="grid size-7 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-1"><Icon name="arrow" size={15}/></span>}</>
  if (to) return <Link to={to} className={classes}>{content}</Link>
  return <a href={href} className={classes}>{content}</a>
}
