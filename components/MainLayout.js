import Link from "next/link";
import Head from 'next/head';
import {useEffect,useState} from 'react'
import {useDispatch} from "react-redux";
import {loginAction} from "../redux/actions/loginAction";
import {logoutAction} from "../redux/actions/logoutAction";
import {useRouter} from "next/router";

export default function MainLayout({children,title='Task #1'}) {
    const router = useRouter();
    const dispatch = useDispatch();
    const [isAuth,setAuth] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem('isAuth')){
            setAuth(true)
            dispatch(loginAction('Admin','12345'))
        }
    },[]);


    const logoutClicked = async () =>{
        await dispatch(logoutAction()).then(()=>{
            router.push('/login')
        })
    };

    return(
        <>
            <Head>
                <title>{title} | Задача №1</title>
                <meta name="keywords" content="next,javascript,nextjs,react"/>
                <meta name="description" content="this is youtube tutorial for next"/>
                <meta charSet="utf-8"/>
            </Head>
            <nav>
                <div className={'nav-container'}>
                    <Link href="/">
                        <div>Dasboards</div>
                    </Link>
                    <Link href="/settings">
                        <div>settings</div>
                    </Link>
                    <div onClick={logoutClicked}>Logout</div>

                </div>
            </nav>
            <main style={{height:'100vh'}}>
                {children}
            </main>
            <style jsx>{`
                .nav-container{
                   display:flex;
                   justify-content:space-around;
                   width:30%;
                }
                .nav-container div:hover{
                    cursor:pointer;
                    color: blue;
                }
                nav div{
                    color:#fff
                }
            `}</style>
        </>
    )
}