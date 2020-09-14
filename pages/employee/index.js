import MainLayout from "../../components/MainLayout";
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useRouter } from 'next/router'
import {fetchEmployees} from "../../redux/actions/employeeAction";
import Link from 'next/link';
import {deleteEmployeeAction} from "../../redux/actions/deleteEmployeeAction";

export default function Employees({employees:serverResponse}) {
    const router = useRouter()
    const dispatch = useDispatch();
    const [isAuth,setAuth] = useState(false)
    const {employees} = useSelector(state => state.employee);


    useEffect(()=>{
        console.log('sss')
        if(localStorage.getItem('isAuth')){
            setAuth(true)
            async function load(){
                if(employees.length === 0){
                    await dispatch(fetchEmployees())
                }
            }
            if(!serverResponse){
                load()
            }
        }else{
            router.push('/login')
        }
    },[])

    const deleteEmployee = async(id)=>{
        dispatch(deleteEmployeeAction(id))
    }

    return<>
        {isAuth && (
            <MainLayout>
                <div className={'employee-list'}>
                    <button onClick={()=>router.push('/employee/create')} className={'btn btn-primary'}>
                            Create employee
                            </button>
                    {employees && employees.map(el=>(
                        <div key={el.id}>
                            <div className={'employee-card'}>
                                <div className={'employee-img-div'}><img className={'employee-img'} src={el.profile_image ? el.profile_image : 'https://kmtf.kz/content/uploads/2018/02/no-photo-icon-22.png'}/></div>
                                <div className={'employee-info-div'}>
                                    <div>Name: <span>{el.employee_name}</span></div>
                                    <div>Salary: <span>{el.employee_salary}</span></div>
                                    <div>Age: <span>{el.employee_age}</span></div>
                                    <button className={'btn btn-primary'} onClick={()=>router.push(`/employee/${el.id}/edit`)}>Edit</button>
                                    <Link href={`/employee/${el.id}`}><button style={{marginLeft:'10px'}} className={'btn btn-primary'}>Open</button></Link>
                                    <button onClick={()=>deleteEmployee(el.id)} style={{marginLeft:'10px'}} className={'btn btn-primary'}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </MainLayout>
        )}
        <style jsx>{`
        .employee-list{
            padding:10px;
        }
        .employee-card{
            display:flex;
             margin:20px 10px;
             height:200px;
             border:1px solid #ccc
        }
        .employee-img-div{
            width:15%;
        }
        .employee-img{
            width:100%;
            height:100%;
            object-fir:cover;
        }
        .employee-info-div{
            padding:10px;
        }
        .employee-info-div div{
            margin-top:10px;
            font-size:1.5rem;
            color: red;
        }
        .employee-info-div div span{
           color: #000; 
        }
        
        `}</style>
    </>
}

// Employees.getInitialProps = async ({store,req})=>{
//     console.log('wwqweqeqweqe')
//     if(!req){
//         return {employees:null}
//     }
//     await store.dispatch(fetchEmployees())
//     return{}
// }
