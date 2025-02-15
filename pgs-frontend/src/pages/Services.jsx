import React, {useState,useEffect} from 'react'
import ProductCard from '../components/ProductCard'
import Breadcrumbs from '../components/Breadcrumbs'
import Navbar from '../components/Navbar';
import { getAllVendors } from '../services/vendorServices';

export default function Services() {

  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllVendors()
      .then((data) => {
        setVendors(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching vendors:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
    
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-12">
          <Breadcrumbs parent='All Services' />
          
          <h2 class="text-xl py-4 font-semibold text-gray-900 dark:text-white sm:text-2xl">Services</h2>
          {loading ? (
            <p>Loading vendors...</p>
          ) : (
            <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
              {vendors.map(vendor => (
                <ProductCard key={vendor.id} product={vendor} />
              ))}
            </div>
          )}
        </div>

      </section>
    </>
  )
}
