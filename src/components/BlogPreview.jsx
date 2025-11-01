import React from 'react';

const posts = [
  {
    title: 'Designing fintech UIs with soft pastels',
    excerpt:
      'How to balance clarity and delight in financial products using a gentle, modern palette.',
    tag: 'Design',
    date: 'Oct 2025',
  },
  {
    title: 'From MVP to scale: your SaaS roadmap',
    excerpt:
      'A pragmatic approach to validating, pricing, and onboarding your first 1,000 users.',
    tag: 'Product',
    date: 'Sep 2025',
  },
  {
    title: 'Authentication done right in 2025',
    excerpt:
      'Best practices for passwordless, SSO, and delightful sign-in flows that build trust.',
    tag: 'Engineering',
    date: 'Aug 2025',
  },
];

function PostCard({ post }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600">{post.tag}</span>
      <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-rose-600">
        {post.title}
      </h3>
      <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
      <div className="mt-4 text-xs text-slate-500">{post.date}</div>
    </article>
  );
}

export default function BlogPreview() {
  return (
    <section id="blog" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">From our blog</h2>
        <p className="mt-3 text-slate-600">Insights on design, product, and engineering.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <PostCard key={p.title} post={p} />
        ))}
      </div>
    </section>
  );
}
