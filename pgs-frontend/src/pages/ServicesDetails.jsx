import React from 'react'

export default function ServicesDetails() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-12">
                    <Breadcrumbs parent='All Vendors' child='Klinik' />
                    <h2 class="text-xl py-4 font-semibold text-gray-900 dark:text-white sm:text-2xl">Services</h2>
                    <div class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    )
}
