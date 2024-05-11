
const AllJobs = () => {
    return (
        <div>
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
                <tr>
                    <td>Software Engineer</td>
                    <td>2024-05-11</td>
                    <td>2024-06-11</td>
                    <td>$80,000 - $100,000</td>
                    <td>
                        <button className="btn">View Details</button>
                    </td>
                </tr>
                <tr>
                    <td>Software Engineer</td>
                    <td>2024-05-11</td>
                    <td>2024-06-11</td>
                    <td>$80,000 - $100,000</td>
                    <td>
                        <button className="btn">View Details</button>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default AllJobs;