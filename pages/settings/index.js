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
                <div>settings</div>
            </MainLayout>
        )}
        </>
}