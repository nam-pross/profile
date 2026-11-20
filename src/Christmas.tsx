import { useEffect, useState, type CSSProperties } from 'react'
import { createPortal } from 'react-dom'

export function Christmas() {
  const [enabled, setEnabled] = useState(() => {
    try { return localStorage.getItem('portfolio-christmas') !== 'off' } catch { return true }
  })
  useEffect(() => {
    document.documentElement.dataset.christmas = enabled ? 'on' : 'off'
    try { localStorage.setItem('portfolio-christmas', enabled ? 'on' : 'off') } catch { /* Storage is optional. */ }
    return () => { delete document.documentElement.dataset.christmas }
  }, [enabled])
  return <>
    <button className="christmas-toggle" aria-pressed={enabled} onClick={() => setEnabled(value => !value)}><span aria-hidden="true">✦</span> Noel {enabled ? 'ON' : 'OFF'}</button>
    {enabled && createPortal(<div className="christmas-decoration" aria-hidden="true">
      <div className="fairy-lights">{Array.from({ length: 22 }, (_, i) => <i key={i} style={{ '--i': i } as CSSProperties}/>)}</div>
      <div className="snowfall">{Array.from({ length: 38 }, (_, i) => <i key={i} style={{ left: `${(i * 37.7) % 100}%`, '--size': `${2 + i % 4}px`, '--duration': `${12 + i % 13}s`, '--delay': `${-i * 2.3}s`, '--drift': `${(i % 2 ? 1 : -1) * (25 + i % 60)}px` } as CSSProperties}/>)}</div>
    </div>, document.body)}
  </>
}

export function ChristmasTree() {
  return <div className="christmas-scene" role="img" aria-label="Christmas tree with glowing ornaments and presents">
    <span className="season-label">A LITTLE SEASONAL MAGIC</span>
    <svg className="christmas-tree" viewBox="0 0 360 380" fill="none" aria-hidden="true">
      <defs><linearGradient id="pine" x1="90" y1="100" x2="270" y2="300" gradientUnits="userSpaceOnUse"><stop stopColor="#51866b"/><stop offset="1" stopColor="#133e32"/></linearGradient></defs>
      <ellipse cx="180" cy="345" rx="132" ry="14" fill="#ccebd7" opacity=".08"/>
      <path d="M169 280h22v59h-22z" fill="#866347"/>
      <path d="M180 145 66 309Q180 332 294 309Z" fill="url(#pine)" stroke="#95d1a4" strokeOpacity=".25"/>
      <path d="M180 95 87 247Q180 269 273 247Z" fill="url(#pine)" stroke="#95d1a4" strokeOpacity=".3"/>
      <path d="m180 48-70 137q70 20 140 0Z" fill="url(#pine)" stroke="#95d1a4" strokeOpacity=".35"/>
      <path d="M142 128q29 30 75 17M124 200q48 38 116 18M100 274q70 37 158 14" stroke="#efd49a" strokeWidth="3" strokeLinecap="round"/>
      <path className="tree-star" d="m180 23 7 15 17 2-13 12 3 17-14-8-15 8 3-17-12-12 17-2Z" fill="#ffe3a3"/>
      {[[167,111],[203,169],[145,211],[222,238],[115,288],[182,280],[249,298],[176,232]].map(([cx,cy],i) => <circle className="tree-ornament" key={i} cx={cx} cy={cy} r={i % 2 ? 6 : 7} fill={i % 2 ? '#f4d39a' : '#e67b79'} style={{ animationDelay: `${-i * .4}s` }}/>) }
      <rect x="75" y="314" width="48" height="33" rx="4" fill="#aa4a52"/><path d="M99 314v33M75 325h48" stroke="#f4d39a" strokeWidth="5"/>
      <rect x="237" y="302" width="42" height="44" rx="4" fill="#c7ad7e"/><path d="M257 302v44M237 316h42" stroke="#fff0cb" strokeWidth="5"/>
    </svg>
    <span className="season-greeting">Merry & bright<span>A little code. A little Christmas.</span></span>
  </div>
}
