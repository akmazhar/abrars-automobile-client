import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CarCard = ({car, cars, setCars }) => {

    const { _id, name, rating, price, type, image, brandName } = car;
     console.log(_id)
    const handleDelete = _id => {
      console.log(_id);
      Swal.fire({
        title: 'Are you Confirm?',
        text: "You won't be able to undo this action!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete please!'
      })
      
      .then((result) => {
        if (result.isConfirmed) {
       
          
          fetch(`http://localhost:5001/car/${_id}` , {
            method: 'DELETE'
          }) 
          .then(res => res.json())
          .then (data => {
            console.log(data)
            if(data.deletedCount >0) {
              Swal.fire(
                'Deleted!',
                'Your car order has been canceled.',
                'success'
              )
              const remaining = cars.filter(car => car._id !== _id)
              setCars(remaining);
            }
          })
        }
      })
    }

    return (
<div className="card card-side bg-base-100 shadow-xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <figure className="ml-3"><img src={image} alt="image"/></figure>
  <div className="card-body px-15 py-10">
  <div className="flex">
  <div>
  <h2 className="card-title text-orange-950 font-serif">Name:{name}</h2>
    <p className="font-serif font-bold text-pink-700">Brand Name: {brandName}</p>
    <p className="font-mono text-lime-700">Type: {type}</p>
    <h2 className="font-mono font-medium">Price: {price}</h2>
    <p className="font-sans text-yellow-800 font-semibold">Rating: {rating}</p>
</div>
 <div>
 <div className="btn-group btn-group-vertical mt-1 ml-12 space-y-3 justify-end">
<Link to={`/updateProduct/${_id}`}>
  <button className="btn bg-cyan-600 mr-92 shadow-black text-white font-mono border-yellow-700 border-spacing-5">Update</button>
</Link>

<Link to={`/productDetails/${_id}`}>
  <button className="btn bg-green-800 mr-92 shadow-amber-600 text-white font-mono border-red-600 border-spacing-5">Details</button>
</Link>

<button onClick={() => handleDelete(_id)} className="btn bg-tomato rounded-xl">X</button>

</div>
 </div>   
  </div> 

  </div>
</div>    

    );
};

export default CarCard;