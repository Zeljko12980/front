import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function Pizza({ pizzaObj,handleAddToCart}) {
    function handleAddToCart(pizzaObj)
    {

    }
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={pizzaObj.photoName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pizzaObj.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {pizzaObj.ingredients}
          </Typography>
          <Typography gutterBottom color='secondary' variant="h5" component="div">
                    {pizzaObj.price} KM
                </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to Cart</Button>
        
        </CardActions>
      </Card>
    );
  }