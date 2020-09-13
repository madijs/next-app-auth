import Link from "next/link";
import Head from 'next/head'

export default function MainLayout({children,title='Task #1'}) {
    return(
        <>
            <Head>
                <title>{title} | Задача №1</title>
                <meta name="keywords" content="next,javascript,nextjs,react"/>
                <meta name="description" content="this is youtube tutorial for next"/>
                <meta charSet="utf-8"/>
            </Head>
            <nav style={{backgroundColor:'#fff'}} className="navbar navbar-expand-lg">
                <Link href="/">
                    <a className="navbar-brand">Dashboard</a>
                </Link>
                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/settings"><a className="nav-link">settings</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/login"><a className="nav-link">login</a></Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main style={{height:'100vh'}}>
                {children}
            </main>
            <style jsx>{`
                nav a{
                    color:#17002D
                }
            `}</style>
        </>
    )
}