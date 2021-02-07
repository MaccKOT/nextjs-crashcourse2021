import Head from 'next/head';

// import styles from '../styles/Home.module.css'; //local css import for module

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name='keywords' content='web development, programming' />
      </Head>

      <h1>Hello Next</h1>
    </div>
  );
}
