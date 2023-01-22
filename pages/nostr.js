import Head from "next/head"
import Link from "next/link"

const Daisy = () => {
  return (
    <>
      <Head>
        <title>neb.lol - Daisy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="iOS and Android nostr client" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Daisy" />
        <meta property="og:image" content="https://neb.lol/daisy-og.png" />
        <meta property="og:description" content="iOS and Android nostr client" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://neb.lol/daisy-og.png" />
        <meta name="twitter:title" content="Daisy" />
      </Head>
      <nav style={{ padding: "1rem" }}>
        <Link href="/" className="home">
          b_b
        </Link>
      </nav>
      <main style={{ padding: "3rem" }}>
        <h1>Daisy</h1>
        <h2>iOS and Android nostr client</h2>

        <p style={{ marginTop: "2rem" }}>
          This is slow and buggy, but the good news is that it will only get better from here.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Follow me on <a href="https://twitter.com/neb_b">Twitter</a> or{" "}
          <a href="https://snort.social/p/npub1e0usfsrs9gmpjywyd4un0xn22q4u80gtf3tdy5ufuckna0620kuq5w732v">
            nostr
          </a>{" "}
          for updates.
        </p>

        <section>
          <h3>Builds</h3>
          <ul>
            <li>
              <a href="https://github.com/neb-b/daisy/releases/download/v0.0.4/v0.0.4.apk">APK</a>
            </li>
            <li>
              <a href="https://testflight.apple.com/join/o3njoBHt">Testflight</a>
            </li>
            <li>
              <a href="#">Google Play</a>:<div className="handle">coming soon</div>
            </li>
          </ul>
        </section>
        <section>
          <h3>Releases</h3>
          <h4>
            <a href="https://github.com/neb-b/daisy/releases/tag/v0.0.4">0.0.4</a>
          </h4>
          <h4>
            <a href="https://github.com/neb-b/daisy/releases/tag/v0.0.3">0.0.3</a>
          </h4>
          <h4>0.0.2</h4>
          <ul>
            <li>Unrelased - I screwed up the build</li>
          </ul>
          <h4>0.0.1</h4>
          <ul>
            <li>Initial release</li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default Daisy
