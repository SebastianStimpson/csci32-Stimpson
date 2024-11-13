import React, { useEffect, useState } from 'react';
import { useStudentContext } from '../context/StudentContext';

export type StudentCardProps = {
  studentId: string;
  onRemove: () => void;
};

export function StudentCard({ studentId, onRemove }: StudentCardProps) {
  const { students } = useStudentContext();
  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    const foundStudent = students.find((s) => s.student_id === studentId);
    setStudent(foundStudent);
  }, [students, studentId]);

  if (!student) {
    return <p>Loading student information...</p>;
  }

  return (
    <div
      className="student-id-card"
      style={{
        border: '2px solid #000',
        padding: '16px',
        borderRadius: '8px',
        width: '300px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {student.photoUrl && (
        <img
          src={student.photoUrl}
          alt={`${student.name}'s photo`}
          style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '16px' }}
        />
      )}
      <h2 style={{ margin: '8px 0' }}>{student.name}</h2>
      <p><strong>Student ID:</strong> {student.student_id}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Address:</strong> {student.address}</p>
      <p><strong>Phone Number:</strong> {student.phoneNumber}</p>
      <p><strong>GPA:</strong> {student.gpa.toFixed(2)}</p>
      <p><strong>Sex:</strong> {student.sex}</p>
      <p><strong>Enrollment Number:</strong> {student.enrollmentNumber}</p>
      <div style={{ textAlign: 'left', marginTop: '16px' }}>
        <strong>Current Classes:</strong>
        <ul>
          {student.currentClasses.map((className: string, index: number) => (
            <li key={index}>{className}</li>
          ))}
        </ul>
      </div>
      <div style={{ textAlign: 'left', marginTop: '16px' }}>
        <strong>Current Professors:</strong>
        <ul>
          {student.currentProfessors.map((professorName: string, index: number) => (
            <li key={index}>{professorName}</li>
          ))}
        </ul>
      </div>
      <button
        onClick={onRemove}
        style={{
          background: '#d9534f',
          color: 'white',
          padding: '10px 16px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '16px',
        }}
      >
        Remove
      </button>
    </div>
  );
}
