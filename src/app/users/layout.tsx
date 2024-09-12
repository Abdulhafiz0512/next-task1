import React from "react";

export default function layout({
  children,
  teachers,
  students,
}: {
  children: React.ReactNode;
  teachers: React.ReactNode;
  students: React.ReactNode;
}) {
  return (
    <div className='layout'>
      <h2>Users layout</h2>
      {children}
      <div className='grid grid-cols-2 gap-2'>
        {teachers}
        {students}
      </div>
    </div>
  );
}
