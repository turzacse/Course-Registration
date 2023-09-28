import PropTypes from 'prop-types';


const Details = ({names, credit, remaining}) => {
    let totalCredit = 0;

    return (
        <div className='mt-10 bg-white rounded-lg p-10'>
            
            
            <h2 className="text-xl font-bold text-[#2F80ED] mb-4">Credit Hour Remaining {remaining}hr</h2>
            <hr />

            <h1 className="text-xl font-bold mt-5">Course Name</h1>
            {
                names.map((name) =>(
                    
                        <li className='list-decimal'>{name.course_title}</li>
                ))
            }
            <br />
            <hr className=" text-black font-bolder"/>
            <br />
            <h2 className="text-lg font-semibold">Total Credit Hour {credit}</h2>
            
        </div>
    );

};


Details.propTypes ={
    names: PropTypes.array,
    credit: PropTypes.number,
    remaining: PropTypes.number
    
}
export default Details;
