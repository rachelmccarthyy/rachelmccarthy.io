# rachelmccarthy.io

**Personal portfolio site with custom visitor analytics, D3 geo visualizations, and content across essays, film photography, art, and music.**

[Live Site](https://rachelmccarthy.io)

## What It Is

A personal site built from scratch — not a template. Seven sections: About, Projects, Thinking (essays), Photos (film photography), Books, Art, and Music (playlists). The goal was to build something that reflects how I actually think about product, design, and the things I care about.

## What's Interesting Under the Hood

**Custom Analytics Stack**
I built the visitor analytics system from scratch rather than dropping in Google Analytics. Custom middleware assigns a visit_id cookie and logs visits via a fire-and-forget API call to Supabase, storing IP, path, city, region, country, lat/lon, ISP, and org data. Row-level security (RLS) is configured so only the service key can read/write.

This was a deliberate decision — I wanted to understand the full data pipeline, not just see a dashboard. It also gave me control over what gets tracked and how.

**Selective Page Tracking**
The middleware matcher only logs page visits (/, /about, /art, /books, etc.), not static assets or API routes. Intentional instrumentation — tracking what matters, not everything.

**D3 Geo Visualizations**
Using d3-geo and topojson for geographic visualization of visitor data. This was partly functional (seeing where visitors come from) and partly an excuse to learn D3.

**Image Optimization**
Next.js image optimization with remote patterns configured for external sources like OpenLibrary book covers. Small detail, but performance matters.

## Essays

The site includes published essays that demonstrate how I think about product, design, and economics:

- **The End of the Front End** — AI agents replacing UI as the product surface
- **Lemons, Cars, and the NYC Marriage Market** — Akerlof's information asymmetry applied to dating
- **Jobs to Be Done, Actually** — Practical JTBD framework application
- **Function of Design vs. Design of Function** — A distinction between design serving function and function producing design
- **Interior Design is Product Design** — Physical space as UX

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS · Supabase · D3 · Vercel

---

Built by [Rachel McCarthy](https://rachelmccarthy.io)
