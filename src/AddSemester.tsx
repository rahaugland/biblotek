import React, { useState } from "react"
import { Grid, Paper, FormControlLabel, Typography, makeStyles, Theme, createStyles, TextField, Button } from "@material-ui/core"
import NavBar from "./components/NavBar"
import { add, collection } from "typesaurus";
import { Semester } from "../Types";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        Typography: {
            marginTop: "15px",
        },
        GridContainer: {
            margin: "auto",
            marginTop: "20px",
            marginBottom: "15px",
        },
        PaperContainer :{
            margin: "auto",
            marginTop : "15px",
            marginBottom : "10px",
            width : "60% "
        },
        TextField: {
            marginTop : "15px",
            
        }

    })
)
export default function AddSemester() {
    const classes = useStyles();

    let [semesterName, setSemesterName] = useState("")
    

    function submit(){
        const semesters = collection<Semester>('semesters')
        add(semesters, 
            {
                id: "",
                name: semesterName,
                year: 2021
            })  
    }
    return (
        <div>
            <NavBar />
            <Paper variant="outlined" elevation={3} className={classes.PaperContainer}>
            <Grid item lg={5}  xs={11} className={classes.GridContainer}>
                <form autoComplete="off">
                    <Typography variant="h4" className={classes.Typography} >
                        Opprett nytt semester
                    </Typography>
                    <Grid className={classes.GridContainer}>
                    <Typography variant="h5" className={classes.Typography}>
                        Tittel på semester
                    </Typography>
                    <TextField
                        className={classes.TextField}
                        variant="outlined"
                        label={"tittel"}
                        color="primary"
                        value={semesterName}
                        onChange={(e) => setSemesterName(e.target.value)}/>
                    </Grid> 
                </form>
                <Button variant="contained" color="primary" onClick={submit}>
                    Opprett
                </Button>
            </Grid>
            </Paper>
        </div>
    )
}