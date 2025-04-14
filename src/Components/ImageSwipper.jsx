import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const ImageSwipper = () => {
  const paginationRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && swiperInstance.pagination && paginationRef.current) {
      swiperInstance.params.pagination.el = paginationRef.current;
      swiperInstance.pagination.init();
      swiperInstance.pagination.update();
    }
  }, [swiperInstance]);

  return (
    <div className="hidden md:flex flex-col justify-start items-center bg-red-100 rounded-xl w-1/2 max-h-screen p-6 relative overflow-hidden">
      {/* النص العلوي */}
      <p className="text-center text-gray-800 text-lg mb-3 max-w-md leading-relaxed">
        تتبع أداء متجرك من خلال إحصائيات تفاعلية للعملاء والشحن، مما يجعل إدارة
        متجرك بشكل فعال وسهل.
      </p>

      {/* نقاط التوجيه تحت النص */}
      <div
        ref={paginationRef}
        className="swiper-pagination-custom flex justify-center space-x-2 mb-4"
      />

      {/* Swiper الصور */}
      <div className="overflow-hidden w-[90%] relative">
        <Swiper
          onSwiper={setSwiperInstance}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="w-full h-[500px] rounded-xl"
        >
          <SwiperSlide>
            <img
              src="/images/swipper.png"
              alt="إحصائيات المتجر"
              className="object-content w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/swipper.png"
              alt="تحليلات المبيعات"
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/swipper.png"
              alt="أفضل المنتجات"
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* تنسيق bullets */}
      <style>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: white;
          opacity: 0.6;
          margin: 0 4px !important;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }

        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: white;
          width: 24px;
          border-radius: 9999px;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ImageSwipper;
