import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Card from "../Cards/Card";

const AppliedJobs = () => {
    const allJobs = useLoaderData();
    const { user } = useContext(AuthContext);
    const appliedJobs = allJobs?.filter(job => job.applicants_email === user?.email);
    const [jobs, setJobs] = useState(appliedJobs);

    const handleCategory = filter => {
        if (filter === 'onSite') {
            const onSite = appliedJobs?.filter(job => job.job_category === 'On-Site');
            setJobs(onSite);
            console.log(onSite);
        }
        else if (filter === 'remote') {
            const remote = appliedJobs?.filter(job => job.job_category === 'Remote');
            setJobs(remote);
            console.log(remote);
        }
        else if (filter === 'hybrid') {
            const hybrid = appliedJobs?.filter(job => job.job_category === 'Hybrid');
            setJobs(hybrid);
            console.log(hybrid);
        }
        else if (filter === 'partTime') {
            const partTime = appliedJobs?.filter(job => job.job_category === 'Part-Time');
            setJobs(partTime);
            console.log(partTime);
        }
    }

    return (
        <div className="container mx-auto">
            <div className="flex justify-center">
                <details className="dropdown">
                    <summary className="m-1 btn">Job Category</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li className="text-lg" onClick={() => handleCategory('onSite')}><a>On-Site</a></li>
                        <li className="text-lg" onClick={() => handleCategory('remote')}><a>Remote</a></li>
                        <li className="text-lg" onClick={() => handleCategory('hybrid')}><a>Hybrid</a></li>
                        <li className="text-lg" onClick={() => handleCategory('partTime')}><a>Part-Time</a></li>
                    </ul>
                </details>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 py-12">
                {
                    jobs?.map(job => <Card key={job._id} job={job}></Card>)
                }
            </div>
        </div>


    );
};

export default AppliedJobs;