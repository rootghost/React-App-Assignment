import React from 'react';

const Cart = (props) => {
    const cartStyle={
        marginLeft:'20px',
        fontWeight:"400px",
        height:"60px",
        width:"224px",
        boxShadow:"5px 5px 10px",
        borderRadius:"5px"
        
        }
        const totalCourse = props.course;

        let totalPrice = 0;
        for (let i = 0; i < totalCourse.length; i++) {
            const course = totalCourse[i];
            totalPrice = totalPrice + course.price;
            
        }
   
    return (
        <div>
           <div>
                <h4 style={{marginLeft:"50px"}}>Order summary</h4>
           </div>
           <div style={cartStyle}>
               <div style={{marginTop:"20px",marginLeft:"20px",lineHeight:""}}>
                   <h6>Items :<span style={{marginLeft:"60px"}}>{totalCourse.length}</span></h6>
                    <h6>Total price :  <span style={{marginLeft:"20px"}}>{totalPrice}$</span></h6>
               </div>
               
           </div>
        </div>
    );
};

export default Cart;