
// * Cmps
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import MainNav, {links as mainNavStyles} from "./cmps/mainNav"

// * Styles
import styles from '~/styles/main.css'

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header className="flex justify-center align-stretch main-header">
          <div className="main-layout flex align-center space-between main-header-container">
              <h3 className="logo">NoteApp</h3>
            <MainNav />
          </div>
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    ...mainNavStyles()
  ]
}

// * Meta-data config
export const meta = () => {
  return [
    { charSet: 'utf-8' },
    { title: 'Note App' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1' }
  ];
};