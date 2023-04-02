import ProductComp from "../components/Product";
import Header from "../components/Header";
import useFetchAllProducts from "../services/products/useFetchProduct";
import Grid from "../components/Grid";
import Footer from "../components/Footer";
import { Spinner } from "@chakra-ui/react";

function Home() {
  const { data: products, isLoading } = useFetchAllProducts(8);
  return (
    <div className="App">
      <div className="w-full">
        <Header />
        <div className="flex bg-white" style={{ height: "600px" }}>
          <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div className="flex flex-col items-start">
              <h2 className="text-3xl mb-2 font-normal text-gray-800 md:text-4xl">
                Conheça a iniciativa do{" "}
              </h2>
              <h2 className="rainbow-text text-7xl font-semibold">
                Open Food Facts
              </h2>
              <p className="mt-2 text-sm text-gray-500 md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis commodi cum cupiditate ducimus, fugit harum id
                necessitatibus odio quam quasi, quibusdam rem tempora
                voluptates. Cumque debitis dignissimos id quam vel!
              </p>
              <div className="flex justify-center lg:justify-start mt-10">
                <a
                  className="px-4 py-3 bg-red-700 text-gray-200 text-base font-semibold rounded hover:bg-red-800 transition-all"
                  href="#"
                >
                  Get Started
                </a>
                <a
                  className="mx-4 px-4 py-3 bg-green-100 text-gray-900 text-base font-semibold rounded hover:bg-green-200 transition-all"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div
            className="hidden lg:block lg:w-1/2"
            style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
          >
            <div
              className="h-full object-cover"
              style={{
                backgroundImage:
                  "url(https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_960_720.jpg)",
              }}
            >
              <div className="h-full bg-black opacity-25"></div>
            </div>
          </div>
        </div>
        <Grid />
        <div className="px-12 py-12 bg-slate-100 ">
          <h1 className="mb-8">
            <span className="text-4xl font-semibold">Produtos</span>
          </h1>
          <div className="grid justify-center grid-cols-4 gap-12">
            {isLoading ? (
              <Spinner size="xl" />
            ) : (
              <>
                {products?.map((item, i) => (
                  <ProductComp i={i} item={item} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
