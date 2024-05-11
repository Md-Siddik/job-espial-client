
const UpdateJobs = () => {
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