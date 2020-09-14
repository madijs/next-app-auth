import {useState,useEffect} from 'react'
import Link from 'next/link'
import MainLayout from "../../components/MainLayout";
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from "react-redux";
import {getEmployee} from "../../services/api";
import {viewEmployeeAction} from "../../redux/actions/viewEmployeeAction";


export default function Employee({employee:serverEmployee}) {
    const [isAuth,setAuth] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
    const {info} = useSelector(state => state.viewEmployee);


    useEffect(()=>{
        if(localStorage.getItem('isAuth')){
            setAuth(true)
            function load() {
                 dispatch(viewEmployeeAction(router.query.id))
            }
            if(!serverEmployee){
                load()
            }
        }else{
            router.push('/login')
        }
    },[])


    return(<>
            {isAuth && (
                <MainLayout>
                    {info && (
                        <div className={'view-employee-card'}>
                            <div className={'view-employee-img-div'}>
                                <img className={'view-employee-img'} src={info.profile_image ? info.profile_image : 'https://kmtf.kz/content/uploads/2018/02/no-photo-icon-22.png'}/>
                            </div>
                            <div className={'view-employee-info-div'}>
                                <div>Name: <span>{info.employee_name}</span></div>
                                <div>Salary: <span>{info.employee_salary}</span></div>
                                <div>Age: <span>{info.employee_age}</span></div>
                            </div>
                        </div>
                    )}
                    <style jsx>{`
                .view-employee-card{
                    display:flex;
                    height:30%;
                    border:1px solid red;
                    margin:10%;
                }
                .view-employee-img-div{
                    width:20%;
                }
                .view-employee-img{
                    height:100%;
                    width:100%;
                }
                .view-employee-info-div{
                    padding:10px;
                }
                .view-employee-info-div div{
                    font-size:1.5rem;
                    color: red;   
                }
                .view-employee-info-div div span{
                    color: #000;
                }
            `}
                    </style>
                </MainLayout>
            )}
        </>
    )
}
Employee.getInitialProps = async ({ store,query, req })=>{
    if(!req){
        return {employee:null}
    }
    await store.dispatch(viewEmployeeAction(query.id))
    return{}
}