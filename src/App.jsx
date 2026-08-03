import { useEffect } from 'react'
import AOS from 'aos'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { useLocation } from './router'

const titles = {
  '/': 'Premium Hand Car Wash LLC | Houston, TX',
  '/services': 'Car Wash & Detailing Services | Premium Hand Car Wash',
  '/pricing': 'Car Wash Pricing | Premium Hand Car Wash',
  '/about': 'About Us | Premium Hand Car Wash LLC',
  '/contact': 'Contact & Appointments | Premium Hand Car Wash',
}

export default function App() {
  const location = useLocation()
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 28, easing: 'ease-out-cubic', anchorPlacement: 'top-bottom', disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches })
  }, [])
  useEffect(() => { document.title = titles[location.pathname] || 'Premium Hand Car Wash LLC'; setTimeout(() => AOS.refresh(), 80) }, [location.pathname])

  const pages = { '/': <Home/>, '/services': <Services/>, '/pricing': <Pricing/>, '/about': <About/>, '/contact': <Contact/> }
  return <div className="min-h-screen overflow-x-hidden"><ScrollToTop/><Navbar/><main>{pages[location.pathname] || <NotFound/>}</main><Footer/></div>
}
