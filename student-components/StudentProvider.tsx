import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useStudents } from '../hooks/useStudents'; // Assuming you have implemented the useStudents hook

export type Student = {
  student_id: string;
  name: string;
  email: string;
  enrollmentNumber?: string;
};

export type StudentContextType = {
  students: Student[];
  mutate: () => void;
  studentNameQuery: string;
  setStudentNameQuery: (query: string) => void;
  classNameQuery: string;
  setClassNameQuery: (query: string) => void;
  studentNames: string[];
  setStudentNames: (names: string[]) => void;
  removeStudent: (name: string) => void;
  showStudentForm: boolean;
  setShowStudentForm: (show: boolean) => void;
};

// Create a context with an undefined initial value
const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const [studentNameQuery, setStudentNameQuery] = useState('');
  const [classNameQuery, setClassNameQuery] = useState('');
  const [studentNames, setStudentNames] = useState<string[]>([]);
  const [showStudentForm, setShowStudentForm] = useState(false);

  // Fetching students using useStudents hook
  const { data: students = [], mutate } = useStudents({ name: studentNameQuery, className: classNameQuery });

  function removeStudent(name: string) {
    const newStudentNames = studentNames.filter((student) => student !== name);
    setStudentNames(newStudentNames);
  }

  return (
    <StudentContext.Provider
      value={{
        students,
        mutate,
        studentNameQuery,
        setStudentNameQuery,
        classNameQuery,
        setClassNameQuery,
        studentNames,
        setStudentNames,
        removeStudent,
        showStudentForm,
        setShowStudentForm,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudentContext must be used within a StudentProvider');
  }
  return context;
};
