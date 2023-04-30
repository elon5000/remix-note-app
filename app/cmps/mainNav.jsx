
// * Cmps
import { NavLink } from '@remix-run/react'

// * Styles
import mainNavStyles from '~/cmps/main-nav.css'

export default function MainNav() {
    return <nav className="flex space-between align-center main-nav">
        <ul>
            <li className="main-nav-item">
                <NavLink to="/">Home</NavLink>
            </li>
        </ul>
        <ul>
            <li className="main-nav-item">
                <NavLink to="/notes">My Notes</NavLink>
            </li>
        </ul>
    </nav>
}

export function links() {
    return [{rel: 'stylesheet', href: mainNavStyles}]
}