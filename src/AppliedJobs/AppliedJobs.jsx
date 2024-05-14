import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Card from "../Cards/Card";

const AppliedJobs = () => {
    const allJobs = useLoaderData();
    const {user} = useContext(AuthContext);
    const appliedJobs = allJobs?.filter(job => job.applicants_email === user?.email)
    console.log(appliedJobs)
    
    return (
        <div className="text-4xl">
            {
                appliedJobs.map(job => <Card key={job._id} job={job}></Card>)
            }
        </div>
    );
};

export default AppliedJobs;