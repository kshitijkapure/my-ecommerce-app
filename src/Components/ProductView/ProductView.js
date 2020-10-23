import React, {Component} from 'react';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Divider} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import axios from 'axios';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import { Link as RouterLink } from 'react-router-dom';

class ProductView extends Component {

    state={
        allProducts: []
    }

    viewMore = (event, productId) => {
        event.preventDefault();
    }

    showOrderDetails =(event, value)=>{
        event.persist();
    };

    componentDidMount() {
        axios.get('https://fakestoreapi.com/products?limit=10').then(res=>{
            this.setState({allProducts: res.data})
        })
    }

    render() {
        return (
            <div>
                <Card style={{marginTop: 10}}>
                    <CardContent >
                        <Typography variant={"h6"}>
                            Showing {this.state.allProducts.length} Products
                        </Typography>
                        <Divider/>
                        <div style={{marginTop: 15}}>
                            {
                                this.state.allProducts.length===0 ?
                                    <div style={{width: '100%', textAlign: "center"}}>
                                        <CircularProgress style={{ marginTop : '25%'}}/>
                                    </div> :
                                    <Grid container>
                                        {this.state.allProducts.map(singleProduct =>
                                            <Grid item xs={3}>
                                                <Card style={{maxWidth: 345, height: 360, margin : 5}}>
                                                    <CardActionArea
                                                        component={RouterLink}
                                                        to={'/singleproduct/' + singleProduct.id}
                                                        onClick={event => this.showOrderDetails(event, singleProduct.id)}
                                                    >
                                                        <CardMedia
                                                            component="img"
                                                            alt="Contemplative Reptile"
                                                            height="170"
                                                            image={singleProduct.image}
                                                            title="Contemplative Reptile"
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="overline" component="h2">
                                                                {singleProduct.category}
                                                            </Typography>
                                                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                                                                {singleProduct.title}
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary" component="p" noWrap>
                                                                {singleProduct.description}
                                                            </Typography>
                                                            <Typography variant="h6">
                                                                ₹ {singleProduct.price}
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                    <CardActions>
                                                        <Button
                                                            color="primary"
                                                            size="small"
                                                            style={{float: "right"}}
                                                            component={RouterLink}
                                                            to={'/singleproduct/' + singleProduct.id}
                                                            onClick={event => this.showOrderDetails(event, singleProduct.id)}
                                                        >
                                                            View
                                                        </Button>
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                        )}
                                    </Grid>
                            }
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default ProductView;