import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const UpdateJobs = () => {

    const allJobs = useLoaderData();
    const { user } = useContext(AuthContext);

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

        fetch(`http://localhost:5000/allJobs/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJobs)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Added Successfully',
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
                <form className="md:w-full mx-auto p-8">
                    <div className="lg:flex lg:gap-6">
                        <div className="lg:w-[450px]">
                            <div className="form-control pb-6">
                                <input type="text" required name="picture" placeholder="Picture URL" className="input input-bordered border-gray-500" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="Job Title" placeholder="job_title" className="input input-bordered border-gray-500" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" name="user_Name" placeholder="User_Name" className="input input-bordered border-gray-500" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="email" required name="email" placeholder="User_Email" className="input input-bordered border-gray-500" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="job_category" placeholder="Job_Category" className="input input-bordered border-gray-500" />
                            </div>
                        </div>
                        <div className="lg:w-[450px]">
                            <div className="form-control pb-6">
                                <input type="text" required name="salary_range" placeholder="Salary_Range" className="input input-bordered border-gray-500" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="job_description" placeholder="Job_Description" className="input input-bordered border-gray-500" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="post_date" placeholder="Job_Post_Date" className="input input-bordered border-gray-500" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="application_deadline" placeholder="Application_Deadline" className="input input-bordered border-gray-500" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="applicants_number" placeholder="Job_Applicants_Number" defaultValue={0} className="input input-bordered border-gray-500" />
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