import Box from '@mui/material/Box';
import Menu from '../../components/Menu';
import HomeCard from './components/HomeCard';
import styles from './styles.module.css';

const Homepage = () => (
  <Box className={styles.background}>
    <Menu />
    <Box className={styles.contentContainer}>
      <HomeCard />
    </Box>
  </Box>
);

export default Homepage;
