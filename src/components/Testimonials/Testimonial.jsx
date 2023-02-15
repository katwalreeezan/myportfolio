import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.PNG";
import profilePic2 from "../../img/profile2.PNG";
import profilePic3 from "../../img/profile3.PNG";
import profilePic4 from "../../img/Profile4.PNG";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        " I must say that the service I received from him was exceptional and I am more than pleased with the work that he accomplished for me. I am so content with the results that I am happy to recommend him to anyone who is looking for high-quality service.",
    },
    {
      img: profilePic2,
      review:
        " he is highly skilled and experienced in his work, and he definitely knows what he's doing. All in all, I am extremely impressed with the quality of service I received from him and I would not hesitate to work with him again in the future.",
    },
    {
      img: profilePic3,
      review:
        "I'm more than happy to recommend this individual to others because of their brilliant performance and exceptional expertise in their field. It's always such a pleasure to have experiences like this where the quality of work done is truly top-notch.",
    },
    {
      img: profilePic4,
      review:
        "I'm truly impressed with this individual's level of dedication and hard work, and I have no doubt that they will continue to achieve great things in the future. Here's hoping that I continue to have such positive experiences with other individuals as well.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients  </span>
        <span> Review</span>
        
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
