import { useEffect, useRef, useState } from 'react'
import { profile, projects } from './portfolio'
import './App.css'
import { ProjectDemo } from './ProjectDemo'
import { projectDetails, placeholderDemoUrl } from './projectDetails'
function App() {
 const [filter, setFilter] = useState('All work')
 const [selected, setSelected] = useState<(typeof projects)[number] | null>(null)
 const dialog = useRef<HTMLDialogElement>(null)
 function show(project: (typeof projects)[number]) { setSelected(project); dialog.current?.showModal() }
 useEffect(() => {
   const elements = document.querySelectorAll('.section-heading, .project-grid article, .about-grid, .contact')
   if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
   const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } })
   }, { threshold: 0.08 })
   elements.forEach(element => { element.classList.add('reveal'); observer.observe(element) })
   return () => { observer.disconnect(); elements.forEach(element => element.classList.remove('reveal')) }
 }, [filter])
 const visible = projects.filter(p => filter === 'All work' || p.category === filter)
 return <>
 <a className="skip" href="#main">Skip to content</a>
 <header className="wrap"><a className="brand" href="#home" aria-label="Home">nvn<span>.</span></a><nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav><span className="header-note">A developer's collection</span></header>
 <main id="main">
 <section id="home" className="hero wrap"><div><p className="eyebrow">{profile.name} / IT PORTFOLIO</p><h1>Curiosity.<br/>Code.<br/><span>Things that work.</span></h1><p className="intro">I work in IT, exploring the space between thoughtful interfaces, connected systems, and applied AI.</p><a className="button" href="#work">Explore my work</a><a className="text-link" href="#about">A little about me</a></div><div className="hero-art" role="img" aria-label="Abstract illustration of connected software systems"><span className="art-label">IDEAS INTO INTERFACES</span><div className="orbit"/><div className="orbit second"/><div className="code-object">&lt;<b>/</b>&gt;</div><span className="chip chip-one">Web & mobile</span><span className="chip chip-two">Applied AI</span><div className="art-footer"><span>BUILD. LEARN. ITERATE.</span><span>✳</span></div></div></section>
 <div className="stack-strip"><div className="wrap"><span>Across the stack</span>{['React','TypeScript','Python','FastAPI','React Native'].map(s => <b key={s}>{s}</b>)}</div></div>
 <section id="work" className="work wrap"><div className="section-heading"><div><p className="eyebrow">SELECTED PROJECTS</p><h2>A few things I've<br/>been working on.</h2></div><p>From reading the news to thinking a move ahead.<br/>A collection of web, mobile, and AI projects.</p></div><div className="filters" aria-label="Filter projects">{['All work','AI & Web','Mobile','Web','Backend'].map(c => <button key={c} aria-pressed={filter === c} onClick={() => setFilter(c)}>{c}</button>)}</div><p className="sr-only" aria-live="polite">{visible.length} projects shown</p><div className="project-grid">{visible.map(p => <article key={p.id}><button className={'project-art '+p.id} onClick={() => show(p)} aria-label={'View '+p.name+' details'}><span className="project-type">{p.category}</span><span className="symbol" aria-hidden="true">{p.symbol}</span><strong>{p.name}</strong><small>{p.tagline}</small><span className="view">Explore project +</span></button><div className="project-title"><h3><button onClick={() => show(p)}>{p.name}</button></h3><span>{p.category}</span></div><p>{p.description}</p><div className="tags">{p.stack.map(s => <span key={s}>{s}</span>)}</div></article>)}</div></section>
 <section id="about" className="about"><div className="wrap about-grid"><div><p className="eyebrow">BEHIND THE PROJECTS</p><h2>Always building.<br/><span>Always learning.</span></h2></div><div><p className="about-lead">Hi, I'm Nam. I like turning technical ideas into something you can interact with.</p><p>My project collection brings together user interfaces, backend services, and experiments with AI. I enjoy exploring how those pieces fit together into a useful experience.</p><div className="skills"><div><h3>Interfaces</h3><p>React · TypeScript · React Native · Expo</p></div><div><h3>Services & systems</h3><p>Python · FastAPI · Docker · API architecture</p></div><div><h3>Explorations</h3><p>News summarization · Virtual try-on · Chess analysis</p></div></div></div></div></section>
 <section id="contact" className="contact wrap"><p className="eyebrow">WHAT'S NEXT?</p><h2>Good things start<br/>with a conversation<span>.</span></h2>{profile.email ? <a className="button" href={'mailto:'+profile.email}>Let's talk</a> : <p>Contact details are coming soon.</p>}<div className="socials">{profile.github && <a href={profile.github}>GitHub</a>}{profile.linkedin && <a href={profile.linkedin}>LinkedIn</a>}</div></section>
 </main><footer className="wrap"><span>© {new Date().getFullYear()} {profile.name}</span><span>Made with curiosity & React.</span><a href="#home">Back to top</a></footer>
 <dialog ref={dialog} aria-labelledby="project-dialog-title" onClick={e => {if(e.target === dialog.current) dialog.current.close()}}>{selected && <div className="dialog-inner">
 <button className="close" autoFocus aria-label="Close project details" onClick={() => dialog.current?.close()}>×</button>
 <div className={'detail-banner '+selected.id}><span aria-hidden="true">{selected.symbol}</span><div><p className="eyebrow">PROJECT SPOTLIGHT / {selected.category}</p><h2 id="project-dialog-title">{selected.name}</h2><p>{selected.tagline}</p></div></div>
 <p className="detail-intro">{selected.description}</p><div className="tags">{selected.stack.map(s => <span key={s}>{s}</span>)}</div>
 <div className="detail-columns"><section><h3>The idea</h3><p>{projectDetails[selected.id]?.focus}</p><h3>Inside the project</h3><p>{selected.details}</p></section><section><h3>Project highlights</h3><ul>{projectDetails[selected.id]?.highlights.map(h => <li key={h}>{h}</li>)}</ul></section></div>
 <h3>How it fits together</h3><div className="architecture">{projectDetails[selected.id]?.architecture.map(a => <span key={a}>{a}</span>)}</div>
 <div className="demo-heading"><div><p className="eyebrow">TRY IT HERE</p><h3>Interactive concept demo</h3></div><span className="demo-badge">Portfolio illustration</span></div>
 <ProjectDemo key={selected.id} id={selected.id}/>
 <div className="demo-link-row"><a className="button" href={placeholderDemoUrl(selected.id)} target="_blank" rel="noopener noreferrer">Open demo link (placeholder)</a><p>This example.com URL is a placeholder, not a live application.</p></div>
 </div>}</dialog>
 </>
}
export default App

