import React from 'react';

export default function ProductCard({ product }) {  // ✅ Proper destructuring
  console.log(product); // ✅ Log product to console
  if (!product) {
    return <p className="text-red-500">Error: Product data is missing.</p>; // ✅ Handle undefined product
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="h-56 w-full">
        <a href="#">
          <img
            className="mx-auto h-full dark:hidden"
            src={"https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"}
            alt={product.name || "Product Image"} // ✅ Use product name
          />
        </a>
      </div>
      <div className="pt-6">
        <a href="#" className="text-left text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
          {product.businessName || "Unknown Product"}
        </a>

        <div className="mt-4 flex items-center justify-between gap-4">
          {/* <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
            RM {product.price !== undefined ? product.price : "N/A"}
          </p> 
          
          Nanti buat price range here.
          */}

          

          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-slate-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
          >
            <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clipRule="evenodd" />
            </svg>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
