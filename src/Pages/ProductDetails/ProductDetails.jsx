import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const ProductDetails = () => {
    // const car = useLoaderData();
    // const { _id, name, rating, price, type, image, brandName, shortDescription } = car;
    //   console.log(name, price);
      const { id } = useParams();
      console.log(id);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5001/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [id]);
   
   const oneCart = {
    image: data.image,
    name: data.name,
    brandName: data.brandName,
    price: data.price,
    type: data.type,

   }

   
   const addToCartHandle = () =>{
    console.log(oneCart)
    fetch('http://localhost:5001/brandCarts', {
        method: "POST",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(oneCart),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Your Car is nicely selected',
                icon: 'success',
                confirmButtonText: 'Thank You!'
              });
        }
    })

   }
    return (
        <div className="card card-side bg-base-100 mt-20 ml-52 mr-40 shadow-2xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            <figure className="ml-3"><img src={data.image} alt="image" /></figure>
            <div className="card-body px-15 py-10">
                <div className="grid">
                    <div>
                        <h2 className="card-title text-orange-950 font-serif">Name: {data.name}</h2>
                        <p className="font-mono font-bold text-pink-700">Brand Name: {data.brandName}</p>
                        <p className="font-mono">Type: {data.type}</p>
                        <p className="font-serif">In Short: {data.shortDescription}</p>
                        <h2 className="font-mono font-medium">Price: {data.price}</h2>
                        <p className="font-sans text-yellow-600 font-semibold">Rating: {data.rating}</p>
                    </div>
                    <div className="btn-group btn-group-vertical mt-10  space-y-2 justify-end">
                        
                            <button onClick={addToCartHandle} className="btn bg-green-800 mr-92 shadow-amber-600 text-white font-mono border-red-600 border-spacing-8 px-10">Add to Cart</button>
                        
                    </div>
                </div>
            </div>
        </div>
        
    );
    
};

export default ProductDetails;
