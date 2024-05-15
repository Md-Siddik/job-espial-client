import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from "../Cards/Card";
import { useEffect, useState } from 'react';

const JobTabs = () => {

    const [allJobs, setAllJobs] = useState([]);

    useEffect(() => {
        fetch('https://job-espial-server.vercel.app/allJobs')
            .then(res => res.json())
            .then(data => setAllJobs(data))
    }, [])

    console.log(allJobs);

    const onSite = allJobs?.filter(job => job?.job_category === 'On-Site');
    const remote = allJobs?.filter(job => job?.job_category === 'Remote');
    const hybrid = allJobs?.filter(job => job?.job_category === 'Hybrid');
    const partTime = allJobs?.filter(job => job?.job_category === 'Part-Time');
    return (
        <div className='container mx-auto'>
            <Tabs>
                <TabList className='text-xl'>
                    <Tab>On Site</Tab>
                    <Tab>Remote</Tab>
                    <Tab>Hybrid</Tab>
                    <Tab>Part Time</Tab>
                    <Tab>All Jobs</Tab>
                </TabList>

                <div className='py-14'>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                            {
                                onSite.map(job => <Card key={job._id} job={job}></Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                            {
                                remote.map(job => <Card key={job._id} job={job}></Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                            {
                                hybrid.map(job => <Card key={job._id} job={job}></Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                            {
                                partTime.map(job => <Card key={job._id} job={job}></Card>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                            {
                                allJobs.map(job => <Card key={job._id} job={job}></Card>)
                            }
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default JobTabs;