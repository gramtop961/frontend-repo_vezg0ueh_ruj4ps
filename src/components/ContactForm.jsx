import React from 'react';

export default function ContactForm() {
  const [status, setStatus] = React.useState('idle');

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');

    if (!name || !email || !message) {
      setStatus('error');
      return;
    }

    // Simulate success for now (backend-ready)
    setTimeout(() => setStatus('success'), 400);
  }

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Contact us</h2>
        <p className="mt-2 text-slate-600">
          Questions about pricing, onboarding, or enterprise? Send us a message and we’ll get back
          to you.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
              placeholder="Tell us what you’re looking for"
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-600"
            >
              Send message
            </button>
            {status === 'success' && (
              <span className="text-sm text-emerald-600">Thanks! We’ll be in touch shortly.</span>
            )}
            {status === 'error' && (
              <span className="text-sm text-rose-600">Please fill out all fields.</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
