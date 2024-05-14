import { Link } from "react-router-dom";

const MyJob = ({job}) => {

    const {_id, job_title, salary_range, post_date, application_deadline } = job;

    return (
        <tr>
            <td>{job_title}</td>
            <td>{post_date}</td>
            <td>{application_deadline}</td>
            <td>{salary_range}$</td>
            <td className="flex gap-2 py-2">
                <Link to={`/jobDetails/${_id}`}>
                    <button className="btn btn-accent">View Details</button>
                </Link>
                <Link to={'/updateJobs'}>
                    <button className="btn btn-info">Update</button>
                </Link>
                <button className="btn btn-error">Delete</button>
            </td>
        </tr>
    );
};

export default MyJob;