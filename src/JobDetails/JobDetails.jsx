import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../AuthProvider/AuthProvider";

const JobDetails = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    // const handleAppliedJobs = e => {
    //     e.preventDefault();

    //     const form = e.target;

    //     const picture = form.picture.value;
    //     const job_title = form.job_title.value;
    //     const user_name = user?.displayName;
    //     const user_email = user?.email;
    //     const job_category = form.job_category.value;
    //     const salary_range = form.salary_range.value;
    //     const job_description = form.job_description.value;
    //     const post_date = form.post_date.value;
    //     const application_deadline = form.application_deadline.value;
    //     const applicants_number = form.applicants_number.value

    //     const newJobs = {picture, job_title, user_name, user_email, job_category, salary_range, job_description, post_date, application_deadline, applicants_number}

    //     fetch('http://localhost:5000/allJobs', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(newJobs)
    //     })
    //     .then(res=>res.json())
    //     .then(data => {
    //         Swal.fire({
    //             title: 'Success!',
    //             text: 'Job Added Successfully',
    //             icon: 'success',
    //             confirmButtonText: 'Great'
    //         })
        
    //     })
    // }

    return (
        <div>
            <div className="container m-auto">
                <Helmet>
                    <title>Techno-Real-Estate | Details</title>
                </Helmet>

                <div className="flex border-[1px] my-24">
                    <div className="w-[45%]">
                        <div className="w-full h-full flex items-center justify-center">
                            <img className="w-full h-fit" src="" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className="w-[55%]">
                        <div className="p-8">
                            <h1 className="text-4xl font-bold">Software Engineer</h1>
                            <div className="py-4 text-xl">
                                <p>Seeking skilled software engineer to join development team. Apply by June 11th. This post have awesome salary range and so many facilities. Apply if you are eligibal.</p>
                            </div>
                            <div className="flex gap-16">
                                <p className="py-4 text-xl">Posting date : 2024-05-11 </p>
                                <p className="py-4 text-xl">Application deadline : <span className="border-b-[1px] border-red-500 text-red-500">2024-06-11</span> </p>
                            </div>
                            <div className="flex gap-2 py-4">
                                <p>Job Applicants Number : <span className="py-4 text-xl bg-green-500 dark:text-white px-6 rounded-full">50</span> </p>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold py-4">$80,000 - $100,000</h1>
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
                                        <form>
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