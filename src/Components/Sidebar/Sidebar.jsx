import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {
    faBars,
    faMagnifyingGlass,
    faChartSimple,
    faUser,
    faArrowUpFromBracket,
    faX,
    faRectangleList
} from '@fortawesome/free-solid-svg-icons'
import { OpenSideBar } from './OpenSidebar'
import { CloseSidebar } from './CloseSidebar'



export const Sidebar = () => {

    const [open, setOpen] = React.useState(0)
    const [openAlert, setOpenAlert] = React.useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => {
        setIsDrawerOpen(false);
        // console.log(isDrawerOpen)
    }
    // console.log(isDrawerOpen)


    return (
            // <OpenSideBar/>
            
            isDrawerOpen ? <OpenSideBar close={closeDrawer} /> :
            <CloseSidebar open={openDrawer}/>
    )
}