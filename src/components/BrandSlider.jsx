import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const brands = [
  "/assets/images/brand_logo/brand01.png",
  "/assets/images/brand_logo/brand02.png",
  "/assets/images/brand_logo/brand03.png",
  "/assets/images/brand_logo/brand04.png",
  "/assets/images/brand_logo/brand05.png",
  "/assets/images/brand_logo/brand06.png",
  "/assets/images/brand_logo/brand07.png",
  "/assets/images/brand_logo/brand08.png",
  "/assets/images/brand_logo/brand09.png",
];

function BrandSlider() {
  return (
    <section className="w-full overflow-hidden bg-white">

      <Swiper
        modules={[Autoplay]}

        /* -----------------------------------------
           CONTINUOUS LOOP
        ----------------------------------------- */
        loop={true}

        /* Right → Left */
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}

        /* Movement speed */
        speed={3000}

        /* No gap between slides */
        spaceBetween={0}

        /* Desktop */
        slidesPerView={5}

        /* Responsive */
        breakpoints={{
          320: {
            slidesPerView: 2,
          },

          480: {
            slidesPerView: 2,
          },

          640: {
            slidesPerView: 3,
          },

          768: {
            slidesPerView: 4,
          },

          1024: {
            slidesPerView: 5,
          },

          1280: {
            slidesPerView: 6,
          },

          1536: {
            slidesPerView: 7,
          },
        }}

        className="w-full"
      >

        {brands.map((brand, index) => (
          <SwiperSlide key={index}>

            {/* =====================================
                BRAND BOX
            ===================================== */}

            <div
              className="
                flex
                h-[100px]
                w-full
                items-center
                justify-center
                border-b
                border-r
                border-dashed
                border-neutral-200
                px-8
                py-6
              "
            >

              {/* =================================
                  BRAND IMAGE
              ================================= */}

              <img
                src={brand}
                alt={`Brand Logo ${index + 1}`}
                className="
                  h-[250px]
                  w-auto
                  max-w-[250px]
                  object-contain
                  opacity-80
                  transition
                  duration-300
                  hover:scale-110
                  hover:opacity-100
                "
              />

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
}

export default BrandSlider;