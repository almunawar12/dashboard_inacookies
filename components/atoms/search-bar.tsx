import React from 'react';

// const SearchBar = () => {
//   const [query, setQuery] = useState('');

//   const handleSearch = (event) => {
//     setQuery(event.target.value);
//   };

export default function SearchBar() {

  return (
    <div className="flex items-center bg-gray-100 rounded-full p-2">
      <input
        type="text"
        className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400 pl-2"
        placeholder="Search..."
        // value={query}
        // onChange={handleSearch}
      />
      <button className="text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 19a8 8 0 100-16 8 8 0 000 16z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35"
          />
        </svg>
      </button>
    </div>
  );
};

