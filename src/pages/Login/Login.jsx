import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from'../../../src/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';

const Login = () => {

    const {signIn}= useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

   const  handleLogin = (event) =>{
        event.preventDefault(); 
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(name, email, password);

        signIn(email, password)
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const user = {email};
            // navigate(location?.state ? location?.state : '/');
            //get access token
            axios.post('https://car-genius-server-omega.vercel.app/jwt', user,{withCredentials:true})
            .then(res => {
                console.log(res.data)
                if(res.data.succcess){
            navigate(location?.state ? location?.state : '/');

                }
            })

        })
        .catch(error =>console.error(error));




    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="w-1/2  mr-12">
                    <img src={login} alt="" />
                    </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-5xl font-bold">Login</h1>

                         <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <div>
                            <p>New to Car Genius go to 
                                <Link className='text-red-500 text-2xl ml-3' to='/signup'>SignUp</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;