import Button from '../components/Button'

export default function NotFound() {
  return <section className="dark-grid flex min-h-screen items-center justify-center px-5 pt-24 text-center text-white"><div><p className="text-8xl font-black text-brand">404</p><h1 className="mt-4 text-4xl font-black">This page missed the turn.</h1><p className="mt-4 text-white/50">Let’s get you back to the wash.</p><Button to="/" className="mt-8">Return home</Button></div></section>
}
