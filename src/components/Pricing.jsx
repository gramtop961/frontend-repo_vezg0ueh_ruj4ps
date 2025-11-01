import React from 'react';
import { Check } from 'lucide-react';

const features = {
  Starter: ['Unlimited projects', 'Email support', 'Basic analytics'],
  Growth: ['Everything in Starter', 'Team collaboration', 'Priority support'],
  Scale: ['Everything in Growth', 'SSO & SAML', 'Dedicated success manager'],
};

function Plan({ name, price, tagline, popular = false }) {
  return (
    <div
      className={
        'relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md ' +
        (popular ? 'border-rose-300 ring-2 ring-rose-200' : 'border-slate-200')
      }
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white shadow">Most popular</span>
      )}
      <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
      <p className="mt-1 text-sm text-slate-600">{tagline}</p>
      <div className="mt-6 flex items-end gap-1">
        <span className="text-4xl font-bold text-slate-900">{price}</span>
        <span className="pb-1 text-sm text-slate-500">/mo</span>
      </div>
      <ul className="mt-6 space-y-3">
        {features[name].map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
            <Check className="h-4 w-4 text-emerald-500" /> {f}
          </li>
        ))}
      </ul>
      <a
        href="#auth"
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800"
      >
        Choose {name}
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
        <p className="mt-3 text-slate-600">Pick a plan that grows with your business. Cancel anytime.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Plan name="Starter" price="$9" tagline="Perfect for individuals" />
        <Plan name="Growth" price="$29" tagline="Best for small teams" popular />
        <Plan name="Scale" price="$99" tagline="For fast-scaling companies" />
      </div>
    </section>
  );
}
