const CourseList = ({courses}) => {
  return (   // specifies what the app component should display
    <div>
      {Object.values(courses).map(course => (
        <div key={course.number}>
          <p>
            Term: {course.term}
          </p>
          <p>
            CS{course.number}: {course.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CourseList;