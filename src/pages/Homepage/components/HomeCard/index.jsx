import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from './style.module.css';

const HomeCard = () => (
  <Card className={styles.card}>
    <CardContent className={styles.cardContent}>
      <Typography variant="h5" component="div">
        Slam Dunk
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
      </Typography>
    </CardContent>
    <CardActions className={styles.cardActions}>
      <Button size="large" variant='contained' className={styles.cardBtn}>
        Learn More
      </Button>
    </CardActions>
  </Card>
);

export default HomeCard;
