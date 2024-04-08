import React, {Component} from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import {Link} from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";


export default class CreateRoomPage extends Component{

    constructor(props){
        super(props);
        this.state={
            public: true,
        };
        // Lets us have access to this keyword in functions
        this.handleCreateRoomButtonPressed = this.handleCreateRoomButtonPressed.bind(this);
        this.handlePrivacyChanged = this.handlePrivacyChanged.bind(this);
    }

    handlePrivacyChanged(e){
        this.setState({
            public: e.target.value === "true" ? true : false,
        });
    }

    handleCreateRoomButtonPressed(){
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                public: false
            })
        };
        fetch("/api/create/", requestOptions)
            .then((response) =>response.json())
            .then((data)=> console.log(data));
    }

    render(){
        return(
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component='h4' variant="h4">
                        Create a Room
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl component="fieldset">
                        <FormHelperText component="div">
                            <div align="center">
                                Public Room
                            </div>
                        </FormHelperText>
                        <RadioGroup row defaultValue="true" onChange={this.handlePrivacyChanged}>
                            <FormControlLabel 
                                value="true" 
                                control={<Radio color="primary"/>}
                                label="Public"
                                labelPlacement="bottom"
                            /> 
                            <FormControlLabel 
                                value="false" 
                                control={<Radio color="secondary"/>}
                                label="Private"
                                labelPlacement="bottom"
                            />  
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid xs={12} align="center">
                    <Button color="primary" variant="contained" onClick={this.handleCreateRoomButtonPressed}>
                        Create Room
                    </Button>
                </Grid>
                <Grid xs={12} align="center">
                    <Button color="secondary" variant="contained" to ="/" component={Link}>
                        Back
                    </Button>
                </Grid>
            </Grid>
        );
    }
}