import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import BlogPreview from './components/BlogPreview';
import ContactForm from './components/ContactForm';

export default function App() {
  return (
    <div className="font-inter text-slate-900">
      {/* Pastel header bar */}
      <header className="sticky top-0 z-20 w-full border-b border-rose-100/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-rose-400 to-amber-300" />
            <span className="text-sm font-semibold">PastelPay</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 sm:flex">
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#blog" className="hover:text-slate-900">Blog</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
            <a
              id="auth"
              href="#"
              className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Sign in
            </a>
            <a
              href="#pricing"
              className="rounded-lg bg-rose-500 px-3 py-1.5 font-semibold text-white shadow-sm hover:bg-rose-600"
            >
              Start free
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Pricing />
        <BlogPreview />
        <ContactForm />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-500">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} PastelPay, Inc.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-slate-700">Privacy</a>
              <a href="#" className="hover:text-slate-700">Terms</a>
              <a href="#" className="hover:text-slate-700">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
