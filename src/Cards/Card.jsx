import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const Card = ({ job }) => {

    // <motion.div
    //     initial={{ opacity: 0, scale: 0.5 }}
    //     animate={{ opacity: 1, scale: 1 }}
    //     transition={{ duration: 0.5 }}
    // />

    const { _id, picture, job_title, user_name, user_email, job_category, salary_range, job_description, post_date, application_deadline, applicants_number } = job;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <div className="container mx-auto">
                <div data-aos="zoom-in" className="w-[350px] bg-base-100 border-[1px] border-solid h-full">
                    <figure className="h-[220px] bg-gray-300">
                        <img src={picture} alt="image" className="w-full h-full" />
                    </figure>
                    <div className="card-body">
                        <div className="w-full text-left">
                            <h2 className="card-title text-2xl pb-4 flex items-start">{job_title}</h2>
                            <p>Posted By : {user_name}</p>
                            <p className="py-2">Job Category : <span className="bg-green-500 text-white px-2 rounded-xl">{job_category}</span></p>
                            <div className="w-full flex justify-between text-lg py-2">
                                <span>Posting Date</span>:<span>{post_date}</span>
                            </div>
                            <div className="w-full flex justify-between text-lg py-2">
                                <span>Application Deadline</span>:<span className="border-b-[1px] border-red-500 text-red-500">{application_deadline}</span>
                            </div>
                        </div>
                        <div className="text-left">
                            <p>Applicants Number : {applicants_number}</p>
                        </div>
                        <div className="w-full text-xl font-bold">
                            <span>Salary : {salary_range}$</span>
                        </div>
                        <div className="flex m-auto gap-14 text-xl font-bold py-2">
                            <Link to={`/jobDetails/${_id}`}>
                                <button className="btn text-lg">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;