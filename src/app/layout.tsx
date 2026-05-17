import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Malaria Diagnosis System",
    template: "%s | AI Malaria Diagnosis",
  },
  description:
    "An AI-powered system leveraging deep learning and computer vision to analyze blood smear images for rapid, accurate malaria diagnosis.",
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-lg px-4 py-3 text-base font-medium text-body transition-colors duration-200 hover:bg-accent"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex min-h-screen flex-col bg-white text-body antialiased">
        <header className="w-full bg-primary shadow-sm">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
            <Link href="/" className="text-sm font-semibold tracking-tight text-white">
              AI Malaria Diagnosis
            </Link>
            <nav className="hidden items-center gap-6 sm:flex">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/solution">Solution</NavLink>
              <NavLink href="/impact">Impact</NavLink>
            </nav>
            <MobileMenu />
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-200 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div>
                <p className="text-sm font-semibold text-body">
                  AI Malaria Diagnosis System
                </p>
                <p className="mt-1 text-xs text-muted">
                  Research Project &mdash; Leveraging deep learning for global health impact
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Link href="/solution" className="text-xs text-muted transition-colors duration-200 hover:text-primary">
                  Solution
                </Link>
                <Link href="/impact" className="text-xs text-muted transition-colors duration-200 hover:text-primary">
                  Impact
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

function MobileMenu() {
  return (
    <div className="sm:hidden">
      <details className="group relative">
        <summary className="flex cursor-pointer list-none items-center gap-1 text-sm font-medium text-white">
          Menu
          <svg className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </summary>
        <nav className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-zinc-200 bg-white p-2 shadow-lg">
          <MobileNavLink href="/">Home</MobileNavLink>
          <MobileNavLink href="/solution">Solution</MobileNavLink>
          <MobileNavLink href="/impact">Impact</MobileNavLink>
        </nav>
      </details>
    </div>
  );
}
