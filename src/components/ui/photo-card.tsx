import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Photo } from "@/lib/photo-data";
import { cn } from "@/lib/utils";

interface PhotoCardProps {
  photo: Photo;
  index: number;
}

export function PhotoCard({ photo, index }: PhotoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (cardRef.current) {
      setDimensions({
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight
      });
    }
  }, []);

  // Determine if the card should be large based on its index
  const isLarge = index % 5 === 0 || index % 5 === 3;

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden bg-gray-900",
        isLarge ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/photo/${photo.id}`} className="block w-full h-full">
        {/* Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={photo.imageUrl}
            alt={photo.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
          
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black transition-opacity duration-500 ease-out"
            style={{ opacity: isHovered ? 0.2 : 0.5 }}
          />
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
          <motion.h3 
            className="text-xl md:text-2xl font-bold mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: isHovered ? 0 : 20, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
          >
            {photo.title}
          </motion.h3>
          
          <motion.div
            className="flex items-center text-sm text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: isHovered ? 0 : 20, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <span>{photo.category}</span>
            <span className="mx-2">•</span>
            <span>{photo.year}</span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}