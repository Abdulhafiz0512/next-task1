import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div className='page'>
      <h3>Students page</h3>
      <Link href="/users/student">Student</Link>
      
    </div>
  );
}
