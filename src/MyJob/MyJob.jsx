import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyJob = ({job}) => {

    const {_id, job_title, salary_range, post_date, application_deadline } = job;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`job-espial-server.vercel.app/allJobs/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Art has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

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
                <Link to={`/updateJobs/${_id}`}>
                    <button className="btn btn-info">Update</button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-error text-xl">Delete</button>
            </td>
        </tr>
    );
};

export default MyJob;