import React, {Component} from 'react';
import axios from "axios";
import Header from "../Header/Header";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import {Link as RouterLink} from "react-router-dom";

class SingleProduct extends Component {

    state={
        singleProduct : [],
        cartItem: 0
    };

    getProductDetails =()=>{
        var pathArray = window.location.pathname.split('/');

        axios.get('https://fakestoreapi.com/products/' +pathArray[2]).then(res=>{
            this.setState({singleProduct: res.data})
        })
    };

    addToCart=()=>{
        this.setState({cartItem: this.state.cartItem + 1})
    };

    componentDidMount() {
        this.getProductDetails();
    };

    render() {
        return (
            <div>
                <Header cartItem={this.state.cartItem}/>
                <Grid container>
                    <Grid item xs={12}>
                        {
                            this.state.singleProduct.length === 0 ?
                                <div style={{width: '100%', textAlign: "center"}}>
                                    <CircularProgress style={{ marginTop : '25%'}}/>
                                </div> :
                                <Card className="filterCard">
                                    <CardContent >
                                        <Grid>
                                            <Grid container>
                                                <Grid item xs={3} style={{padding: 10}}>
                                                    <img src={this.state.singleProduct.image} alt="" style={{width: '100%'}}/>
                                                </Grid>
                                                <Grid item xs={9}>
                                                    <div style={{padding: 20}}>
                                                        <Typography gutterBottom variant="overline" component="h2">
                                                            {this.state.singleProduct.category}
                                                        </Typography>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            {this.state.singleProduct.title}
                                                        </Typography>
                                                        <div style={{width: '70%'}}>
                                                            <Typography gutterBottom variant="body1" component="h2">
                                                                {this.state.singleProduct.description}
                                                            </Typography>
                                                        </div>
                                                        <Typography gutterBottom variant="h6" component="h2">
                                                            ₹ {this.state.singleProduct.price}
                                                        </Typography>
                                                    </div>
                                                    <div style={{padding: 10}}>
                                                        <Button
                                                            color="primary"
                                                            size="large"
                                                            component={RouterLink}
                                                            variant={"contained"}
                                                            // to={'/singleproduct/' + singleProduct.id}
                                                            onClick={event => this.addToCart(event, this.state.singleProduct.id)}
                                                        >
                                                            Add To Cart
                                                        </Button>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>

                        }
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default SingleProduct;