import './Product.css';
import React from 'react';


const CourseList = ({courses}) => {
  return (   // specifies what the app component should display
    <div className="course-container">
      {Object.values(courses).map(course => (
        <div key={course.number} className="course-card">
          <p className="course-title">
            {course.term}: CS{course.number}
          </p>
          <p>
            {course.title}
          </p>
          <p>
            {course.meets}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CourseList;

// const CourseList = ({courses}) => {
//   return (
//     <div className="course-container"> {/* Wrapper for the whole list */}
//       {Object.values(courses).map(course => (
//         <div key={course.number} className="course-card"> {/* Each course card */}
//           <h2>CS {course.number}: {course.title}</h2>
//           <p>Term: {course.term}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CourseList;