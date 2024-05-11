import { Link } from "react-router-dom";

const Card = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div data-aos="zoom-in" className="w-[350px] bg-base-100 border-[1px] border-solid h-full">
                    <figure className="h-[220px] bg-gray-300">
                        <img src="" alt="image" className="w-full h-full" />
                    </figure>
                    <div className="card-body">
                        <div className="w-full text-left">
                            <h2 className="card-title text-2xl py-4 flex items-start">Graphic Designer</h2>
                            <p className="pb-4">Job Category : <span className="bg-green-500 text-white px-2 rounded-xl">Remote Job</span></p>
                            <div className="w-full flex justify-between text-lg py-2">
                                <span>Posting Date</span>:<span>2024-05-04</span>
                            </div>
                            <div className="w-full flex justify-between text-lg py-2">
                                <span>Application Deadline</span>:<span className="border-b-[1px] border-red-500 text-red-500">2024-06-04</span>
                            </div>
                            <table>
                                <tr>
                                    <td>Posting Date</td>
                                    <td>:</td>
                                    <td>2024-05-04</td>
                                </tr>
                                <tr>
                                    <td>Application Deadline</td>
                                    <td>:</td>
                                    <td>2024-06-04</td>
                                </tr>
                            </table>
                        </div>
                        <div className="text-left">
                            <p>Seeking skilled software engineer to join development team. Apply by June 11th.</p>
                        </div>
                        <div className="w-full flex gap-14 text-xl font-bold py-2">
                            <span>Salary $50,000-$70,000</span>
                        </div>
                        <div className="flex m-auto gap-14 text-xl font-bold py-2">
                            <Link>
                                {/* <Link to={`/artCraft/${item._id}`}> */}
                                <button className="btn text-lg">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;