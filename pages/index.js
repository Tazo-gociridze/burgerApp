import Header from './components/header'
import Link from 'next/link'


import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import About from './about'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='container'>
        <Header />

        <div className={styles.homePage}>
          <h1>Only delicious burgers!</h1>
          <div className={styles.image}></div>
          <p>Following your heart will eventually lead you to our burgers.</p>
          <Link href="/burgers"><button>Сhoose a burger</button></Link>
        </div>
      </div>
    </>
  )
}
