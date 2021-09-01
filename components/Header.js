import React from 'react';

export default function Header() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-offwhite p-3 sm:p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <span class="font-serif tracking-tight text-darkp text-2xl sm:text-4xl">Sew</span>
        <span class="font-serif text-2xl tracking-tight text-lightp sm:text-4xl">This</span>
      </div>
      {/* <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
  </div> */}
    </nav>
  )
}
