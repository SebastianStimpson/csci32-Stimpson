import React from 'react';
import { useStudentContext } from '../context/StudentContext'; // Adjust the import path based on your project
import { Flex } from '../../ui/Flex'; // Assuming a Flex component exists for layout
import { StudentCard } from './StudentCard'; // Assuming a StudentCard component to display student details

export function StudentResults() {
  const {
    students,
    studentNameQuery,
    setStudentNameQuery,
    classNameQuery,
    setClassNameQuery,
    removeStudent,
  } = useStudentContext(); // Properly consume the context here

  return (
    <div>
      <h3>Search Students</h3>
      <div style={{ marginBottom: '16px' }}>
        <input
          type="text"
          value={studentNameQuery}
          onChange={(e) => setStudentNameQuery(e.target.value)}
          placeholder="Search by student name"
          style={{ marginRight: '8px', padding: '8px' }}
        />
        <input
          type="text"
          value={classNameQuery}
          onChange={(e) => setClassNameQuery(e.target.value)}
          placeholder="Search by class name"
          style={{ padding: '8px' }}
        />
      </div>
      {students.length === 0 ? (
        <p>No students found</p>
      ) : (
        <Flex className="gap-4 flex-col">
          {students.map((student) => (
            <StudentCard
              key={student.student_id}
              student={student}
              onRemove={() => removeStudent(student.name)}
            />
          ))}
        </Flex>
      )}
    </div>
  );
}

// StudentCard Component (assuming this is created elsewhere)
export type StudentCardProps = {
  student: {
    student_id: string;
    name: string;
    email: string;
  };
  onRemove: () => void;
};

export function StudentCard({ student, onRemove }: StudentCardProps) {
  return (
    <div className="student-card" style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '8px' }}>
      <h4>{student.name}</h4>
      <p>{student.email}</p>
      <button onClick={onRemove} style={{ background: 'red', color: 'white', padding: '8px', border: 'none', cursor: 'pointer' }}>
        Remove
      </button>
    </div>
  );
}
