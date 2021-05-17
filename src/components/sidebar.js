import { useState } from 'react';
import { Divider, Drawer } from 'antd';
import 'antd/dist/antd.css';


export default function Sidebar() {

    const [open, setOpen] = useState(true);


    return (
        <Drawer visible={open} onClose={() => { setOpen(!open) }}>
            item
            <Divider />
            item
            <Divider />
        </Drawer>
    )
}