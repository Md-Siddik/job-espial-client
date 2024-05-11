
const AddJobs = () => {
    return (
        <div>
            <div className="lg:w-[1000px] m-auto pb-24 mt-16 border-2 rounded-xl">
                <h1 className="text-3xl mt-10 my-6 text-center">Add A Jobs</h1>
                <form className="md:w-full mx-auto p-8">
                    <div className="lg:flex lg:gap-6">
                        <div className="lg:w-[450px]">
                            <div className="form-control pb-6">
                                <input type="text" required name="picture" placeholder="Picture URL" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="Job Title" placeholder="job_title" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" name="user_Name" placeholder="User_Name" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="email" required name="email" placeholder="User_Email" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="job_category" placeholder="Job_Category" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="lg:w-[450px]">
                            <div className="form-control pb-6">
                                <input type="text" required name="salary_range" placeholder="Salary_Range" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="job_description" placeholder="Job_Description" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="post_date" placeholder="Job_Post_Date" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="application_deadline" placeholder="Application_Deadline" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="applicants_number" placeholder="Job_Applicants_Number" defaultValue={0} className="input input-bordered" />
                            </div>
                        </div>
                    </div>
                    <div>

                        {/* <div className="form-control pb-6">
                            <textarea name="description" required placeholder="Short description" className="input input-bordered h-28 w-full rounded-xl p-4" rows="4" cols="50"></textarea>
                        </div> */}
                    </div>
                    <div className="form-control w-[200px] mt-6 mx-auto">
                        <input type="submit" value="Add" className="btn btn-primary rounded-full text-xl" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJobs;