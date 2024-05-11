import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <Helmet>
                <title>Techno-Real-Estate | Login</title>
            </Helmet>
            <div className="w-[600px] m-auto pb-24 mt-16 border-2 rounded-xl">
                <h1 className="text-3xl my-10 text-center">Login</h1>
                <form onSubmit={handleLogin} className="md:w-[500px] mx-auto p-8">
                    <div className="form-control pb-6">
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered rounded-full" />
                    </div>
                    <div className="form-control">
                        <input type="password" required name="password" placeholder="password" className="input input-bordered rounded-full" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary rounded-full">Login</button>
                    </div>
                </form>
                <div className="flex justify-center gap-8 pt-4">
                    <button onClick={handleGoogleSignIn} className="btn text-2xl">
                        <FaGoogle></FaGoogle>
                    </button>
                    <button onClick={handleGithubSignIn} className="btn text-2xl">
                        <FaGithub></FaGithub>
                    </button>
                </div>
                <p className="text-center mt-4">Do not have any account? <Link className="font-bold text-blue-500" to="/register">Register</Link></p>
            </div>
            {/* <ToastContainer></ToastContainer> */}
        </div>
    );
};

export default Login;