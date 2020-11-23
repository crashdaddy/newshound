import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: '100px',
    fontSize: '48px',
    fontFamily:'sebneuenews'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor:'white',color:'black',fontSize:'x-large'}}>
        <Toolbar>
          <Link to='/About'>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src='dogLogo.png' style={{width:'50px'}} />
          </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
           <Link to="/" style={{color:'black',textDecoration:'none'}}>  Newshound</Link>
          </Typography>
          
          <div style={{float:'left',width:'50%',height:'50px',display:'flex',flexDirection:'row',alignContent:'space-around'}}>
           <div style={{width:'18%',backgroundColor:'#2E64A0',border:'1px solid black'}}>&nbsp;</div>
            <div style={{width:'18%',backgroundColor:'#9DC8EB',border:'1px solid black'}}>&nbsp;</div>
            <div style={{width:'18%',backgroundColor:'#9765A0',border:'1px solid black'}}>&nbsp;</div>
            <div style={{width:'18%',backgroundColor:'#CB9898',border:'1px solid black'}}>&nbsp;</div>
            <div style={{width:'18%',backgroundColor:'#CB2126',border:'1px solid black'}}>&nbsp;</div>
             </div>
      
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}