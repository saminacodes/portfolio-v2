import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer.js";

export default function Home() {
  return (
    <div className="dark:bg-grey flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Samina's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        ></link>
        <script
          src="https://kit.fontawesome.com/abfb9bf525.js"
          crossorigin="anonymous"
        ></script>
      </Head>

      <div className="flex flex-row">
        <Link href="/coding">
          <a class="dark:text-white">Coding</a>
        </Link>

        <Link href="/creative">
          <a class="dark:text-white">Creative</a>
        </Link>

        <Link href="/community">
          <a class="dark:text-white">Community</a>
        </Link>

        <Link href="/links">
          <a class="dark:text-white">Links</a>
        </Link>
      </div>
    </div>
  );
}
