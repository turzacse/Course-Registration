import './App.css'
import Header from './Components/Header/Header';
import Courses from './Components/Header/Courses/Courses';
import Details from './Components/Details/Details';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {
  const [names, setnames] = useState([]);
  const [credit, setCredit]= useState(0)
  const [remaining, setRemaining] = useState(20)


  const handleAddToName = course => {
 
    const isExist = names.find((item) => item.id == course.id);
    let count = course.credit;
    if(isExist){
      return toast('Already Enroll this Course!!');
    }
    else {
      names.forEach((item) => {
        count+=item.credit;
      })
      const creditRemaing = 20-count;
      if(creditRemaing<0)
      {
        return toast("You can not Enroll the Courses, Because Your Limit is only 20 Credit. And you have crossed your limit");
      }
      else{
        setRemaining(creditRemaing);
        setCredit(count);
      }
      
      const newNames = [...names, course];
      setnames(newNames);
    }  

    
  }
  return (
    <div className='bg-[#F3F3F3]'> 
      <Header></Header>
      <div className='lg:flex mx-20'>
            <Courses handleAddToName={handleAddToName}></Courses>
            <div className="lg:w-1/3 w-full lg:ml-20">
            <Details names={names} credit={credit} remaining={remaining} >
            </Details>
            </div>
      </div>
      {/* <FaBookmark></FaBookmark>
      <FaBook></FaBook> */}
      <ToastContainer />
    </div>
  )
}

export default App
