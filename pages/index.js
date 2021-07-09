import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer.js";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Samina's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/coding">
        <a>Coding</a>
      </Link>

      <Link href="/coding">
        <a>Creative</a>
      </Link>

      <Link href="/community">
        <a>Community</a>
      </Link>
    </div>
  );
}
