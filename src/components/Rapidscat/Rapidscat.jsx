import React, { useEffect, useState } from "react";
import sateliteImg from "../../assets/satelite1.jpg";

const Rapidscat = () => {
  const [apodData, setApodData] = useState(null);
    console.log(apodData)
  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=azrcPSop2fVRo8dUmVX7uwbWHAL2Qdu0xybgtiM7")
      .then((response) => response.json())
      .then((data) => setApodData(data))
      .catch((error) => console.error("Error fetching APOD data: ", error));
  }, []);

  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              {apodData && (
                <img
                  src={apodData.url}
                  alt={apodData.title}
                  className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
                />
              )}
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                our mission
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Rapidscat
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                molestiae reprehenderit expedita corporis, non doloremque.
                Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Eos molestiae reprehenderit
                expedita corporis, non doloremque. Consequatur consectetur
                quisquam qui sunt.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
