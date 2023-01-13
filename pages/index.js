import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>neb.lol</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ padding: "3rem" }}>
        <h1>b_b</h1>

        <section>
          <h2>Contact</h2>
          <ul>
            <li>
              <a href="https://github.com/neb-b">Github</a>:<div className="handle">@neb-b</div>
            </li>
            <li>
              <a href="https://twitter.com/neb_b">Twitter</a>:<div className="handle">@neb_b</div>
            </li>
            <li>
              <a href="https://snort.social/p/npub1e0usfsrs9gmpjywyd4un0xn22q4u80gtf3tdy5ufuckna0620kuq5w732v">
                Nostr
              </a>
              :<div className="handle">_@neb.lol</div>
            </li>
            <li>
              <a href="https://t.me/neb_b">Telegram</a>:<div className="handle">neb_b</div>
            </li>
            <li>
              <a href="mailto:nebb_bb@protonmail.com">Email</a>:<div>nebb_bb@protonmail.com</div>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
