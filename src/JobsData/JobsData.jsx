import { Link } from "react-router-dom";

const JobsData = ({job}) => {
    const { _id, picture, job_title, user_name, user_email, job_category, salary_range, job_description, post_date, application_deadline, applicants_number } = job;
    return (
        <tr>
            <td>{job_title}</td>
            <td>{post_date}</td>
            <td>{application_deadline}</td>
            <td>{salary_range}$</td>
            <td>
                <Link to={`/jobDetails/${job._id}`}>
                    <button className="btn my-2">View Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default JobsData;