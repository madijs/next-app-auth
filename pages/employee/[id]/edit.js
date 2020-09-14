import MainLayout from "../../../components/MainLayout";
import {useState,useEffect} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {fetchEmployees} from "../../../redux/actions/employeeAction";
import {updateEmployeeAction} from "../../../redux/actions/updateEmployeeAction";
import axios from "axios";

export default function Edit({employees:serverResponse}) {
    const {employees} = useSelector(state => state.employee);
    console.log(employees)
    const [name,setName] = useState(employees.employee_name)
    const [age,setAge] = useState(employees.employee_age)
    const [salary,setSalary] = useState(employees.employee_salary)
    const router = useRouter();
    const dispatch = useDispatch();


    useEffect(()=>{
        if(localStorage.getItem('isAuth')) {
            async function load(){
                if(employees.length != 0){
                    let element = employees.filter(el => el.id == router.query.id)
                    setName(element[0].employee_name)
                    setSalary(element[0].employee_salary)
                    setAge(element[0].employee_age)
                }else{
                    axios.get(`${process.env.DUMMY_API}/employees`).then(res=>{
                        let element = res.data.data.filter(el => el.id == router.query.id)
                        setName(element[0].employee_name)
                        setSalary(element[0].employee_salary)
                        setAge(element[0].employee_age)
                        dispatch(fetchEmployees())
                    })
                }

            }
            if(!serverResponse){
                load()
            }
        }else{
            router.push('/login')
        }
    },[])

    const updateEmployee = async () =>{
        await dispatch(updateEmployeeAction(name,salary,age,router.query.id)).then(res=>{
            router.push('/employee')
        })
    }

    return(
        <MainLayout>
            <div>
                <input onChange={(e)=>setName(e.target.value)} value={name? name: ''} className="form-control" type="text" placeholder="Enter name"/>
                <input onChange={(e)=>setSalary(e.target.value)} value={salary? salary: ''} className="form-control" type="text" placeholder="Enter salary"/>
                <input onChange={(e)=>setAge(e.target.value)} value={age ? age: ''} className="form-control" type="text" placeholder="Enter age"/>
                <button onClick={updateEmployee} type="submit" className="btn btn-secondary mb-2">Update!!!</button>
            </div>
        </MainLayout>
    )
}

// Edit.getInitialProps = async ({store,req})=>{
//     console.log('wwqweqeqweqe')
//     if(!req){
//         return {employees:null}
//     }
//     await store.dispatch(fetchEmployees())
//     return{}
// }