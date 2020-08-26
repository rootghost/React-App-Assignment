import React from 'react';
import Course from '../Course/Course';

const Shop = (props) => {
   const courseDetail = props.courseInfo;
   const addCourse = props.addCoursebtn;
   const courseStyle={
       display:"flex",
       flexWrap:"wrap"
   }
    return (
        <div style={courseStyle} >
            {
                courseDetail.map(detail=><Course AddcourseHandle={addCourse} Details={detail}></Course>)
            }
        </div>
    );
};

export default Shop;