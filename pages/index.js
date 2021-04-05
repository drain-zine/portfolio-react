import Head from 'next/head'


import  Link  from "next/link";

export default function Home() {
  return(
    <main className="lander page">
        <div className="ml-24 mt-24 relative z-20">
            <h1>Tom Stannett</h1>
            <Link href="/Design">
              <a><h1 className="link ml-24">Design</h1></a>
            </Link>
            <h1 className="link ml-16">Art</h1>
            <Link href="/Contact"><a><h1 className="link ml-8">Contact</h1></a></Link>
        </div>

        <div className="videoContainer absolute z-0">
            <video autoPlay loop muted>
                <source src="/assets/video/red.mov" type="video/mp4"></source>
            </video>
        </div>
    </main>
  )
}
