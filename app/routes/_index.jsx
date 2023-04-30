
// * Cmps
import { Link } from '@remix-run/react'

// * Styles
import heroStyles from '~/cmps/hero.css'

export default function Index() {
  return <main className="flex column space-evenly hero main-layout">
    <h1 className="hero-title">A better way of keeping track of your notes</h1>
    <p className="hero-paragraph">Try out early beta and never loose track of your notes again!</p>
    <div className="cta">
      <Link className="cta-btn" title="Start demo" to="/notes">Try now!</Link>
    </div>
  </main>
}

export function links() {
  return [{rel: 'stylesheet', href: heroStyles}]
}
