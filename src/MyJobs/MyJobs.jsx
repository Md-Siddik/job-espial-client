import { useLoaderData } from "react-router-dom";
import MyJob from "../MyJob/MyJob";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyJobs = () => {
    const allJobs = useLoaderData();
    const {user} = useContext(AuthContext);
    const myJobs = allJobs.filter(job => job.user_name === user.displayName);
    console.log(user);

    return (
        <div className="container mx-auto">
            <table className="w-full my-20">
                <tr className="text-left text-xl">
                    <th>Job Title</th>
                    <th>Job Posting Date</th>
                    <th>Application Deadline</th>
                    <th>Salary Range</th>
                </tr>
                {
                    myJobs.map(job => <MyJob key={job._id} job={job}></MyJob>)
                }
            </table>
        </div>
    );
};

export default MyJobs;