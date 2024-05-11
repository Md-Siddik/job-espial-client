import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
    
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <div>
                <Helmet>
                    <title>Techno-Real-Estate | Register</title>
                </Helmet>
                <div className="w-[600px] m-auto pb-14 my-16 border-2 rounded-xl">
                    <h1 className="text-3xl my-10 text-center">Register</h1>
                    <form className="md:w-[500px] mx-auto p-8">
                        <div className="form-control pb-6">
                            <input type="text" required name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control pb-6">
                            <input type="text" required name="photo" placeholder="photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control pb-6">
                            <input type="email" required name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <div className='flex items-center gap-4 relative'>
                                <input type={showPassword ? "text" : "password"} required name="password" placeholder="password" className="input input-bordered w-full" />
                                <span className='absolute right-6' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    {
                        registerError && <p className='text-red-600'>{registerError}</p>
                    }
                    <p className="text-center mt-4">Already have an account? <Link className="font-bold text-blue-500" to="/login">Login</Link></p>
                </div>
                {/* <ToastContainer></ToastContainer> */}
            </div>
        </div>
    );
};

export default SignUp;