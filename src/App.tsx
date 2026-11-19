import { useEffect, useRef, useState } from 'react'
import { profile, projects } from './portfolio'
import { ProjectDemo } from './ProjectDemo'
import { projectDetails, placeholderDemoUrl } from './projectDetails'
import { MotionControl, TechMarquee, AmbientMotion, tiltCard, resetCard } from './Motion'

type Project = (typeof projects)[number]
const tones: Record<string, string> = {
 news: 'from-emerald-950 to-zinc-950 text-emerald-200',
 stylio: 'from-violet-950 to-zinc-950 text-violet-200',
 chess: 'from-lime-950 to-zinc-950 text-lime-200',
 cab: 'from-amber-950 to-zinc-950 text-amber-200',
 analyzer: 'from-sky-950 to-zinc-950 text-sky-200',
}
const container = 'mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16'
const eyebrow = 'text-xs font-semibold uppercase tracking-[0.22em] text-lime-300'
const primary = 'inline-flex items-center justify-center rounded-full bg-lime-300 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition hover:-translate-y-1 hover:bg-lime-200 hover:shadow-[0_8px_35px_#bef26426]'
const secondary = 'inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-zinc-200 transition hover:border-lime-300/60 hover:bg-white/5'
function Tags({ items }: { items: string[] }) {
 return <div className="flex flex-wrap gap-2">{items.map(item => <span key={item} className="rounded-md border border-white/10 bg-white/[.025] px-2.5 py-1 text-xs text-zinc-400">{item}</span>)}</div>
}
function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
 return <div className={`project-visual relative isolate flex ${large ? 'min-h-80 sm:min-h-[440px]' : 'h-64 sm:h-72'} flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${tones[project.id]}`}>
 <div className="visual-grid absolute inset-0 -z-10 opacity-30"/><div className="visual-orbit absolute h-56 w-56 rounded-full border border-current opacity-10"/><div className="absolute left-5 top-5 text-[11px] uppercase tracking-[.18em] opacity-70">{project.category} / {large ? 'Project spotlight' : 'Selected work'}</div>
 <span className="project-symbol text-7xl leading-none sm:text-8xl" aria-hidden="true">{project.symbol}</span><strong className="mt-5 font-display text-3xl tracking-tight sm:text-4xl">{project.name}</strong><span className="mt-2 px-6 text-center text-xs opacity-65">{project.tagline}</span>
 <span className="absolute bottom-5 right-5 text-xs opacity-60">{large ? 'Concept illustration' : 'View case study +'}</span></div>
}
function Home() {
 const [filter, setFilter] = useState('All work')
 const visible = projects.filter(p => filter === 'All work' || p.category === filter)
 useEffect(() => {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target) } }), { threshold: .08 })
  const elements = document.querySelectorAll('[data-reveal]')
  elements.forEach(el => { el.classList.add('reveal'); observer.observe(el) })
  return () => { observer.disconnect(); elements.forEach(el => el.classList.remove('reveal')) }
 }, [filter])
 return <>
 <section className={`${container} grid gap-14 pb-20 pt-16 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:pb-28 lg:pt-24`}>
 <div className="enter-page"><p className={eyebrow}>{profile.name} / Developer portfolio</p><h1 tabIndex={-1} className="mt-7 font-display text-5xl font-medium leading-[1.07] tracking-[-.055em] sm:text-7xl lg:text-[82px]">Ideas in mind.<br/>Code in motion.<br/><span className="shimmer-text">Built to explore.</span></h1><p className="mt-7 max-w-lg text-base leading-8 text-zinc-400">I work in IT, connecting thoughtful interfaces, backend systems, and applied AI. Here’s a look at what I’ve been building.</p><div className="mt-9 flex flex-wrap gap-3"><a className={primary} href="#/work">Explore projects</a><a className={secondary} href="#/about">Get to know me</a></div><div className="mt-10 flex items-center gap-4 text-xs text-zinc-500"><span className="h-px w-10 bg-lime-300/50"/>Web · Mobile · Applied AI</div></div>
 <div className="hero-art relative isolate grid h-[380px] place-items-center overflow-hidden rounded-3xl border border-white/10 bg-[#10150e] sm:h-[470px]" aria-label="Animated illustration of connected software systems" role="img"><div className="visual-grid absolute inset-0 -z-10"/><span className="absolute left-6 top-6 text-[10px] tracking-[.2em] text-zinc-500">FROM CONCEPT TO CODE</span><div className="hero-orbit absolute size-72 rounded-full border border-lime-300/20"/><div className="hero-orbit secondary-orbit absolute h-52 w-96 rounded-[50%] border border-lime-300/20"/><div className="code-object grid size-44 place-items-center rounded-[36px] border border-lime-200/20 bg-gradient-to-br from-[#33462b] to-[#111a0e] font-display text-7xl text-lime-200 shadow-[20px_24px_0_#bef2640c,0_25px_60px_#0008]">&lt;/&gt;</div><span className="floating-chip absolute right-5 top-24 rounded-lg border border-white/10 bg-zinc-900/90 px-4 py-2 text-xs text-lime-200">Web & mobile</span><span className="floating-chip chip-delay absolute bottom-24 left-5 rounded-lg border border-white/10 bg-zinc-900/90 px-4 py-2 text-xs text-lime-200">Applied AI</span><div className="absolute inset-x-6 bottom-5 flex items-center justify-between text-[10px] tracking-widest text-zinc-500"><span>BUILD. LEARN. ITERATE.</span><span className="spin-mark text-3xl text-lime-300">✳</span></div></div>
 </section><TechMarquee/>
 <section id="work" className={`${container} py-20 sm:py-28`}><div data-reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className={eyebrow}>The project collection</p><h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">Selected work<span className="text-lime-300">.</span></h2></div><p className="max-w-sm text-base leading-7 text-zinc-400">Different challenges. A shared curiosity.<br/>Explore the thinking behind each project.</p></div><div className="my-8 flex flex-wrap gap-2" aria-label="Filter projects">{['All work','AI & Web','Mobile','Web','Backend'].map(c => <button key={c} onClick={() => setFilter(c)} aria-pressed={filter === c} className={`rounded-full border px-4 py-2 text-sm transition ${filter === c ? 'border-lime-300 bg-lime-300 text-zinc-950' : 'border-white/10 text-zinc-400 hover:border-white/30 hover:text-white'}`}>{c}</button>)}</div><p className="sr-only" aria-live="polite">{visible.length} projects shown</p><div className="grid gap-x-8 gap-y-12 md:grid-cols-2">{visible.map(p => <article key={p.id} data-reveal><a onPointerMove={tiltCard} onPointerLeave={resetCard} onPointerCancel={resetCard} href={`#/projects/${p.id}`} className="tilt-card group block rounded-2xl" aria-label={`View ${p.name} project`}><ProjectVisual project={p}/></a><div className="mb-3 mt-5 flex items-center justify-between gap-3"><h3 className="font-display text-2xl"><a href={`#/projects/${p.id}`} className="transition hover:text-lime-300">{p.name}</a></h3><span className="text-xs text-zinc-500">{p.category}</span></div><p className="mb-4 text-base leading-7 text-zinc-400">{p.description}</p><Tags items={p.stack}/></article>)}</div></section>
 <section id="about" className="border-y border-white/10 bg-zinc-900/40"><div data-reveal className={`${container} grid gap-10 py-20 lg:grid-cols-2 lg:gap-24`}><div><p className={eyebrow}>Behind the projects</p><h2 className="mt-5 font-display text-4xl leading-tight tracking-tight sm:text-5xl">Always building.<br/><span className="text-zinc-500">Always learning.</span></h2></div><div><p className="text-xl leading-8">Hi, I'm Nam. I like turning technical ideas into something you can interact with.</p><p className="mt-5 leading-8 text-zinc-400">My project collection brings together user interfaces, backend services, and experiments with AI. I enjoy exploring how those pieces fit together into a useful experience.</p><div className="mt-8 space-y-5">{[['Interfaces','React · TypeScript · React Native · Expo'],['Services & systems','Python · FastAPI · Docker · API architecture'],['Explorations','News summarization · Virtual try-on · Chess analysis']].map(([title,body]) => <div key={title} className="border-t border-white/10 pt-5 transition hover:translate-x-2"><h3 className="text-sm font-medium">{title}</h3><p className="mt-2 text-sm text-zinc-500">{body}</p></div>)}</div></div></div></section>
 <section id="contact" data-reveal className={`${container} py-24 text-center`}><p className={eyebrow}>What's next?</p><h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight tracking-tight sm:text-6xl">Good things start<br/>with a conversation<span className="text-lime-300">.</span></h2>{profile.email ? <a className={`${primary} mt-8`} href={`mailto:${profile.email}`}>Let's talk</a> : <p className="mt-7 text-zinc-500">Contact details are coming soon.</p>}<div className="mt-6 flex justify-center gap-6 text-sm text-lime-300">{profile.github && <a href={profile.github}>GitHub</a>}{profile.linkedin && <a href={profile.linkedin}>LinkedIn</a>}</div></section>
 </>
}
function ProjectPage({ project }: { project: Project }) {
 const detail = projectDetails[project.id]!
 const next = projects[(projects.findIndex(p => p.id === project.id) + 1) % projects.length]!
 return <div className={`${container} enter-page pb-24 pt-10 sm:pt-16`}>
 <nav aria-label="Breadcrumb" className="mb-12 flex flex-wrap gap-3 text-sm text-zinc-500"><a href="#/work" className="hover:text-lime-300">All projects</a><span>/</span><span aria-current="page" className="text-zinc-200">{project.name}</span></nav>
 <div className="mb-10 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end"><div><p className={eyebrow}>{project.category} / Project case study</p><h1 tabIndex={-1} className="mt-4 font-display text-5xl tracking-[-.05em] sm:text-7xl">{project.name}<span className="text-lime-300">.</span></h1><p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">{project.description}</p></div><div className="lg:justify-self-end"><Tags items={project.stack}/><p className="mt-4 text-xs text-zinc-500">Development project · Concept demo included</p></div></div>
 <ProjectVisual project={project} large/>
 <div className="grid gap-12 py-16 lg:grid-cols-[1.6fr_1fr] lg:gap-20"><div><p className={eyebrow}>Overview</p><h2 className="mt-4 font-display text-3xl leading-snug tracking-tight">{detail.focus}</h2><p className="mt-6 leading-8 text-zinc-400">{project.details}</p></div><aside className="rounded-2xl border border-white/10 bg-white/[.025] p-7"><h2 className="font-display text-xl">Project highlights</h2><ul className="mt-6 space-y-5">{detail.highlights.map(h => <li key={h} className="flex gap-3 text-sm leading-6 text-zinc-400"><span className="text-lime-300" aria-hidden="true">✳</span>{h}</li>)}</ul></aside></div>
 <section className="border-t border-white/10 py-12"><p className={eyebrow}>Under the hood</p><h2 className="mb-7 mt-4 font-display text-3xl">How it fits together</h2><div className="grid gap-4 sm:grid-cols-3">{detail.architecture.map(a => <div key={a} className="rounded-xl border border-white/10 bg-zinc-900/60 p-6 text-center text-sm text-zinc-300">{a}</div>)}</div></section>
 <section className="py-8"><div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><p className={eyebrow}>Try it here</p><h2 className="mt-3 font-display text-3xl">Interactive concept demo</h2></div><span className="rounded-full border border-lime-300/20 bg-lime-300/5 px-3 py-1.5 text-xs text-lime-300">Portfolio illustration</span></div><ProjectDemo key={project.id} id={project.id}/><div className="mt-7 flex flex-wrap items-center gap-5"><a className={secondary} href={placeholderDemoUrl(project.id)} target="_blank" rel="noopener noreferrer">Open demo link (placeholder)</a><p className="max-w-sm text-xs leading-6 text-zinc-500">This example.com link is a placeholder.<br/>The interactive preview above is a local illustration.</p></div></section>
 <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-10"><a className={secondary} href="#/work">Back to all projects</a><a className="group text-right" href={`#/projects/${next.id}`}><span className="text-xs uppercase tracking-widest text-zinc-500">Next project</span><span className="mt-2 block font-display text-2xl transition group-hover:text-lime-300">{next.name}</span></a></div>
 </div>
}
function App() {
 const [route, setRoute] = useState(() => location.hash.slice(1) || '/')
 const main = useRef<HTMLElement>(null)
 const firstRender = useRef(true)
 useEffect(() => { const update = () => setRoute(location.hash.slice(1) || '/'); window.addEventListener('hashchange',update); return () => window.removeEventListener('hashchange', update) }, [])
 const project = route.startsWith('/projects/') ? projects.find(p => `/projects/${p.id}` === route) : undefined
 const isHome = ['/', '/work', '/about', '/contact'].includes(route)
 useEffect(() => {
  document.title = project ? `${project.name} — ${profile.name}` : isHome ? `${profile.name} — Developer Portfolio` : 'Project not found — Portfolio'
  const section = isHome && route !== '/' ? document.getElementById(route.slice(1)) : null
  if (section) section.scrollIntoView({ behavior: 'instant' })
  else window.scrollTo({top:0, behavior:'instant'})
  if (!firstRender.current) main.current?.focus({preventScroll:true})
  firstRender.current = false
 }, [route, project, isHome])
 return <><AmbientMotion/><a href="#main" onClick={e => { e.preventDefault(); main.current?.focus() }} className="fixed left-4 top-4 z-50 -translate-y-32 rounded-lg bg-lime-300 p-3 text-black focus:translate-y-0">Skip to content</a><header className="sticky top-0 z-30 border-b border-white/[.06] bg-zinc-950/85 backdrop-blur-xl"><div className={`${container} flex min-h-20 flex-wrap items-center justify-between gap-4 py-4`}><a href="#/" className="font-display text-3xl font-semibold tracking-[-.08em]" aria-label="Portfolio home">nvn<span className="text-lime-300">.</span></a><nav aria-label="Main navigation" className="flex gap-5 text-sm text-zinc-400 sm:gap-8"><a href="#/work" className="hover:text-lime-300">Work</a><a href="#/about" className="hover:text-lime-300">About</a><a href="#/contact" className="hover:text-lime-300">Contact</a></nav><MotionControl/></div></header>
 <main ref={main} id="main" tabIndex={-1} className="outline-none">{project ? <ProjectPage key={project.id} project={project}/> : isHome ? <Home/> : <section className={`${container} py-32 text-center`}><h1 className="font-display text-5xl">Project not found.</h1><p className="my-6 text-zinc-400">This project link is not in the collection.</p><a className={primary} href="#/work">Explore projects</a></section>}</main><footer className="border-t border-white/10"><div className={`${container} flex flex-wrap justify-between gap-4 py-7 text-xs text-zinc-500`}><span>© {new Date().getFullYear()} {profile.name}</span><span>Built with React & Tailwind CSS.</span><a href="#/" className="hover:text-lime-300">Home</a></div></footer></>
}
export default App
