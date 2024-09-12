import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='layout'>
      <h2>Teachers layout</h2>
      {children}
    </div>
  );
}
