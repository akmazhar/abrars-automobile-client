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
           
            fetch(`http://localhost:5001/brandCarts/${id}`, {
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
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">am:{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button onClick={() => deleteBtn(_id)} className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cart;