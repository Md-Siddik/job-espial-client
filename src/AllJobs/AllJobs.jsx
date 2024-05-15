import { useLoaderData } from "react-router-dom";
import JobsData from "../JobsData/JobsData";
import { useState } from "react";

const AllJobs = () => {

    const allJobs = useLoaderData();
    const [searchJob, setSearchJob] = useState();

    const handleSearch = e => {
        e.preventDefault();
    }

    return (
        <div className="container mx-auto">
            <div className="py-10">
                <div className="join flex justify-center">
                    <div>
                        <div>
                            <input className="input input-bordered join-item" placeholder="Search" />
                        </div>
                    </div>
                    <div className="indicator">
                        <button className="btn join-item">Search</button>
                    </div>
                </div>
            </div>
            <table className="w-full mb-10">
                <tr className="text-left text-xl">
                    <th>Job Title</th>
                    <th>Job Posting Date</th>
                    <th>Application Deadline</th>
                    <th>Salary Range</th>
                </tr>
                {
                    allJobs.map(job => <JobsData key={job._id} job={job}></JobsData>)
                }
            </table>
        </div>
    );
};

export default AllJobs;