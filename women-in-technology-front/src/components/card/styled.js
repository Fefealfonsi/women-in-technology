import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import { grey } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    root: {
      width: 345,
      margin: 20
    },
    
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    enable: {
      color: purple[500]
    },
    disable: {
        color: grey[500]
      }
  }));