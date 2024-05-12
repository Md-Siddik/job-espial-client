import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
// import app from "../firebase/firebase.config";

const Login = () => {

    const [user, setUser] = useState(null);
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const handleLogin = e => {
        try {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const email = form.get('email');
            const password = form.get('password');

            signIn(email, password)
                .then(result => {
                    navigate(location?.state ? location.state : '/');
                })
                .catch(error => {
                    Swal.fire({
                        title: 'Faild!',
                        text: 'Invalid Email or Password',
                        icon: 'error',
                        confirmButtonText: 'Back'
                    })
                })
        }
        catch (error) {
            console.error(error)
        }
    }
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
                navigate(location?.state ? location.state : '/');
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    title: 'Oops...!',
                    text: 'Something Went Wrong',
                    icon: 'error',
                    confirmButtonText: 'Back'
                })
            })
    }

    return (
        <div>
            <Helmet>
                <title>JobEspial | Login</title>
            </Helmet>
            <div className="w-[600px] m-auto pb-16 my-16 border-2 rounded-xl">
                <h1 className="text-3xl my-10 text-center">Login</h1>
                <form onSubmit={handleLogin} className="md:w-[500px] mx-auto p-8">
                    <div className="form-control pb-6">
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="password" required name="password" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="flex justify-center items-center gap-6 pt-4">
                    <a onClick={handleGoogleSignIn} >Login With : <span className="font-bold text-blue-500 text-lg cursor-pointer">Google</span></a>
                </div>
                <p className="text-center mt-4">Do not have any account? <Link className="font-bold text-blue-500" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;