import { testimonials } from "./testimonialData";
import { useState } from "react";

const Testimonials = () => {
  const [selectedPostIndex, setSelectedPostIndex] = useState(0);

  const navigateImage = (direction) => {
    const currentIndex = selectedPostIndex;
    const nextIndex =
      (((currentIndex + direction) % testimonials.length) +
        testimonials.length) %
      testimonials.length;
    setSelectedPostIndex(nextIndex);
  };
  return (
    <>
      <div className="bg-gradient-to-r from-[rgba(199,19,240,0.45)] to-rgba(37,206,243,0.30)">
        <section>
          <div className="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
            <div className="relative mx-auto max-w-4xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Testimonials
                </h2>
              </div>
              <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                  <div className="flex flex-1 flex-col justify-between bg-[rgba(79,70,115,0.35)] p-6">
                    <div className="flex-1 text-center lg:px-20">
                      <p className="mt-3 text-sm text-[#C6C2D6]">
                        {testimonials[selectedPostIndex].description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-center">
                      <div>
                        <div className="flex items-start">
                          <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={
                                testimonials[selectedPostIndex].author.imageUrl
                              }
                              alt={testimonials[selectedPostIndex].author.title}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-base font-medium text-white">
                              {testimonials[selectedPostIndex].author.name}
                            </div>
                            <div className="text-base font-medium text-indigo-200">
                              {testimonials[selectedPostIndex].author.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-white flex gap-5 justify-center">
                  <button className="" onClick={() => navigateImage(-1)}>
                    <span className="material-symbols-outlined rounded-full border p-2 shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      arrow_back
                    </span>
                  </button>
                  <button className="" onClick={() => navigateImage(1)}>
                    <span className="material-symbols-outlined rounded-full border p-2 shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
