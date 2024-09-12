import Link from "next/link";
import React from "react";

interface Item {
  title: string;
  href: string;
}

export default function Navigation({ items }: { items: Item[] }) {
  return (
    <nav className='p-4 bg-slate-800 text-slate-50'>
      <ul className='flex gap-x-4'>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
