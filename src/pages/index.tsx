import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Head from "@docusaurus/Head";
import styles from "./index.module.css";
import "./utilities-classes.css";
import data from "../data.json";
import SearchBar from "../components/SearchBar";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Head>
        <meta
          name="google-adsense-platform-account"
          content="ca-host-pub-2644536267352236"
        />
        <meta
          name="google-adsense-platform-domain"
          content="sitekit.withgoogle.com"
        />

        <link
          rel="shortcut icon"
          href="https://edevhindi.com/wp-content/uploads/2024/05/e-dev-hindi.png"
          type="image/x-icon"
        />
      </Head>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Tutorial - 5min ⏱️
            </Link>
          </div>
          <SearchBar data={data} />
        </div>
      </header>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6932757539306050"
        crossOrigin="anonymous"
      ></script>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6932757539306050"
        data-ad-slot="8736906737"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
