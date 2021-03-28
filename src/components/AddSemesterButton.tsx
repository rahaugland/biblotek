import React from "react"
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height : "100%",
      width: 500,
      position: 'relative',
      minHeight: 200,
    },
    fab: {
      position: 'fixed',
      bottom: theme.spacing(7),
      left: theme.spacing(4),
    }
  }))


export default function AddSemesterButton(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
          <RouterLink to={"/createSemester"}>
            <Fab color="primary" aria-label="add" variant="extended" className={classes.fab}>
                <AddIcon/>
                Nytt semester
            </Fab>
            </RouterLink>
        </div>

    )
}