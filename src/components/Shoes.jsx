import React from 'react'

const Shoes = () => {
  return (
    <div className='shoes-main'>
        <div className="shoes-content">
            <h1>Your Feet Deserves The Best</h1>
            <p>Want Best Shoes And We are here to help you with our shoes.</p>
            <div className="btn">
                <button>Shop Now</button>
                <button>Category</button>
            </div>
            <div className="Shops">
                <p>Also Available ON</p>
                <img src="/images/amazon.png" alt="amazon" />
                <img src="/images/flipkart.png" alt="flipkart" />
            </div>
        </div>

        <div className='shoes-image'>
            <img src="/images/shoe.png" alt="shoes" />
        </div>
    </div>
  )
}

export default Shoes