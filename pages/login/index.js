import MainLayout from "../../components/MainLayout";

export default function Login() {
    return <MainLayout>
        <div className="wrapper fadeInDown">
            <div id="formContent">
                    <form className="form-signin">
                        <img className="mb-4" src="https://media.kasperskydaily.com/wp-content/uploads/sites/92/2015/12/06023401/passwords-10x10-featured.jpg" alt="" width="300" height="200"/>
                            <h1 style={{textAlign:'center'}} className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <label htmlFor="inputEmail" className="sr-only">Email address</label>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                                   required autoFocus />
                                <label htmlFor="inputPassword" className="sr-only">Password</label>
                                <input type="password" id="inputPassword" className="form-control"
                                       placeholder="Password" required />
                                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                                    <p style={{textAlign:'center'}} className="mt-5 mb-3 text-muted">&copy; _madibikamalov</p>
                    </form>
            </div>
        </div>
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

                @media (min-width: 768px) {
                    .bd-placeholder-img-lg {
                    font-size: 3.5rem;
                }
            }
        `}
        </style>
    </MainLayout>
}
