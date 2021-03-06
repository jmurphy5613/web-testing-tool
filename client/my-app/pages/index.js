import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Navbar from '../components/navbar';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    minHeight: '100vh',
  },  
  title: {
    fontWeight: '500',
    color: '#ffffff',
    fontSize: '4.5rem',
    padding: '13% 0 0 0',
    fontFamily: theme.typography.fontFamily.primary,
    fontWeight: '600',
  },
  innerTitle: {
    color: theme.palette.secondary.contrastText,
    fontWeight: '600',
  },
  subTitle: {
    fontFamily: theme.typography.fontFamily.secondary,
    color: theme.palette.secondary.light,
    fontSize: '1.2rem',
    margin: '1rem 0 1rem 0'
  },
  getStartedButton: {
    backgroundColor: '#007FFF',
    color: '#ffffff',
    fontWeight: 'bold',
    '&:hover' : {
      backgroundColor: '#3038ff',
    }
  }

}));


export default function Home() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" className={classes.title}>
          The online<br/> <span className={classes.innerTitle}> test platform <br/> </span> you need for <br/> {`the `}  
            <span className={classes.innerTitle}>
              
              <Typed 
                strings={[
                  'SAT',
                  'ACT',
                  'LSAT',
                ]}
                typeSpeed={90}
                backSpeed={30}
                loop
              />
            
            </span>
        </Typography>
        <Typography variant="h5" className={classes.subTitle}>
          This platform allows you to take released versions <br/> of standarized tests online with an interactive test <br/> client to mimick the real testing enviroment.
        </Typography>
        <Button variant="contained" className={classes.getStartedButton} endIcon={ <ArrowForwardIosIcon /> }>Get Started</Button>
      </Container>
    </div>
  )
}
