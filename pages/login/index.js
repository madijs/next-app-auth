import {updateUsername} from "../../redux/actions/updateUsername";
import {updatePassword} from "../../redux/actions/updatePassword";
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "../../redux/actions/loginAction";
import {useRouter} from "next/router";
import {useEffect, useState} from "react"

export default function Login() {
    const router = useRouter();
    const dispatch = useDispatch();
    const {username} = useSelector(state => state.login);
    const {password} = useSelector(state => state.login);
    const {error} = useSelector(state => state.login);
    const [isAuth,setAuth] = useState(true)


    useEffect(()=>{
       if(localStorage.getItem('isAuth')){
           router.push('/')
       }else {
           setAuth(false)
       }
    },[])

    const usernameChange = async (e) => {
        await dispatch(updateUsername(e.target.value))
    };

    const passwordChange =  async (e) => {
        await dispatch(updatePassword(e.target.value))
    };

     const signInClicked = async (e) => {
        e.preventDefault();
        await dispatch(loginAction(username,password)).then(()=>{
            router.push('/')
        })

    }


    return <>
        {!isAuth && (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <form className="form-signin">
                        <img className="mb-4" src="https://media.kasperskydaily.com/wp-content/uploads/sites/92/2015/12/06023401/passwords-10x10-featured.jpg" alt="" width="300" height="200"/>
                        <h1 style={{textAlign:'center'}} className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label
                            htmlFor="inputEmail"
                            className="sr-only">
                            Email address
                        </label>
                        <input
                            onChange={(e)=>usernameChange(e)}
                            type="text"
                            id="userName"
                            className="form-control"
                            placeholder="Username"
                            value={username}
                            required autoFocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input
                            onChange={(e)=>passwordChange(e)}
                            type="password"
                            id="inputPassword"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            required />
                        <button onClick={signInClicked} className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        <p className={'error-msg'}>{error}</p>
                        <p style={{textAlign:'center'}} className="mt-5 mb-3 text-muted">&copy; _madibikamalov</p>
                    </form>
                </div>
            </div>
        )}
        <style jsx>{`
                .fadeInDown{
                    height:100%;
                    background-color:#17002D;
                }
                #formContent{
                    display: flex;
                    align-items: center;
                    height: 100%;         
                }
                .form-signin{
                    border:1px solid #fff;
                    border-radius: 5px;
                    box-shadow:1px 1px 5px 4px #000;
                    background-color:white;
                }
                .bd-placeholder-img {
                    font-size: 1.125rem;
                    text-anchor: middle;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
                .error-msg{
                    color:red;
                }

                @media (min-width: 768px) {
                    .bd-placeholder-img-lg {
                    font-size: 3.5rem;
                }
            }
        `}
        </style>
    </>
}
