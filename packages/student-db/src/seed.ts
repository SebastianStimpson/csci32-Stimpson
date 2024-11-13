import { prisma } from './client'
import { randomUUID } from 'crypto'
import type { Prisma } from '@prisma/client'

const DEFAULT_PROFESSORS = [{ name: 'Dr. Smith' }, { name: 'Dr. Johnson' }, { name: 'Dr. Williams' }] as Array<{
  name: string
}>

const DEFAULT_CLASSES = [
  { name: 'Math 101', professorName: 'Dr. Smith' },
  { name: 'History 201', professorName: 'Dr. Johnson' },
  { name: 'Science 301', professorName: 'Dr. Williams' },
] as Array<{ name: string; professorName: string }>

const DEFAULT_STUDENTS = [
  { name: 'John Doe', email: 'john@doe.com' },
  { name: 'Jane Smith', email: 'jane@smith.com' },
] as Array<{ name: string; email: string }>

;(async () => {
  try {
    // Upsert Students with Random Enrollment Numbers
    await Promise.all(
      DEFAULT_STUDENTS.map((student) =>
        prisma.student.upsert({
          where: {
            email: student.email,
          },
          update: {
            ...student,
          },
          create: {
            ...student,
            enrollmentNumber: randomUUID(),
          },
        }),
      ),
    )

    // Create Professors
    await Promise.all(
      DEFAULT_PROFESSORS.map((professor) =>
        prisma.professor.create({
          data: {
            name: professor.name,
          },
        }),
      ),
    )

    // Create Classes with assigned Professors
    await Promise.all(
      DEFAULT_CLASSES.map(async ({ name, professorName }) => {
        const professor = await prisma.professor.findFirst({
          where: { name: professorName },
        })

        if (professor) {
          await prisma.class.create({
            data: {
              name,
              professor: {
                connect: { professor_id: professor.professor_id },
              },
            },
          })
        }
      }),
    )

    // Enroll Students in Classes
    const classes = await prisma.class.findMany()
    const students = await prisma.student.findMany()

    await Promise.all(
      students.map((student) =>
        classes.map((cls) =>
          prisma.enrollment.create({
            data: {
              student: {
                connect: { student_id: student.student_id },
              },
              class: {
                connect: { class_id: cls.class_id },
              },
            },
          }),
        ),
      ),
    )
  } catch (error) {
    console.error(error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
})()
