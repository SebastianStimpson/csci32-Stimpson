import { Course, CourseMaterial } from '../types/course'

export const courseService = {
  getCourses: async (): Promise<Course[]> => {
    try {
      const response = await fetch('/api/courses')
      if (!response.ok) throw new Error('Failed to fetch courses')
      return response.json()
    } catch (error) {
      console.error('Error fetching courses:', error)
      throw error
    }
  },

  getCourseById: async (id: string): Promise<Course> => {
    try {
      const response = await fetch(`/api/courses/${id}`)
      if (!response.ok) throw new Error('Failed to fetch course')
      return response.json()
    } catch (error) {
      console.error('Error fetching course:', error)
      throw error
    }
  },

  addMaterial: async (courseId: string, material: CourseMaterial): Promise<CourseMaterial> => {
    try {
      const response = await fetch(`/api/courses/${courseId}/materials`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(material),
      })
      if (!response.ok) throw new Error('Failed to add course material')
      return response.json()
    } catch (error) {
      console.error('Error adding course material:', error)
      throw error
    }
  },

  enrollStudent: async (courseId: string, studentId: string): Promise<void> => {
    try {
      const response = await fetch(`/api/courses/${courseId}/enroll`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentId }),
      })
      if (!response.ok) throw new Error('Failed to enroll student')
    } catch (error) {
      console.error('Error enrolling student:', error)
      throw error
    }
  },
}
