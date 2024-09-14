"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface User {
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  __v: number;
}

const StudentProfileCardSkeleton = () => {
  return (
    <div className="mt-5 p-4 border border-gray-300 rounded-lg animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-1/4 mb-3"></div>
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-gray-200 h-10 w-10"></div>
        <div className="space-y-2 w-full">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://fakestoreapi.com/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleUserClick = (user: User) => {
    setLoading(true); // Loading holatini true qilamiz
    setTimeout(() => {
      setSelectedUser(user); // 2 soniyadan keyin userni set qilamiz
      setLoading(false); // Loading tugadi
    }, 2000);
  };

  return (
    <div>
      <p>Student Page</p>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <Link href="#" onClick={() => handleUserClick(user)}>
               {user.name.firstname}
            </Link>
          </li>
        ))}
      </ul>

      
      {loading ? (
        <StudentProfileCardSkeleton></StudentProfileCardSkeleton>
      ) : (
        selectedUser && (
          <div style={{ marginTop: '20px', padding: '10px', border: '1px solid black' }}>
            
            <h3>Selected Student</h3>
            <img src="/images/profile.jpg" alt="" className='rounded-full w-10 h-10'/>
            <p>Name: {selectedUser.name.firstname} {selectedUser.name.lastname}</p>
            <p>Email: {selectedUser.email}</p>
            <p>Phone: {selectedUser.phone}</p>
          </div>
        )
      )}
    </div>
  );
}
