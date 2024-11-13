import React, { useContext } from 'react';
// Adjust the imports to match your project structure
import { Flex } from '../ui/Flex'; // Correct import for your Flex component
import { Field, Label, Input, Header } from '../ui'; // Correct imports for reusable components
import { ClassList } from './ClassList'; // Ensure ClassList component is imported properly
import { StudentContext, StudentContextType } from '../context/StudentContext'; // Correct import for StudentContext

export function StudentSearch() {
  const {
    setStudentNameQuery,
    setClassNameQuery,
    setStudentNames,
    studentNameQuery,
    classNameQuery,
  } = useContext(StudentContext) as StudentContextType; // Explicitly type context

  // Handle changes to the class name input field
  const handleClassNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClassNameQuery(e.target.value);
  };

  // Handle changes to the student name input field
  const handleStudentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentNameQuery(e.target.value);
  };

  // Handle adding student names to the list (could be on Enter key press)
  const handleAddStudent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && studentNameQuery.trim() !== '') {
      setStudentNames((prev: string[]) => [...prev, studentNameQuery]); // Explicitly type `prev` as `string[]`
      setStudentNameQuery(''); // Clear the input after adding
    }
  };

  return (
    <>
      <Header className="justify-between">Search Students</Header>
      <Flex className="gap-4 flex-col">
        <Field>
          <Label>Class</Label>
          <Input
            value={classNameQuery}
            onChange={handleClassNameChange}
            placeholder="Enter class name"
          />
        </Field>
        <ClassList />
        <Field>
          <Label>Student Name</Label>
          <Input
            value={studentNameQuery}
            onChange={handleStudentNameChange}
            onKeyPress={handleAddStudent}
            placeholder="Enter student name and press Enter"
          />
        </Field>
      </Flex>
    </>
  );
}
