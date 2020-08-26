import React from 'react';
import { Button } from 'react-bootstrap';
import './Course.css';


const Course = (props) => {
    const{name,price,img,instructorName} = props.Details;
    const courseAddButton = props.AddcourseHandle;
    console.log(courseAddButton);
    const btnStyle={
        backgroundColor:"#218838",
        marginLeft:"56px",
        padding:"10px",
        marginTop:"20px",
        border:"2px solid white",
        color:"white",
        borderRadius:"5px"

    }
    
    return (
        <div>
            
            <div className="cardStyle"> 
                <img className="imgstyle" src={img} alt=""/>
                <div style={{padding:"10px"}}>
                    <h5 className="courseNameStyle">{name}</h5>
                    <h6 >Instructor : <span className="textColor">{instructorName}</span></h6>
                    <h6>Price : <span className="textColor">{price}$</span></h6>
                   <button onClick={()=>courseAddButton(props.Details)} style={btnStyle}>Add to cart</button>
                    
               </div>

            </div>

        </div>
    );
};

export default Course;