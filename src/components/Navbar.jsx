import styles from '../styles';
import { Avatar } from '@shopify/polaris'
const Navbar = () => {
    return (
        <div style={styles.nav}>
            <img style={styles.logo} src="/Purple.png" alt="PURPLE" />
            <div style={styles.avatar}>
                <Avatar customer name="Itamar" />
            </div>
        </div>
    )
};

export default Navbar;