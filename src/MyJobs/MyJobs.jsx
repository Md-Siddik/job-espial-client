import { Link } from "react-router-dom";

const MyJobs = () => {

    return (
        <div>
            <div className="flex border-[1px]">
                <div className="w-[45%] max-h-[250px]">
                    <div className="w-full h-full flex lists-center justify-center">
                        <img className="w-full h-full" src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div className="w-[55%]">
                    <div className="p-8">
                        <h1 className="text-2xl font-bold">{item_name}</h1>
                        <div className="flex gap-16 text-xl my-4">
                            <p>{stockStatus}</p>
                            <p>Customization : </p>
                        </div>
                        <div className="flex gap-48 pb-4">
                            <h1 className="text-2xl font-bold">$50000</h1>
                            <p className="text-2xl">/5</p>
                        </div>
                        <div className="flex lg:gap-8">
                            <Link to={`/update`}>
                                <button className="btn btn-primary text-xl">Update</button>
                            </Link>
                            <button className="btn btn-error text-xl">Delete</button>
                            <Link to={`/artCraft`}>
                                <button className="btn btn-success text-xl">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyJobs;