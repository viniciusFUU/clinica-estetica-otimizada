import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import * as S from './style'
import "./styles.css"

//Material Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

//Material Icons
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  brand: {
    width: 100,
  },
  bgAppBar: {
    backgroundColor: "#045FB4",
    borderTop: "6px solid #5882FA",
    position: 'fixed'
  },
  cusIcon: {
    fontSize: "12px",
    position: "relative",
    top: "1px"
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <AppBar className={classes.bgAppBar} position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <Link to="/" className="link-color"> Marcação </Link>
        </IconButton>
        <Typography variant="h6" className={classes.title}></Typography>

        <div>
          <Link to="/schedule" className="RightSide"> Agendados </Link>
          <Link to="/hours"  className="RightSide"> Horários Disponíveis  <ArrowForwardIosIcon className={classes.cusIcon}/> </Link>
        </div>
        
      </Toolbar>
    </AppBar>
  </div>
  )
  
}

export default Header;
