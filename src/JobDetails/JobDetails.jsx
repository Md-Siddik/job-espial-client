import { Helmet } from "react-helmet";

const JobDetails = () => {
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
                                <button className="btn text-xl">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;