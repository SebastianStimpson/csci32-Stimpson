import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export interface CreateStudentProps {
  name: string
  email: string
  enrollmentNumber?: string
}

export class StudentService {
  // Create a new student
  async createStudent(data: CreateStudentProps) {
    try {
      const student = await prisma.student.create({
        data: {
          ...data,
          enrollmentNumber: data.enrollmentNumber || randomUUID(),
        },
      })
      return student
    } catch (error) {
      console.error('Error creating student:', error)
      throw new Error('Failed to create student')
    }
  }

  // Get all students with optional filters
  async getStudents(params?: { name?: string; email?: string }) {
    try {
      const students = await prisma.student.findMany({
        where: {
          name: params?.name ? { contains: params.name } : undefined,
          email: params?.email ? { contains: params.email } : undefined,
        },
        include: {
          enrollments: {
            include: {
              class: true,
            },
          },
        },
      })
      return students
    } catch (error) {
      console.error('Error fetching students:', error)
      throw new Error('Failed to fetch students')
    }
  }

  // Update student information
  async updateStudent(studentId: string, data: Partial<CreateStudentProps>) {
    try {
      const updatedStudent = await prisma.student.update({
        where: {
          student_id: studentId,
        },
        data: {
          ...data,
        },
      })
      return updatedStudent
    } catch (error) {
      console.error('Error updating student:', error)
      throw new Error('Failed to update student')
    }
  }

  // Delete a student by ID
  async deleteStudent(studentId: string) {
    try {
      await prisma.student.delete({
        where: {
          student_id: studentId,
        },
      })
      return true
    } catch (error) {
      console.error('Error deleting student:', error)
      throw new Error('Failed to delete student')
    }
  }
}
function randomUUID(): any {
  throw new Error('Function not implemented.')
}
