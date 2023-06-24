'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [displaySearch, setDisplaySearch] = useState(false)

  return (
    <div className="navbar navbar-center mx-auto max-w-7xl shadow-lg">
      <div className="flex-1">
        <Link href="/" replace>
          <Image
            src="/images/logo.png"
            width={257}
            height={103}
            alt="logo"
            className="h-9 w-auto cursor-pointer duration-300 ease-in hover:h-10 hover:w-auto"
          />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <button
          className={`btn btn-ghost btn-circle `}
          onClick={() => setDisplaySearch(!displaySearch)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        {displaySearch && (
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        )}

        <button className="btn capitalize">
          Owned Pokémon
          <div className="badge badge-secondary">0</div>
        </button>
      </div>
    </div>
  )
}

export default Navbar
