import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const JobDetails = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const singleJob = useLoaderData();

    const { _id, picture, user_name, user_email, job_title, job_category, salary_range, job_description, post_date, application_deadline, applicants_number } = singleJob;

    const handleAppliedJobs = e => {
        e.preventDefault();

        const form = e.target;

        const applicants_name = user?.displayName;
        const resume_link = form.resume_link.value;



        const applicantDetails = { picture, job_title, user_name, user_email, job_category, salary_range, job_description, post_date, application_deadline, applicants_number: parseInt(applicants_number) + 1, resume_link, applicants_email:user.email, applicants_name }
        console.log(user_name, user.displayName)

        if (user_name != user?.displayName) {
            const currentDate = new Date(Date.now());
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1;
            const day = currentDate.getDate();
            const currentTime = [month, day, year];
            const deadline = application_deadline;
            const sliceDate = deadline.split('/');
            let applyDeadline = [];
            sliceDate.map(dates => applyDeadline.push(parseInt(dates)));

            if (currentTime[2] <= applyDeadline[2] && currentTime[0] <= applyDeadline[0]) {
                if (currentTime[0] === applyDeadline[0]) {
                    if (currentTime[1] <= applyDeadline[1]) {
                        fetch(`https://job-espial-server.vercel.app/allJobs/${_id}`, {
                            method: 'PATCH',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(applicantDetails)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.modifiedCount > 0) {
                                    Swal.fire({
                                        title: 'Success!',
                                        text: 'Applied Successfully',
                                        icon: 'success',
                                        confirmButtonText: 'Great'
                                    })
                                    navigate('/');
                                }
                            })
                    }
                    else {
                        Swal.fire({
                            title: 'Oppsss...!',
                            text: 'Application deadline is over',
                            icon: 'Error',
                            confirmButtonText: 'Back'
                        })
                        navigate('/');
                    }
                }
                else {
                    fetch(`https://job-espial-server.vercel.app/allJobs/${_id}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(applicantDetails)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'Applied Successfully',
                                    icon: 'success',
                                    confirmButtonText: 'Great'
                                })
                                navigate('/');
                            }
                        })
                }
            }
            else {
                Swal.fire({
                    title: 'Oppsss...!',
                    text: 'Application deadline is over',
                    icon: 'Error',
                    confirmButtonText: 'Back'
                })
                navigate('/');
            }

            fetch(`https://job-espial-server.vercel.app/allJobs/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(applicantDetails)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Applied Successfully',
                            icon: 'success',
                            confirmButtonText: 'Great'
                        })
                        navigate('/');
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Faild!',
                text: 'This is your job.',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            navigate('/');
        }


    }

    return (
        <div>
            <div className="container m-auto">
                <Helmet>
                    <title>Job-Espial | Details</title>
                </Helmet>

                <div className="flex border-[1px] my-24">
                    <div className="w-[45%]">
                        <div className="w-full h-full flex items-center justify-center">
                            <img className="w-full h-fit" src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className="w-[55%]">
                        <div className="p-8">
                            <h1 className="text-4xl font-bold">{job_title}</h1>
                            <div className="py-4 text-xl">
                                <p>{job_description}</p>
                            </div>
                            <div className="flex gap-16">
                                <p className="py-4 text-xl">Posting date : {post_date} </p>
                                <p className="py-4 text-xl">Application deadline : <span className="border-b-[1px] border-red-500 text-red-500">{application_deadline}</span> </p>
                            </div>
                            <div className="flex gap-2 py-4">
                                <p>Job Applicants Number : <span className="py-4 text-xl bg-green-500 dark:text-white px-6 rounded-full">{applicants_number}</span> </p>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold py-4">{salary_range}$</h1>
                            </div>
                            <div>
                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn text-xl" onClick={() => document.getElementById('my_modal_3').showModal()}>Apply</button>
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <form onSubmit={handleAppliedJobs}>
                                            <div className="form-control pb-2">
                                                <label className="p-2">User Name</label>
                                                <input type="text" disabled="disabled" defaultValue={user?.displayName} name="user_Name" placeholder="User_Name" className="border-[1px] border-gray-500 p-[12px] rounded-lg" />
                                            </div>
                                            <div className="form-control pb-2">
                                                <label className="p-2">Email</label>
                                                <input type="email" disabled="disabled" defaultValue={user?.email} name="email" placeholder="User_Email" className="border-[1px] border-gray-500 p-[12px] rounded-lg" />
                                            </div>
                                            <div className="form-control pb-2">
                                                <label className="p-2">Resume Link</label>
                                                <input type="text" required name="resume_link" placeholder="Resume_Link" className="input input-bordered border-gray-500" />
                                            </div>
                                            <div className="flex justify-center">
                                                <button className="btn btn-xl text-xl my-6">Submit Application</button>
                                            </div>
                                        </form>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;