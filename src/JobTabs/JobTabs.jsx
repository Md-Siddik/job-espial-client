import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from "../Cards/Card";

const JobTabs = () => {
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

                <TabPanel>
                    <Card></Card>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
                <TabPanel>
                    <h2>All Jobs</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default JobTabs;