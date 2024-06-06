import { Box, Tabs, Tab, Typography } from '@mui/material'
import React, { useState } from 'react'
import Profile from '../userProfile';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const Setting = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const handleChange = (newValue: number) => {
        setCurrentTab(newValue);
    };


    const CustomTabPanel = (props: TabPanelProps) => {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={currentTab} onChange={(e, value)=>handleChange(value)} aria-label="basic tabs example">
                    <Tab label="Account Deatails" />
                    <Tab label="Address" />
                    {/* <Tab label="Item Three" /> */}
                </Tabs>
            </Box>
            <CustomTabPanel value={currentTab} index={0}>
                <Profile />
            </CustomTabPanel>
            <CustomTabPanel value={currentTab} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={currentTab} index={2}>
                Item Three
            </CustomTabPanel>
        </Box>

    )
}

export default Setting