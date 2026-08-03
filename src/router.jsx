import { createContext, useContext, useEffect, useState } from 'react'

const RouterContext = createContext({ pathname: '/' })

export function BrowserRouter({ children }) {
  const [pathname, setPathname] = useState(() => window.location.pathname)
  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])
  return <RouterContext.Provider value={{ pathname, setPathname }}>{children}</RouterContext.Provider>
}

export function useLocation() {
  const { pathname } = useContext(RouterContext)
  return { pathname }
}

export function Link({ to, children, className = '', onClick, ...props }) {
  const { setPathname } = useContext(RouterContext)
  const navigate = (event) => {
    onClick?.(event)
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    if (window.location.pathname !== to) window.history.pushState({}, '', to)
    setPathname(to)
  }
  return <a href={to} className={className} onClick={navigate} {...props}>{children}</a>
}

export function NavLink({ to, children, className = '', ...props }) {
  const { pathname } = useContext(RouterContext)
  const isActive = to === '/' ? pathname === '/' : pathname.startsWith(to)
  return <Link to={to} className={typeof className === 'function' ? className({ isActive }) : className} {...props}>{children}</Link>
}
