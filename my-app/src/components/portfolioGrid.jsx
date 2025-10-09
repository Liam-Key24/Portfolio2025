import { useState } from "react";

const images = [
  {
    src: "/Photos/caroline-badran-4KAgAZyWvHQ-unsplash.jpg",
    alt: "Editorial portrait 1",
    href: "/projects/photo1",
  },
  {
    src: "/Photos/caroline-badran-PYsuxWcqAHE-unsplash.jpg", 
    alt: "Editorial portrait 2",
    href: "/projects/photo2",
  },
  {
    src: "/Photos/damien-dufour-ldXT4F6uxeY-unsplash.jpg",
    alt: "Editorial portrait 3",
    href: "/projects/photo3",
  },
  {
    src: "/Photos/danny-greenberg-76xR73MGDvI-unsplash.jpg",
    alt: "Editorial portrait 4",
    href: "/projects/photo4",
  },
  {
    src: "/Photos/eugene-golovesov-BUn1-xzbxc0-unsplash.jpg",
    alt: "Editorial portrait 5",
    href: "/projects/photo5",
  },
  {
    src: "/Photos/karsten-winegeart-PvA4Po0CZto-unsplash.jpg",
    alt: "Editorial portrait 6",
    href: "/projects/photo6",
  },
];

export default function PortfolioGrid() {
  const [tooltip, setTooltip] = useState({ text: "", x: 0, y: 0, visible: false });

  const handleMouseMove = (e, title) => {
    setTooltip({
      text: title,
      x: e.clientX,
      y: e.clientY,
      visible: true,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-10 cursor-none relative">
      {/* Masonry-style image grid */}
      <div className="columns-2 lg:columns-3 gap-6 space-y-6">
        
        {images.map((img, index) => (
          <a
            key={index}
            href={img.href}
            className="block break-inside-avoid group"
            onMouseMove={(e) => handleMouseMove(e, img.alt)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full object-cover transition duration-300 group-hover:opacity-90 group-hover:scale-[1.02]"
            />
          </a>
        ))}
        </div>
      {/* Custom tooltip */}
      {tooltip.visible && (
        <div
          className="fixed  text-sm px-2 py-1  pointer-events-none transform -translate-x-1/2 -translate-y-full"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
            <h1 className="text-blue-400 font-bold text-8xl">
          {tooltip.text}
            </h1>
        </div>
      )}
    </main>
  );
}
