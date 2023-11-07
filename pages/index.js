import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Walking About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-zinc-700 text-white">
          <img src="/logo.png" alt="Walking About Logo" />

          <p>
            We're taking a bit of a break but we'll be back, bigger and better at some point in the future.
          </p>
          <p>
            Thank you for visiting the site.
          </p>
          <p>
            To keep up to date on walks that I've been doing, <a href="https://www.instagram.com/scottbrown_14/">feel free to follow me on Instagram</a>.
          </p>
        </div>
      </main>
    </div>
  )
}
