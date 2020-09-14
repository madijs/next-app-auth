import axios from 'axios';

export const getPosts = async () => {
    return await axios.get(`${process.env.API_URL}/posts`)
        .then(res => res.data);
}

export const logIn = (username,password) => {
    if(username === "Admin" && password === "12345"){
        return true
    }else{
        return false
    }
};

export const getEmployees = async () => {
    return await axios.get(`${process.env.DUMMY_API}/employees`).then(res=>res.data.data)
};

export const getEmployee = async (id) => {
    return await axios.get(`${process.env.DUMMY_API}/employee/${id}`).then(res=>res.data.data)
};

export const createEmployee = async (name,salary,age) => {
    return await axios.post(`${process.env.DUMMY_API}/create`,{
        name,
        salary,
        age
    }).then(res=>{
        console.log(res.data.data)
        return {
            id:res.data.data.id,
            employee_name:res.data.data.name,
            employee_age:res.data.data.age,
            employee_salary: res.data.data.salary
        }
    })
};

export const updateEmployee = async (name,salary,age,id) => {
    return await axios.put(`${process.env.DUMMY_API}/update/${id}`,{
        name,
        salary,
        age
    }).then(res=>{
        return{
            id:id,
            employee_name:res.data.data.name,
            employee_salary:res.data.data.salary,
            employee_age:res.data.data.age
        }

    })
}

export const deleteEmployee = async(id) =>{
    return await axios.delete(`${process.env.DUMMY_API}/delete/${id}`).then(res=>res.data)
}