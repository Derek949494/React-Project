import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';


const ProductSlider = () => {
    const responsive = {
        LargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const productData = [
        {
            id: 1,
            imageurl: 'https://media.istockphoto.com/id/1211524213/photo/cup-of-coffee-latte-isolated-on-white-background-with-clipping-path.jpg?s=612x612&w=0&k=20&c=wtynuvbZfC2Nmx4xRJEX7Y2DwAVqrIn3DlAipI9ACD4=',
            name: 'Latte',
            price: '5.99',
            description: 'Latte'
        },
        {
            id: 2,
            imageurl: 'https://img.freepik.com/premium-photo/cup-coffee-isolated-white-background_97567-388.jpg',
            name: 'Espresso',
            price: '5.99',
            description: 'Espresso'
        },
        {
            id: 3,
            imageurl: 'https://static4.depositphotos.com/1000873/286/i/600/depositphotos_2869813-stock-photo-coffee-cup.jpg',
            name: 'Hot Coffee',
            price: '5.99',
            description: 'Hot coffee'
        },
        {
            id: 4,
            imageurl: 'https://t4.ftcdn.net/jpg/03/44/62/43/360_F_344624387_WK1tj8kzTfbj8wstwFxxbUghYcTQXPbu.jpg',
            name: 'Iced Coffee',
            price: '5.99',
            description: 'Iced Coffee'
        },
        {
            id: 5,
            imageurl: 'https://static5.depositphotos.com/1002941/394/i/600/depositphotos_3940235-stock-photo-cup-of-black-tea.jpg',
            name: 'Tea',
            price: '5.99',
            description: 'Tea'
        },
        {
            id: 6,
            imageurl: 'https://us.123rf.com/450wm/bullltus/bullltus1904/bullltus190400200/121079701-croissants-on-isolated-white-background.jpg?ver=6',
            name: 'Croissants',
            price: '5.99',
            description: 'Croissant'
        },
        {
            id: 7,
            imageurl: 'https://media.istockphoto.com/id/155653155/photo/bagel.jpg?s=612x612&w=0&k=20&c=5zgRR2K5bb5rKTNCAgTUEPgzUiVJ6mn1vORghj6wv28=',
            name: 'Bagels',
            price: '5.99',
            description: 'Bagels'
        },
        {
            id: 8,
            imageurl: 'https://media.istockphoto.com/id/108583950/de/foto/muffin.jpg?s=612x612&w=0&k=20&c=9xAPppOmIBJbL2LT_QbuVk0HzK0CLt4t9zf-_IMc6kY=',
            name: 'Muffins',
            price: '5.99',
            description: 'Muffins'
        },
        {
            id: 9,
            imageurl: 'https://media.istockphoto.com/id/465575161/photo/cinnamon-rolls.jpg?s=612x612&w=0&k=20&c=rx-WDUfDFsP2va9mJdj2pCqGexXaRCwctqc7nwYWOQc=',
            name: 'Cinnamon Roll',
            price: '5.99',
            description: 'Cinnamon Roll'
        },
      ]

      const product = productData.map((item) => 
      <Product 
      name={item.name} 
      url={item.imageurl} 
      price={item.price} 
      description={item.description} 
      />
      ); 

  return (
    <Carousel responsive={responsive}>{product}</Carousel> 
  )
}

export default ProductSlider

