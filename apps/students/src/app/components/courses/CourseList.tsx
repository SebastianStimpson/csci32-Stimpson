import { FC } from 'react'
import { Course } from '../../types/course'

interface Props {
  courses: Course[]
  onCourseClick: (course: Course) => void
}

export const CourseList: FC<Props> = ({ courses, onCourseClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <div
          key={course.id}
          onClick={() => onCourseClick(course)}
          className="p-4 border rounded-lg cursor-pointer hover:shadow-md"
        >
          <h3 className="font-bold">{course.name}</h3>
          <p className="text-gray-600">{course.code}</p>
        </div>
      ))}
    </div>
  )
}
