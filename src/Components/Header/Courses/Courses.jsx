import { useState } from "react";
import Course from "../../Course/Course";
import { useEffect } from "react";
import PropTypes from 'prop-types';

const Courses = ({handleAddToName}) => {
    const [courses, setCourses] = useState([]);
    useEffect( () =>{
        fetch('course.json')
        .then(res=> res.json())
        .then(data => setCourses(data));
    }, [])
    console.log(courses);
    return (
        <div className="w-2/3 mt-10 mb-20">
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">



            {
                courses.map(course => <Course 
                    key={course.id} 
                    course={course}
                    handleAddToName={handleAddToName}
                ></Course>)
            }
            </div>
            
        </div>
    );
};


Courses.propTypes ={
    handleAddToName: PropTypes.func
}
export default Courses;
