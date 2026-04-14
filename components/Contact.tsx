export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-8 py-24">
      <h2 className="text-3xl font-bold text-gray-900">Get in touch</h2>
      <p className="mt-4 text-lg text-gray-600">
        I&apos;m open to new opportunities and collaborations. Feel free to reach out.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="mailto:hello@rachelmccarthy.io"
          className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          Email me
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-gray-400 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-gray-400 transition-colors"
        >
          LinkedIn
        </a>
      </div>
      <footer className="mt-24 text-sm text-gray-400">
        © {new Date().getFullYear()} Rachel McCarthy
      </footer>
    </section>
  );
}
