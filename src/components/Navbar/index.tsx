import React from "react";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";

type NavLink = {
  id: string | number;
  path: string;
  title: string;
};

export default async function Navbar() {
  const res = await fetch("http://localhost:3001/navbarLinks", {
    cache: "no-store",
  });
  const navLinks: NavLink[] = await res.json();

  return (
    <nav className="w-full shadow shadow-gray-300 bg-white">
      <Container className="flex items-center justify-between py-4">
        <ul className="flex items-center space-x-6">
          {navLinks.map((link: NavLink) => (
            <li key={link.id}>
              <Link
                href={link.path}
                className="text-gray-800 hover:text-blue-600 transition"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Image
            src="/images/logo.svg"
            alt="Kiako logo"
            width={100}
            height={100}
          />
        </div>
      </Container>
    </nav>
  );
}
