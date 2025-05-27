import React,{useContext,useEffect,useState} from 'react'
import { CartContext } from '../CartContextProvider'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
    const {cartItem} = useContext(CartContext);
    const [subtotal,setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);

useEffect(() => {
  const totalAmount = cartItem.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const taxAmount = totalAmount * 0.18;
  const grandTotal = totalAmount + taxAmount;

  setSubtotal(totalAmount);
  setTax(taxAmount);
  setTotal(grandTotal);
}, [cartItem]);

    const handelCheckout = () =>{
      toast.success("Checkout Successfully");
    }


    return (
      <>
        <div className="page-section mb-5 text-center">
          <p className="text-muted">
            <Link to="/">Home</Link>/checkout
          </p>
          <h2 className="fw-bold">Check-Out</h2>
        </div>

        <div className="container my-5">
          <span className="fw-bold fs-2">Checkout</span>

          <div className="row">
            <div className="col-lg-7">
              <div className="accordion" id="accordionExample">
                {/* delivery address */}
                <div className="d-flex justify-content-between align-items-center border-bottom py-2"
                type ="button"
                data-bs-toggle="collapse"
                data-bs-target="#accordionExample"
                aria-expanded="true"
                aria-controls="collapseOne"
                >
                  <div className="d-flex align-items-center gap-2">
                    <i className="ri-map-pin-line fs-6 text-secondary"></i>
                    <span className="custom-hover fw-medium">Add Delivery Address</span>
                  </div>
                  <button type='button' className="btn btn-outline-success btn-sm">Add new address</button>
                </div>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="container mt-4">
                      <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                          <div className="card h-100 p-3 shadow-sm">
                            <div className="d-flex justify-content-between align-items-center">
                              <h5 className="fs-6 d-flex align-items-center">
                                <input type="radio" name='address' className="form-check-input me-2" defaultChecked />
                                Home
                              </h5>
                            </div>
                            <p className="mb-2" style={{fontSize:".80rem"}}>
                              Suvadip Majhi <br/>
                              111 Contai, Nilpur Road<br/>
                              West Bengal, India <br/>
                              +91 9876543210
                            </p>
                            <div className="mt-auto">
                              <a href="#" className="text-success d-block mb-1" style={{fontSize:".90rem"}}>
                                Set as Default
                              </a>
                              <a href="#" className="text-primary me-2" style={{fontSize:".90rem"}}>
                                Edit
                              </a>
                              <a href="#" className="text-danger" style={{fontSize:".90rem"}}>
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col">
                          <div className="card h-100 p-3 shadow-sm">
                            <div className="d-flex justify-content-between align-items-center">
                              <h5 className="fs-6 d-flex align-items-center">
                                <input type="radio" name='address' className="form-check-input me-2" />
                                Office
                              </h5>
                            </div>
                            <p className="mb-2" style={{fontSize:".80rem"}}>
                              Suvadip Majhi <br/>
                              111 Contai, Nilpur Road<br/>
                              West Bengal, India <br/>
                              +91 9876543210
                            </p>
                            <div className="mt-auto">
                              <a href="#" className="text-success d-block mb-1" style={{fontSize:".90rem"}}>
                                Set as Default
                              </a>
                              <a href="#" className="text-primary me-2" style={{fontSize:".90rem"}}>
                                Edit
                              </a>
                              <a href="#" className="text-danger" style={{fontSize:".90rem"}}>
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>

                        
                      </div>
                    </div>
                  </div>
                </div>

                {/* payment */}

                <div className="border-bottom py-2" id='headingThree'>
                  <div 
                  className="collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <i className="ri-bank-card-line fs-6 text-secondary"></i>
                        <span className="custom-hover fw-medium">Payment Method</span>
                    </div>
                  </div>
                </div>

                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="container mt-4">
                      {/* paypal */}
                      <div className="card p-3 mb-3">
                        <div className="form-check">
                          <input type="radio" className="form-check-input" name='paymentMethod' id='paypal' />
                          <label className='foem-check-label fs-6 fw-semibold' htmlFor='paypal'>Payment with Paypal</label>
                          <p className="text-muted ms-1 mb-0 fs-6">You will redirected paypal to complete the purchase</p>
                        </div>
                      </div>

                      <div className="card p-3 mb-3">
                        <div className="form-check">
                          <input type="radio" className="form-check-input" name='paymentMethod' id='card' />
                          <label className='foem-check-label fs-6 fw-semibold' htmlFor='card'>Credit/Debit Card</label>
                          <p className="text-muted ms-1 mb-0 fs-6">We support Mastercard, Visa and Stripe</p>
                        </div>

                        <div className="mt-3">
                          <label className="form-label">Card Number</label>
                          <input type="text" className="form-control" placeholder='1234 4567 7890 4567'/>
                        </div>

                        <div className="row mt-3">
                          <div className="col-md-6">
                            <label className="form-label">Name on card</label>
                            <input type="text" className="form-control" placeholder='Enter your name' />
                          </div>

                          <div className="col-md-3">
                            <label className="form-label">Expiry date</label>
                            <input type="text" className="form-control" />
                          </div>

                          <div className="col-md-3">
                            <label className="form-label">CVV</label>
                            <input type="text" className="form-control" placeholder='XXX' />
                          </div>

                        </div>
                      </div>

                         {/*payoneer  */}
                      <div className="card p-3 mb-3">
                        <div className="form-check">
                          <input type="radio" id="payoneer" name='paymentMethod' className='form-check-input' />
                          <label htmlFor="payoneer" className="form-check-lebel fs-6 fw-semibold">Pay with Payoneer</label>
                          <p className="text-muted ms-1 mb-0">You will be redirected to Payoneer to complete the purchase</p>
                        </div>
                      </div>

                         {/*COD  */}
                      <div className="card p-3 mb-3">
                        <div className="form-check">
                          <input type="radio" id="cod" name='paymentMethod' className='form-check-input' />
                          <label htmlFor="cod" className="form-check-lebel fs-6 fw-semibold">Cash on Delivery</label>
                          <p className="text-muted ms-1 mb-0">Pay cash when your order is Delivered.</p>
                        </div>
                      </div>

                      <div className="d-flex justify-content-end gap-2 mt-3">
                        <button className="btn btn-outline-secondary">Prev</button>
                        <button className="btn btn-success">Place Order</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-5 mt-0 mt-md-4">
              <div className="container col-md-10 m-auto">
                <div className="card p-4">
                  <h5 className="border-bottom mb-2 fs-4 fw-semibold">Order Detsils</h5>

                  <div className="card-items">
                    {cartItem.length>0?(
                      cartItem.map((item,i) =>(
                        <div key={i} className="d-flex justify-content-between align-content-center mb-3">
                          <span className="d-flex align-content-center gap-2">
                            <img src={item.image || "/default.image.png"}
                            alt={item.name}
                            style={{
                              width:"40px",
                              height:"40px",
                              objectFit:"cover",
                              borderRadius:"5px"
                            }}
                            />
                            <span>{item.name} x {item.quantity} </span>
                            <span>${(item.price*item.quantity).toFixed(2)}</span>
                          </span>
                        </div>
                      ))
                    ):(
                      <p>No items in cart!</p>
                    )}
                  </div>
                  <div className="mt-3">
                    <div className="d-flex justify-content-between">
                      <span>Shipping Fees</span>
                      <span className='fw-semibold'>$0.00</span>
                    </div>

                    <div className="d-flex justify-content-between">
                      <span>Tax $8%</span>
                      <span className='fw-semibold'>${tax.toFixed(2)}</span>
                    </div>
                    <hr/>

                    <div className="d-flex justify-content-between fs-6">
                      <span className="fw-semibold">Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="d-grid mt-4">
                    <button
                    onClick={handelCheckout}
                    className="btn btn-success"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default CheckoutPage;