import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import fakedata from './fakedata/Fakedata'
import { useState } from 'react';
import Cart from './Components/Cart/Cart';


function App() {
  const courseDetail = fakedata;
  const [courses,setCourses] = useState([])
  const addCourse=(course)=>{
    const newCourse = [...courses,course];
    setCourses(newCourse);
  }
 
 
  return (
    <div className="App">
      <Header></Header>
      <div className="Shop-container">
          <div className="course-container">
              <Shop addCoursebtn={addCourse} courseInfo={courseDetail}></Shop>
          </div>
          <div>
              <Cart course={courses}></Cart>
          </div>
      </div>
    </div>
   
  );
}

export default App;
