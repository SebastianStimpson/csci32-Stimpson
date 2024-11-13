import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

interface FindManyStudentProps {
  name?: string
  className?: string
  sortColumn?: string
  sortOrder?: Prisma.SortOrder
  take?: number
  skip?: number
}

export class StudentService {
  async findManyStudents(props: FindManyStudentProps) {
    const { name, className, sortColumn = 'name', sortOrder = Prisma.SortOrder.asc, take = 10, skip = 0 } = props

    const classNamesArray = className ? className.split(',') : []
    const orderBy = {
      [sortColumn]: sortOrder,
    }

    try {
      const students = await prisma.student.findMany({
        where: {
          name: name ? { contains: name } : undefined,
          AND: classNamesArray.map((className) => ({
            enrollments: {
              some: {
                class: {
                  name: {
                    contains: className,
                  },
                },
              },
            },
          })),
        },
        orderBy,
        take,
        skip,
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
      throw new Error('Error fetching students')
    }
  }
}
