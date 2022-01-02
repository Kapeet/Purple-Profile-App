import styles from "../styles";
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Typography } from "@mui/material";

const profilePicture = 'https://media-exp1.licdn.com/dms/image/C4E03AQEBENQniwUFRQ/profile-displayphoto-shrink_800_800/0/1634727235412?e=1646870400&v=beta&t=gnEt5pCzbpnSFegEuClH9wcjXQ_IqaKV8Cl_okUpKT0'
const Profile = () => {
    return (
        <Card>
            <CardContent>
                <img src={profilePicture} style={styles.profileImg} className="App-logo" alt="logo" />
                <Typography variant="body2">Itamar Hamo</Typography>
                <Typography variant="subtitle2">itamar.hamo01@gmail.com</Typography>
            </CardContent>
        </Card>
        // <div style={styles.profilePicture}>
        //         <p>
        // </div>
    )
}

export default Profile;