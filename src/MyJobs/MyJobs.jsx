import { Link } from "react-router-dom";

const MyJobs = () => {

    return (
        <div>
            <table className="w-full my-20">
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
                    <td className="flex gap-2 py-2">
                        <Link to={'/jobDetails'}>
                            <button className="btn btn-accent">View Details</button>
                        </Link>
                        <Link to={'/updateJobs'}>
                            <button className="btn btn-info">Update</button>
                        </Link>
                        <button className="btn btn-error">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>Software Engineer</td>
                    <td>2024-05-11</td>
                    <td>2024-06-11</td>
                    <td>$80,000 - $100,000</td>
                    <td className="flex gap-2">
                        <Link to={'/jobDetails'}>
                            <button className="btn btn-accent">View Details</button>
                        </Link>
                        <Link to={'/updateJobs'}>
                            <button className="btn btn-info">Update</button>
                        </Link>
                        <button className="btn btn-error">Delete</button>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default MyJobs;