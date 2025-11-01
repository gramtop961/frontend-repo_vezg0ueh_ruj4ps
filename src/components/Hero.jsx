import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Spline canvas as background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient wash over the canvas for pastel look */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center sm:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
          <Rocket className="h-4 w-4 text-rose-500" />
          Fintech-ready SaaS Template
        </span>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
          Launch your modern, pastel-perfect SaaS
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Clean design, pricing, auth, blog, and a contact form — everything you need to ship your product with confidence.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-lg bg-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-600"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
          >
            Talk to us
          </a>
        </div>
        <p className="mt-4 text-xs text-slate-500">No credit card required. Start free.</p>
      </div>
    </section>
  );
}
