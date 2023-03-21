import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer
  class="bg-neutral-100 text-center text-neutral-600 dark:bg-slate-900 dark:text-neutral-200 lg:text-left">
  
  <div class="mx-6 py-10 text-center md:text-left">
    <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:ml-20">
      <div class="">
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Contact Us
        </h6>
        <p class="mb-1 text-lg">
          Phone
        </p>
        <p class="mb-3 text-sm">
                +91 72766-30705
        </p>      
        <p class="mb-1 text-lg">
          Email
        </p>
        <p class="mb-3 text-sm">
                admin@merito.in
        </p>  
        <p class="mb-1 text-lg">
          Address
        </p>
        <p class="mb-3 text-sm">
                Baner,Pune Maharashtra
        </p>  
      </div>
      <div class="">
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Career Corner
        </h6>
        <p class="mb-4">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200 hover:text-amber-300"
            >Our Programs</a
          >
        </p>
        <p class="mb-4">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200 hover:text-amber-300"
            >Our Story</a
          >
        </p>
        <p class="mb-4">
          <a href="#!" class="text-neutral-600 dark:text-neutral-200 hover:text-amber-300"
            >Our Brand</a
          >
        </p>
        <p className='mb-4'>
          <a href="#!" class="text-neutral-600 dark:text-neutral-200 hover:text-amber-300"
            >Social Initiative</a
          >
        </p>
        <p>
          <a href="#!" class="text-neutral-600 dark:text-neutral-200 hover:text-amber-300"
            >Contact Us</a
          >
        </p>
      </div>
      <div>
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Our Brands
        </h6>
        <p className='mb-4'>
          <a href="#!" class="text-neutral-600 dark:text-neutral-200 hover:text-amber-300"
            >Merito.ai</a
          >
        </p>
        
        <p className='mb-4'>
          <a href="#!" class="text-neutral-600 dark:text-neutral-200 hover:text-amber-300"
            >Merito Academy</a
          >
        </p>
        <p className='mb-4'>
          <a href="#!" class="text-neutral-600 dark:text-neutral-200 hover:text-amber-300"
            >Helppad</a
          >
        </p>
        
      </div>
    </div>
  </div>
  <div class="bg-neutral-200 p-6 dark:bg-slate-900 ml-20 flex justify-start">
    <p>Career Corner</p>
  </div>
</footer>
    </div>
  )
}

export default Footer
