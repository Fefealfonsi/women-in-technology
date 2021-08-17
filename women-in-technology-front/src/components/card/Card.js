import React from 'react';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useStyles } from './styled';


export  function ReviewCard (props) {
  const classes = useStyles();

const [expanded, setExpanded] = React.useState(false);
    const [favorite, setFavorite] = React.useState(false);

    const handleExpandClick = (id) => {
      
        setExpanded(!expanded)
      

      console.log("ID1",id,)
    };
     const handleFavoriteClick = () => {
      // const checkId = props.list.some((iten)=> {return id===iten.id, console.log("iten.id", iten.id)})
      // console.log("ID",id, "checkId",checkId)
      // if(checkId){
        setFavorite(!favorite)
        //  }
    };
  

  return (
    <Card className={classes.root} key={props.id}>
      <CardHeader
        
        title={props.women.name}
        subheader={props.women.birthDate}
      />
      <CardMedia
        className={classes.media}
        image={props.women.photo}
        
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.women.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
          <FavoriteIcon  className={favorite?classes.enable:classes.disable}/>
        </IconButton>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]:expanded,
          })}
          onClick={()=>handleExpandClick(props.id)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph><b>Breve história:</b></Typography>
          <Typography paragraph>
            {props.women.history}
          </Typography>
          <Typography paragraph><b>Saiba mais em:</b> <a href={props.women.reference} target="_blank">aqui</a></Typography>
          
          </CardContent>
      </Collapse>
    </Card>
  );
}
export default ReviewCard