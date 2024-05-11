
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
                                <input type="text" required name="Job Title" placeholder="item_name" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" name="subcategory_Name" placeholder="subcategory_Name" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="stockStatus" placeholder="stockStatus" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="price" placeholder="price" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="lg:w-[450px]">
                            <div className="form-control pb-6">
                                <input type="email" required name="email" placeholder="User Email" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="name" placeholder="User Name" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="rating" placeholder="rating" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="customization" placeholder="customization" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-6">
                                <input type="text" required name="processing_time" placeholder="processing_time" className="input input-bordered" />
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    <div className="form-control pb-6">
                                <textarea name="description" required placeholder="Short description" className="input input-bordered h-28 w-full rounded-xl p-4" rows="4" cols="50"></textarea>
                            </div>
                    </div>
                    <div className="form-control w-[200px] mt-6 mx-auto">
                        <input type="submit" value="Add"  className="btn btn-primary rounded-full text-xl"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJobs;