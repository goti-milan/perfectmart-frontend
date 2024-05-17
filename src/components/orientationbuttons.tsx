import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';

const OrienattionButtons = () => {
    const [view, setView] = React.useState('list');

    const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
        setView(nextView);
    };
    return (
        <ToggleButtonGroup
            orientation="horizontal"
            value={view}
            exclusive
            onChange={handleChange}
        >
            <ToggleButton value="list" aria-label="list">
                <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="module" aria-label="module">
                <ViewModuleIcon />
            </ToggleButton>
            <ToggleButton value="quilt" aria-label="quilt">
                <ViewQuiltIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default OrienattionButtons