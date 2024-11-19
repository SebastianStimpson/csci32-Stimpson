import { Professor, Class, Student } from '../types/models'
import { faker } from '@faker-js/faker'

export const presetProfessors: Professor[] = [
  { professor_id: 'prof1', name: 'Dr. Sarah Johnson' },
  { professor_id: 'prof2', name: 'Dr. Michael Chen' },
  { professor_id: 'prof3', name: 'Dr. Emily Martinez' },
  { professor_id: 'prof4', name: 'Dr. David Wilson' },
]

export const presetClasses: Class[] = [
  { class_id: 'cs101', name: 'Introduction to Computer Science', professor_id: 'prof1' },
  { class_id: 'cs201', name: 'Data Structures', professor_id: 'prof2' },
  { class_id: 'cs301', name: 'Algorithms', professor_id: 'prof3' },
  { class_id: 'cs401', name: 'Software Engineering', professor_id: 'prof4' },
  { class_id: 'cs501', name: 'Artificial Intelligence', professor_id: 'prof1' },
]

export function generateRandomStudent(index: number): Student {
  const student_id = `STU${String(index + 1).padStart(3, '0')}`

  return {
    student_id,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    address: faker.location.streetAddress(),
    enrollmentNumber: `EN${faker.number.int({ min: 1000, max: 9999 })}`,
    gpa: Number(faker.number.float({ min: 2.0, max: 4.0, fractionDigits: 2 }).toFixed(2)),
    currentClasses: faker.helpers.arrayElements(presetClasses, { min: 2, max: 4 }).map((c) => c.name),
  }
}

export function generateSeedData(): {
  professors: Professor[]
  classes: Class[]
  students: Student[]
} {
  const students = Array.from({ length: 10 }, (_, i) => generateRandomStudent(i))

  return {
    professors: presetProfessors,
    classes: presetClasses,
    students,
  }
}
