import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const OrienattionButtons = ({ productViewType, setProductViewType }: any) => {

    const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
        setProductViewType(nextView);
    };
    return (
        <ToggleButtonGroup
            orientation="horizontal"
            value={productViewType}
            exclusive
            onChange={handleChange}
        >
            <ToggleButton value="module" aria-label="module">
                <ViewModuleIcon />
            </ToggleButton>
            <ToggleButton value="list" aria-label="list">
                <ViewListIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default OrienattionButtons