import React, { useContext, useState } from 'react';
import { Context } from '../../../utils/context';
import './CartEmail.scss';
import ShoppingCart from './shoppingCart';
const CartEmail = () => {
  const [formState, setFormState] = useState({});
  const { cartItems } = useContext(Context);
  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const config = {
      Username: process.env.UserName,
      Password: process.env.PassWord,
      Host: "smtp.elasticemail.com",
      Port: "2525",
      To: process.env.EmailTo,
      From: formState.email,
      Subject: "This is the email from my website",
      Body: `${formState.name} <br> <table>
                <tr><th>Products</th><th>Material</th><th>Product Id</th></tr>
                ${cartItems.map((item) => `
                  <tr>
                  <td>${item.image}</td>
                    <td>${item.Item_Name}</td>
                    <td>${item.material_Name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.id}</td>
                  </tr>
                `).join('')}
              </table>`
    };

    if (window.Email) {
      window.Email.send(config).then(() => alert("Email sent successfully"));
    }
  };
  // console.log("ca", cartItems);
  return (
    <>
      <div className="email-section">
        <div className="email-content">
          <span className="small-text">Send Email</span>
          <form action="" onSubmit={submitHandler}>
            <div className="form">
              <div className="input">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formState.name || ''}
                  onChange={changeHandler}
                />
              </div>
              <div className="input">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formState.email || ''}
                  onChange={changeHandler}
                />
              </div>
              <div>
                <div className="butt">
                  <button className="mail">CheckOut</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default CartEmail;
