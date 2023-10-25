import Swal from "sweetalert2";


const Cart = ({setCartItems, cartItems, item}) => {

    const {_id, name, price, image, brandName, type} = item
     const deleteBtn = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
           
            fetch(`abrars-automobile-server.vercel.app/brandCarts/${id}`, {
                method: 'DELETE',
            }) 
            .then(res => res.json())   
            .then(data => {
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                      const remaining = cartItems.filter(cart => cart._id !== _id)
                      setCartItems(remaining)
                }
            }) 


            }
          })
     }
    return (

        <div>
    <div className="card card-side bg-base-100 mt-20 ml-52 mr-40 shadow-2xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
    <figure className="ml-3"><img src={image} alt="image" /></figure>
    <div className="card-body px-15 py-10">
    <div className="grid">
 <div>
     <h2 className="card-title text-green-600 font-serif">Name: {name}</h2>
     <p className="font-mono font-bold text-black-700">Brand Name: {brandName}</p>
     <p className="font-serif text-lg text-blue-600">Type: {type}</p>
     <h2 className="font-mono font-medium text-pink-600">Price: {price}</h2>
     
 </div>

    <div className="btn-group btn-group-vertical mt-10  space-y-2 justify-end">
      <button onClick={() => deleteBtn(_id)} className="btn  mr-92 shadow-green-600 bg-red-600 text-white font-mono text-lg border-blue-600 border-spacing-56 px-16">Delete</button>
    </div>
  </div>
</div>


 </div>
    </div>



       
          
       
    );
};

export default Cart;


{/* <figure className="ml-3"><img src={data.image} alt="image" /></figure>
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
</div> */}

















{/* <div className="card card-side bg-base-100 mt-20 ml-52 mr-40 shadow-2xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
<figure><img src={image} alt="Shoes" /></figure>
<div className="card-body">
  <h2 className="card-title">am:{name}</h2>
  <p>If a dog chews shoes whose shoes does he choose?</p>
  <div className="card-actions justify-end">
    <button onClick={() => deleteBtn(_id)} className="btn btn-primary">Delete</button>
  </div>
</div>
</div> */}
