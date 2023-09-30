import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({products=[]}) => {
  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
        {
            products.map((product)=>{
                console.log(product,'product')
                const{id,title,price,description,category,image}=product;
              return(
                <Link to={`/products/${id}`} class="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 cursor-pointer">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt={title} class="object-contain object-center w-full h-full block" src={image}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{title}</h2>
          <p class="mt-1">${price}</p>
        </div>
      </Link>
              )  
            })
        }
      
    </div>
  </div>
</section>
  )
}

export default ProductCard