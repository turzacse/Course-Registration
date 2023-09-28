import PropTypes from 'prop-types';
import { FaBookmark, FaDollarSign } from 'react-icons/fa';

const Course = ({ course, handleAddToName }) => {
    const {course_title,img,course_details,price,credit,} = course;
    return (
        <div>
             <div className='flex '>
             <div className='bg-white p-2 rounded-lg'>
                <img className='h-[140px] lg:w-[220px] w-full rounded-xl ' src={img} alt="" />
                <h1 className='lg:h-[60px] text-lg font-bold mt-5'>{course_title}</h1>
                <p className='lg:h-[80px] text-sm text-[#1C1B1B]'>{course_details}</p>
                <div className='flex justify-between'>
                    <p> <FaDollarSign className='inline '></FaDollarSign> Price: {price} </p>
                    
                    <p> <FaBookmark className='inline text-gray-600'></FaBookmark> Credit: {credit}hr </p>
                </div>
                <button 
                onClick={() => handleAddToName(course)}
                class="btn my-4 btn-active btn-primary bg-[#2F80ED] text-white rounded-lg h-[40px] lg:w-[220px] w-full ">
                Select</button>
             </div>
             </div>
            
        </div>
    );
};

Course.propTypes ={
    course: PropTypes.object.isRequired,
    handleAddToName: PropTypes.func
}
export default Course;
