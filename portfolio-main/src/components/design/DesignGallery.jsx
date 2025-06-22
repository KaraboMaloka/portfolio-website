import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./DesignGallery.scss";

const designItems = [
  {
    title: "EPF Heritage Hackathon",
    image: "./CrazyCodeErrs.png",
    description: "Figma Prototype that won us the 1st place at the Empire Partner Foundation Heritage Hackathon.",
    link: "https://www.figma.com/proto/InFM0JAOE10d5bc8Yrda4P/Crazy-Code-Errs?node-id=13-412&p=f&t=8WkAXWNUcO2twZZH-1&scaling=min-zoom&content-scaling=fixed&page-id=3%3A3&starting-point-node-id=13%3A412",
  },
  {
    title: "SURGE",
    image: "./surge.png",
    description: "A personalised AI-powered portfolio management system. Our UJ Advanced Diploma Year-long Group Project.",
    link: "https://www.figma.com/proto/nuThevGxchA3eSqRwlaMMU/Syntax-Slayer?node-id=2-2&p=f&t=XvQiO753UqFegyWZ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1",
  },
  {
    title: "Medi-Go App (OScripts)",
    image: "./oscripts.png",
    description: "Figma Prototype for a Medi-on-the-go application that would make healthcare accessible at a touch of a finger.",
    link: "https://www.figma.com/proto/j6JdwPerQslYsyJ1h1CLZm/Medi-Go?node-id=1-7&p=f&t=0l3jF43Rrymp3otL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
  },
  {
    title: "EAS Super App",
    image: "./eas.png",
    description: "Figma Prototype for the tourism sector e-hailing business. Client requested a platform to compare all modes of transport.",
    link: "https://www.figma.com/proto/VxjKEklKt0hNlzxfGvORZw/EAS-Super-App?node-id=291-12254&p=f&t=htqZWmOskqeZ4Ipc-1&scaling=scale-down&content-scaling=fixed&page-id=15%3A284&starting-point-node-id=291%3A11865&show-proto-sidebar=1",
  },
  {
    title: "MASS",
    image: "./mass.png",
    description: "A Master Assessment Scheduling System for UJ Third Year Group Project. A platform to assist students and lecturers avoid any schedule conflicts.",
    link: "https://www.figma.com/proto/hsWbPvhC3xpV3tw3XOiqwZ/MASS-SYSTEM?node-id=689-404&t=yH6cwUmvGNWWVwol-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=689%3A404&show-proto-sidebar=1",
  },
  {
    title: "UJ Artwork",
    image: "./CADS_Invitation.png",
    description: "I design 70% of the artwork for the UJ School of Consumer Intelligence and Information Systems, anything from events to Public Lectures and Videos.",
    link: "https://www.canva.com/design/DAGoqy8Ark8/LsWaxyGvGr6_zohrGeI59w/edit?utm_content=DAGoqy8Ark8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
];

const DesignGallery = () => {
  return (
    <div className="design-gallery">
      <h1 className="section-title">Design Gallery</h1>
      
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {designItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="design-card">
              <img src={item.image} alt={item.title} />
              <div className="text-container">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <button>View Design</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DesignGallery;