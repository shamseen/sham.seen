import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

export default function Sidebar() {
    return (
        <Drawer variant="persistent" open={true}>
            item
            <Divider />
            item
            <Divider />
        </Drawer>
    )
}