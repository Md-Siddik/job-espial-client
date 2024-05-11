import { Link } from 'react-router-dom';
import errorGif from '../assets/404.gif'

const ErrorPage = () => {
    return (
        <div className='flex justify-center mt-28'>
            <div className='relative'>
                <img src={errorGif} alt="404 Not Found" />
                <div className='flex justify-center absolute top-[86%] left-[45%]'>
                    <Link to={'/'}>
                        <button className='btn text-2xl'>Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;