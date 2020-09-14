import MainLayout from "../../components/MainLayout";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useEffect, useState} from 'react'
import {loginAction} from "../../redux/actions/loginAction";


export default function Index() {
    const router = useRouter()
    const dispatch = useDispatch();
    const [isAuth,setAuth] = useState(false)
    const {token} = useSelector(state => state.login.token);

    useEffect(()=>{
        if(!localStorage.getItem('isAuth')){
            router.push('/login')
        }else{
            setAuth(true)
            dispatch(loginAction('Admin','12345'))
        }
    },[])

    return <>
        {isAuth && (
            <MainLayout>
                <div className={'settings'}>Settings Page</div>
            </MainLayout>
        )}
        <style jsx>{`
        .settings{
                margin: 0 auto;
                text-align: center;
                align-items: center;
                display: flex;
                height: 100%;
                justify-content: center;
                font-size: 4rem;
            }
            `}
        </style>
        </>
}