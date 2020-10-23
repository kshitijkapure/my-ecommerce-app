import React, {Component} from 'react';
import Header from "../Header/Header";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './dashboard.css'
import {Divider} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import ProductView from "../ProductView/ProductView";

class Dashboard extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Grid container>
                    <Grid item xs={3}>
                        <Card className="filterCard">
                            <CardContent >
                                <Typography variant={"h5"}>
                                    Filter
                                </Typography>
                                <Divider/>
                                <TextField style={{marginTop: 15}} id="outlined-basic-product" label="Search By Product" variant="outlined" fullWidth />
                                <TextField style={{marginTop: 15}} id="outlined-basic-catagory" label="Search By Catagory" variant="outlined" fullWidth />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={9}>
                        <ProductView/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;