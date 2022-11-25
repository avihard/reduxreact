import React from 'react'


const Home = (props) => {
  console.log(props.cartData)
  return (
    <div>
        <div className='add-to-cart img'>
          <span className='cart-count'>{props.cartData.length}</span>
            <img src='https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg' />
        </div>
      <h1>Home Component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper img'>
            <img src='https://www.kindpng.com/picc/m/422-4225211_new-mobile-phone-png-transparent-cartoons-smart-phones.png' />
        </div>
        <div className='text-wrapper item'>
          <span>
            I-phone
          </span>
          <span>
            Price: $1000
          </span>
        </div>
        <div className='btn-wrapper item'>
            <button
            onClick={()=> props.addToCartHandler({price:1000, name:"i-phone 11"})}>
                Add to cart
            </button>
        </div>
      </div>
    </div>
  )

}

export default Home
