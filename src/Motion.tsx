import { useEffect, useState, type PointerEvent } from 'react'

export function MotionControl() {
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      document.documentElement.dataset.motion = paused || preference.matches || document.hidden ? 'paused' : 'on'
    }
    update()
    preference.addEventListener('change', update)
    document.addEventListener('visibilitychange', update)
    return () => {
      preference.removeEventListener('change', update)
      document.removeEventListener('visibilitychange', update)
      delete document.documentElement.dataset.motion
    }
  }, [paused])
  return <button className="motion-toggle" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? 'Play motion' : 'Pause motion'}<span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span></button>
}

export function tiltCard(event: PointerEvent<HTMLButtonElement>) {
  if (event.pointerType !== 'mouse' || document.documentElement.dataset.motion !== 'on') return
  const card = event.currentTarget
  const rect = card.getBoundingClientRect()
  const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width))
  const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height))
  card.style.setProperty('--tilt-x', `${(0.5 - y) * 9}deg`)
  card.style.setProperty('--tilt-y', `${(x - 0.5) * 9}deg`)
  card.style.setProperty('--glow-x', `${x * 100}%`)
  card.style.setProperty('--glow-y', `${y * 100}%`)
}

export function resetCard(event: PointerEvent<HTMLButtonElement>) {
  event.currentTarget.style.removeProperty('--tilt-x')
  event.currentTarget.style.removeProperty('--tilt-y')
}

const technologies = ['React', 'TypeScript', 'Python', 'FastAPI', 'React Native', 'Docker', 'Applied AI']
export function TechMarquee() {
  return <div className="stack-strip"><div className="wrap"><span>Across the stack</span><div className="marquee-window"><div className="marquee-track">{[0, 1].map(copy => <div className="marquee-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{technologies.map(tech => <b key={tech}><i aria-hidden="true">✳</i>{tech}</b>)}</div>)}</div></div></div></div>
}

export function AmbientMotion() {
  return <div className="ambient-motion" aria-hidden="true"><div className="ambient-orb orb-green"/><div className="ambient-orb orb-blue"/><div className="floating-glyph glyph-one">{'{ }'}</div><div className="floating-glyph glyph-two">+</div><div className="floating-glyph glyph-three">&lt;/&gt;</div></div>
}
