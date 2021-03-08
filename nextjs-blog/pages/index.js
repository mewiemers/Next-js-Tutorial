import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Link href="/posts/first-post">
          <a>Next Page</a>
        </Link>
        <p>
          Ich bin eine ausgebildete Medienwissenschaftlerin M.A. aus
          Rheda-Wiedenbrück, die ihre Interessen und Kenntnisse, durch
          Weiterbildungen spezialisiert und ergänzt.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
