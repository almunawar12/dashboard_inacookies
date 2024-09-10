import ProductList from "@/components/atoms/product-list";
import Header from "./header";
// import Sidebar from "./sidebar";
import { FiShoppingCart, FiHeart, FiTag, FiCoffee } from 'react-icons/fi';

export default function Home() {
  return (
    <>
      <div className="flex h-screen">
        {/* <Sidebar /> */}
        <div className="flex-grow flex flex-col lg:flex-row">
          <div className="lg:w-full p-4">
            <Header />
            {/* Konten Card Kategori */}
            <section>
              <div className="p-4 flex-grow max-h-full overflow-auto">
                <h1 className="text-xl font-bold mb-4">Categories</h1>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center">
                    <FiShoppingCart size={32} className="text-primary mb-2" />
                    <h3 className="text-center">Category 1</h3>
                  </div>
                  <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center">
                    <FiHeart size={32} className="text-primary mb-2" />
                    <h3 className="text-center">Category 2</h3>
                  </div>
                  <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center">
                    <FiTag size={32} className="text-primary mb-2" />
                    <h3 className="text-center">Category 3</h3>
                  </div>
                  <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center">
                    <FiCoffee size={32} className="text-primary mb-2" />
                    <h3 className="text-center">Category 4</h3>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="p-4 flex-grow max-h-full overflow-auto">
                <h2 className="text-xl font-bold mb-4">Our Products</h2>
                <ProductList />
              </div>
            </section>
          </div>
          {/* <div className="px-8 py-2 flex-grow max-h-full overflow-auto">
          </div> */}
        </div>
      </div>
    </>
  );
}
