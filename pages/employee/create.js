import MainLayout from "../../components/MainLayout";
import {useState} from "react";
import {createNewEmployee} from "../../redux/actions/createEmployeeAction";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";

export default function Create() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [salary,setSalary] = useState('')

    const createEmployee = async (e) => {
        e.preventDefault()
        await dispatch(createNewEmployee(name,salary,age)).then(()=>{
            router.push('/employee')
        })
        setName('')
        setAge('')
        setSalary('')
    }

    return(
        <MainLayout>
            <div>
                <input onChange={(e)=>setName(e.target.value)} className="form-control" type="text" placeholder="Enter name"/>
                <input onChange={(e)=>setSalary(e.target.value)} className="form-control" type="text" placeholder="Enter salary"/>
                <input onChange={(e)=>setAge(e.target.value)} className="form-control" type="text" placeholder="Enter age"/>
                <button onClick={createEmployee} type="submit" className="btn btn-secondary mb-2">Create!!!</button>
            </div>
        </MainLayout>
    )
}