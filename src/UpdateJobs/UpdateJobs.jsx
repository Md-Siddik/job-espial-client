import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateJobs = () => {

    const [startDate, setStartDate] = useState(new Date());
    const allJobs = useLoaderData();
    const { user } = useContext(AuthContext);

    // const [getJob, setGetJob] = useState();

    // allJobs.map(job => setGetJob(job));
    const { _id, picture, job_title, user_name, user_email, job_category, salary_range, job_description, post_date, application_deadline } = allJobs;

    console.log(allJobs)

    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;

        const picture = form.picture.value;
        const job_title = form.job_title.value;
        const user_name = user?.displayName;
        const user_email = user?.email;
        const job_category = form.job_category.value;
        const salary_range = form.salary_range.value;
        const job_description = form.job_description.value;
        const post_date = form.post_date.value;
        const application_deadline = form.application_deadline.value;
        const applicants_number = 0

        const newJobs = { picture, job_title, user_name, user_email, job_category, salary_range, job_description, post_date, application_deadline, applicants_number }

        fetch(`https://job-espial-server.vercel.app/allJobs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJobs)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Great'
                    })
                }

            })
    }

    return (
        <div>
            <div className="lg:w-[1000px] m-auto pb-4 mt-16 mb-16 border-2 border-gray-500 rounded-xl">
                <h1 className="text-3xl mt-10 my-6 text-center">Update Jobs</h1>
                <form onSubmit={handleUpdate} className="md:w-full mx-auto p-8">
                    <div className="lg:flex lg:gap-6">
                        <div className="lg:w-[450px]">
                            <div className="form-control pb-2">
                                <label className="p-2">Picture URL</label>
                                <input type="text" required name="picture" defaultValue={picture} placeholder="Picture URL" className="input input-bordered border-gray-500" />
                            </div>
                            <div className="form-control pb-2">
                                <label className="p-2">Job Title</label>
                                <input type="text" required name="job_title" defaultValue={job_title} placeholder="Job_Title" className="input input-bordered border-gray-500" />
                            </div>
                            <div className="form-control pb-2">
                                <label className="p-2">User Name</label>
                                <input type="text" disabled="disabled" defaultValue={user?.displayName} name="user_Name" placeholder="User_Name" className="border-[1px] border-gray-500 p-[12px] rounded-lg" />
                            </div>
                            <div className="form-control pb-2">
                                <label className="p-2">Email</label>
                                <input type="email" disabled="disabled" defaultValue={user?.email} name="email" placeholder="User_Email" className="border-[1px] border-gray-500 p-[12px] rounded-lg" />
                            </div>
                            <div className="form-control pb-2">
                                <label className="p-2">Job Category</label>
                                {/* <input type="text" required name="job_category" placeholder="Job_Category" className="input input-bordered border-gray-500" /> */}
                                <select name="job_category" defaultValue={job_category} className="input input-bordered border-gray-500">
                                    <option value="On-Site">On-Site</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="Part-Time">Part-Time</option>
                                </select>
                            </div>
                        </div>
                        <div className="lg:w-[450px]">
                            <div className="form-control pb-2">
                                <label className="p-2">Salary Range</label>
                                <input type="text" required name="salary_range" defaultValue={salary_range} placeholder="Salary_Range" className="input input-bordered border-gray-500" />
                            </div>
                            <div className="form-control pb-2">
                                <label className="p-2">Job Description</label>
                                <input type="text" required name="job_description" defaultValue={job_description} placeholder="Job_Description" className="input input-bordered border-gray-500" />
                            </div>
                            <div className="form-control pb-2">
                                <label className="p-2">Post Date</label>
                                <DatePicker name="post_date" defaultValue={post_date} className="w-full p-3 border-[1px] border-gray-500 bg-transparent rounded-lg" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                            <div className="form-control pb-2">
                                <label className="p-2">Application Deadline</label>
                                <DatePicker name="application_deadline" defaultValue={application_deadline} className="w-full p-3 border-[1px] border-gray-500 bg-transparent rounded-lg" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                    </div>
                    <div className="form-control w-[200px] mt-6 mx-auto">
                        <input type="submit" value="Update" className="btn btn-primary rounded-full text-xl" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateJobs;