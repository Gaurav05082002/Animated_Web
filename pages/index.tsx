import Head from 'next/head'
import Emotions from './emotions'
import Eiiq from './eqiq'
import Manifesto from './manifesto'
export default function Home() {
  return (
    <>
      <Head>
        <title>Responsive Navbar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></link>
      </Head>
      <Emotions/>
      <Eiiq/>
      <Manifesto/>

      <Emotions/>
      
    </>
  )
}
