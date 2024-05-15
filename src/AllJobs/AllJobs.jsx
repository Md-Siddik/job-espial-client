import { useLoaderData } from "react-router-dom";
import JobsData from "../JobsData/JobsData";
import { useState } from "react";

const AllJobs = () => {

    const allJobs = useLoaderData();

    const [searchJob, setSearchJob] = useState(allJobs);

    console.log(allJobs)

    const handleSearch = e => {
        e.preventDefault();
        const inputValue = e.target.search.value;
        console.log(inputValue);
        const filterJob = allJobs?.filter(job => job?.job_title.toLowerCase().includes(inputValue.toLowerCase()));
        setSearchJob(filterJob);
    }

    return (
        <div className="container mx-auto">
            <div className="py-10">
                <form onSubmit={handleSearch} className="join flex justify-center">
                    <div>
                        <div>
                            <input className="input input-bordered join-item" name="search" placeholder="Search" />
                        </div>
                    </div>
                    <div className="indicator">
                        <button className="btn join-item">Search</button>
                    </div>
                </form>
            </div>
            <table className="w-full mb-10">
                <tr className="text-left text-xl">
                    <th>Job Title</th>
                    <th>Job Posting Date</th>
                    <th>Application Deadline</th>
                    <th>Salary Range</th>
                </tr>
                {
                    searchJob?.map(job => <JobsData key={job._id} job={job}></JobsData>)
                }
            </table>
        </div>
    );
};

export default AllJobs;