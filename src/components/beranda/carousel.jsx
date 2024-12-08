import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const Carousel = () => {
  const images = [
    "banner.png",
    "https://via.placeholder.com/800x400/33A1FF/FFFFFF?text=Banner+2",
    "https://via.placeholder.com/800x400/FF33A1/FFFFFF?text=Banner+3",
  ];

  // State untuk gambar yang aktif
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi untuk pindah ke gambar berikutnya
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fungsi untuk pindah ke gambar sebelumnya
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Fungsi untuk pindah ke slide tertentu berdasarkan titik
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Mengatur auto-slide dengan interval
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Berganti gambar setiap 3 detik

    return () => clearInterval(interval); // Bersihkan interval ketika komponen unmount
  }, []);

  // Swipeable hooks untuk mendeteksi swipe kiri dan kanan
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true, // Menghindari scroll saat swipe
    trackMouse: true, // Membolehkan swipe dengan mouse di desktop
  });

  return (
    <div className="relative w-full" {...handlers}>
      {/* Gambar carousel */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[125px] transition-all duration-300 bg-cover bg-center bg-no-repeat"
        />
      </div>

      {/* Dots navigasi */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1 h-1 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
