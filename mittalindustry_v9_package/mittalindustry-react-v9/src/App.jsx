import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, ArrowRight, Factory, Wrench, Truck, Shield, CheckCircle2, Globe } from 'lucide-react'

const CONTACT = {
  person: "Dipanshu Mittal",
  phonePretty: "76684 20528",
  phoneRaw: "+917668420528",
  domain: "mittalindustry.in",
  email: "dipanshumittal466@gmail.com",
}

const services = [
  { icon: <Factory className='h-6 w-6' />, title: 'Industrial Solutions', desc: 'End‑to‑end digital presence for manufacturing & services brands.' },
  { icon: <Wrench className='h-6 w-6' />, title: 'Custom Web Apps', desc: 'Fast, secure, SEO‑ready apps with modern stacks.' },
  { icon: <Truck className='h-6 w-6' />, title: 'E‑Commerce & Catalogues', desc: 'Real‑product catalogues, payments, shipping integrations.' },
  { icon: <Shield className='h-6 w-6' />, title: 'Security & Compliance', desc: 'SSL, best practices, and uptime monitoring built‑in.' },
]

const products = [
  { name: 'Smart Press Machine', tag: 'New 2025', link: '#', img: 'https://images.unsplash.com/photo-1581091012184-7c54f819d0c2?q=80&w=800&auto=format&fit=crop' },
  { name: 'Carbon Steel Parts', tag: 'Bestseller', link: '#', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop' },
  { name: 'Industrial IoT Panel', tag: 'In Stock', link: '#', img: 'https://images.unsplash.com/photo-1581094651225-6b8b5d7e2e9b?q=80&w=800&auto=format&fit=crop' },
]

const Logo = () => (
  <div className='flex items-center gap-2'>
    <img src='/src/assets/logo.svg' alt='Mittal Industry' className='h-9 w-9 rounded-2xl' />
    <div className='leading-tight'>
      <div className='text-lg font-semibold tracking-wide'>Mittal Industry</div>
      <div className='text-xs text-zinc-400'>{CONTACT.domain}</div>
    </div>
  </div>
)

const Badge = ({ children }) => (
  <span className='px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs border border-emerald-500/30'>{children}</span>
)

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className='py-16 md:py-24'>
    <div className='max-w-7xl mx-auto px-4'>
      <div className='mb-10 md:mb-14'>
        <h2 className='text-2xl md:text-4xl font-semibold tracking-tight'>{title}</h2>
        {subtitle && <p className='text-zinc-400 mt-2 max-w-2xl'>{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
)

const Header = () => (
  <header className='sticky top-0 z-40 border-b border-white/5 backdrop-blur-md bg-zinc-950/60'>
    <div className='max-w-7xl mx-auto px-4 h-16 flex items-center justify-between'>
      <Logo />
      <nav className='hidden md:flex items-center gap-6 text-sm text-zinc-300'>
        <a href='#services' className='hover:text-white'>Services</a>
        <a href='#products' className='hover:text-white'>Products</a>
        <a href='#about' className='hover:text-white'>About</a>
        <a href='#contact' className='hover:text-white'>Contact</a>
      </nav>
      <div className='flex items-center gap-2'>
        <a href={`tel:${CONTACT.phoneRaw}`} className='btn-solid hidden sm:inline-flex'>
          <Phone className='h-4 w-4'/><span>Call {CONTACT.phonePretty}</span>
        </a>
        <a href='#contact' className='btn-ghost'>
          <ArrowRight className='h-4 w-4'/><span>Enquire</span>
        </a>
      </div>
    </div>
  </header>
)

const Hero = () => (
  <div className='relative overflow-hidden'>
    <div className='absolute inset-0 pointer-events-none opacity-20' aria-hidden>
      <div className='hero-glow' />
    </div>
    <div className='max-w-7xl mx-auto px-4 pt-16 md:pt-24 pb-16 md:pb-24'>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='max-w-3xl'>
        <Badge>Model V9 — 2025 Update</Badge>
        <h1 className='mt-4 text-4xl md:text-6xl font-bold tracking-tight'>Build a modern industrial brand online.</h1>
        <p className='mt-4 text-lg text-zinc-400'>
          We craft fast, secure, and elegant websites & commerce for manufacturers and service businesses. Optimized for SEO, conversions, and scale.
        </p>
        <div className='mt-8 flex flex-wrap gap-3'>
          <a href={`tel:${CONTACT.phoneRaw}`} className='btn-solid'><Phone className='h-5 w-5'/><span>Call {CONTACT.phonePretty}</span></a>
          <a href={`https://wa.me/${CONTACT.phoneRaw.replace('+','')}`} className='btn-outline' target='_blank' rel='noreferrer'><Globe className='h-5 w-5'/><span>WhatsApp</span></a>
          <a href='#services' className='btn-ghost'><ArrowRight className='h-5 w-5'/><span>Explore Services</span></a>
        </div>
      </motion.div>
    </div>
  </div>
)

const Services = () => (
  <Section id='services' title='Services' subtitle='Everything you need to launch and grow your presence.'>
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
      {services.map((s, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className='card'>
          <div className='flex items-center gap-3 text-zinc-100'>
            <div className='p-2 rounded-xl bg-white/5 border border-white/10'>{s.icon}</div>
            <h3 className='font-medium'>{s.title}</h3>
          </div>
          <p className='text-sm text-zinc-400 mt-2'>{s.desc}</p>
          <div className='flex items-center gap-2 text-xs text-zinc-400 mt-4'>
            <CheckCircle2 className='h-4 w-4'/> Audit • Design • Deploy
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
)

const Products = () => (
  <Section id='products' title='Showcase / Products' subtitle='Plug real product images and pricing here when ready.'>
    <div className='grid md:grid-cols-3 gap-4 md:gap-6'>
      {products.map((p, i) => (
        <motion.a key={i} href={p.link} target='_blank' rel='noreferrer' initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className='group overflow-hidden rounded-2xl border border-white/10 bg-white/5'>
          <div className='aspect-[4/3] overflow-hidden'>
            <img src={p.img} alt={p.name} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />
          </div>
          <div className='p-4'>
            <div className='flex items-center justify-between'>
              <h3 className='font-medium'>{p.name}</h3>
              <Badge>{p.tag}</Badge>
            </div>
            <p className='text-sm text-zinc-400 mt-1'>Replace with real photo & price.</p>
          </div>
        </motion.a>
      ))}
    </div>
  </Section>
)

const About = () => (
  <Section id='about' title='About Mittal Industry' subtitle='Quality, speed, and reliability for modern businesses.'>
    <div className='grid md:grid-cols-2 gap-6'>
      <div className='card'>
        <h3 className='font-medium'>Why choose us</h3>
        <ul className='mt-3 space-y-2 text-zinc-400 text-sm'>
          <li>• Enterprise‑grade security & performance</li>
          <li>• CMS or headless content—your choice</li>
          <li>• Integrations: payments, shipping, CRM, analytics</li>
          <li>• Dedicated support & quick iterations</li>
        </ul>
      </div>
      <div className='card'>
        <h3 className='font-medium'>Tech stack</h3>
        <ul className='mt-3 space-y-2 text-zinc-400 text-sm'>
          <li>• React/Next.js, Node, Tailwind CSS</li>
          <li>• Serverless & CDN edge deployments</li>
          <li>• SEO schema, OpenGraph, sitemaps</li>
          <li>• Image optimization and caching</li>
        </ul>
      </div>
    </div>
  </Section>
)

const Contact = () => (
  <Section id='contact' title='Contact' subtitle='We’re ready to launch your V9 site.'>
    <div className='grid md:grid-cols-2 gap-6'>
      <div className='card'>
        <div className='flex items-center gap-3'>
          <div className='p-2 rounded-xl bg-white/5 border border-white/10'><Phone className='h-5 w-5'/></div>
          <div>
            <div className='text-sm text-zinc-400'>Call / WhatsApp</div>
            <div className='font-medium'>{CONTACT.phonePretty}</div>
          </div>
        </div>
        <div className='mt-4 flex flex-wrap gap-3'>
          <a href={`tel:${CONTACT.phoneRaw}`} className='btn-solid'><Phone className='h-4 w-4'/>Call Now</a>
          <a href={`https://wa.me/${CONTACT.phoneRaw.replace('+','')}`} target='_blank' rel='noreferrer' className='btn-outline'>WhatsApp</a>
        </div>
      </div>
      <form className='card'>
        <div className='grid grid-cols-1 gap-3'>
          <div>
            <label className='text-xs text-zinc-400'>Name</label>
            <input className='inp' placeholder='Your name' defaultValue={CONTACT.person} />
          </div>
          <div>
            <label className='text-xs text-zinc-400'>Phone</label>
            <input className='inp' placeholder='Phone number' defaultValue={CONTACT.phonePretty} />
          </div>
          <div>
            <label className='text-xs text-zinc-400'>Email</label>
            <input className='inp' placeholder='you@company.com' defaultValue={CONTACT.email} />
          </div>
          <div>
            <label className='text-xs text-zinc-400'>Message</label>
            <textarea className='inp min-h-[100px]' placeholder='Tell us about your project' />
          </div>
          <button type='button' className='btn-solid w-full'>Send Enquiry</button>
          <p className='text-[11px] text-zinc-500'>Submitting is demo‑only here. Hook this to your form endpoint or email.</p>
        </div>
      </form>
    </div>
  </Section>
)

const Footer = () => (
  <footer className='border-t border-white/5'>
    <div className='max-w-7xl mx-auto px-4 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
      <Logo />
      <div className='text-sm text-zinc-400'>© {new Date().getFullYear()} Mittal Industry • Contact: {CONTACT.person} — {CONTACT.phonePretty}</div>
      <div className='flex items-center gap-2 text-xs'>
        <Badge>Model V9</Badge>
        <span className='text-zinc-500'>2025 Update</span>
      </div>
    </div>
  </footer>
)

export default function App(){
  return (
    <div className='min-h-screen bg-zinc-950 text-zinc-100'>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
      <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' rel='stylesheet' />
      <Header />
      <div className='max-w-7xl mx-auto px-4 pt-4 text-xs text-zinc-400'>
        <span>Domain: mittalindustry.in • Email: dipanshumittal466@gmail.com</span>
      </div>
      <Hero />
      <Services />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
