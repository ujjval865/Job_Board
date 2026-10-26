import React from "react";
import { features } from "../data/data";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Vite fix
const Slider = SlickSlider.default || SlickSlider;

function Features() {
  const settings = {
    dots: true,
    infinite: features.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 transition-colors duration-500 dark:bg-slate-950 sm:py-20 md:py-24">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-teal-400/25 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
            Why Choose Us
          </span>

          <h2 className="larian mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
            Everything You Need to{" "}
            <span className="mt-2 inline-block text-emerald-600 dark:text-emerald-400">
              Work Remotely
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            We built powerful features that make finding and landing remote jobs
            simple, transparent, and enjoyable.
          </p>
        </div>

        {/* Features Slider */}
        <div className="features-slider">
          <Slider {...settings}>
            {features.map((feature) => (
              <div key={feature.id} className="px-3 py-4">
                <div className="group relative h-full min-h-[260px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300 hover:bg-white hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-700 dark:hover:bg-slate-800">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"></div>
                  {/* Icon */}
                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 transition-all duration-500 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-lg  group-hover:shadow-emerald-200  dark:bg-emerald-950/60 dark:text-emerald-400 dark:ring-emerald-900  dark:group-hover:bg-emerald-500  dark:group-hover:text-white  dark:group-hover:shadow-emerald-950  ">
                    {React.createElement(feature.icon, {
                      size: 27,
                      strokeWidth: 2,
                    })}
                  </div>

                  <h3 className="relative mb-3 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                    {feature.title}
                  </h3>

                  <p className="relative text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500 group-hover:w-full"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Features;
