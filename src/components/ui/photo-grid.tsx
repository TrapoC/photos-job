import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PhotoCard } from "./photo-card";
import { Photo, categories } from "@/lib/photo-data";

interface PhotoGridProps {
  photos: Photo[];
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>(photos);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay for filter change
    const timer = setTimeout(() => {
      if (selectedCategory) {
        setFilteredPhotos(photos.filter(photo => photo.category === selectedCategory));
      } else {
        setFilteredPhotos(photos);
      }
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [selectedCategory, photos]);

  return (
    <div className="w-full">
      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center mb-8 gap-4">
        <button
          className={`px-4 py-2 text-sm uppercase tracking-wider transition-colors ${
            selectedCategory === null ? "text-white" : "text-gray-500 hover:text-white"
          }`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-sm uppercase tracking-wider transition-colors ${
              selectedCategory === category ? "text-white" : "text-gray-500 hover:text-white"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0.5 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {filteredPhotos.map((photo, index) => (
          <PhotoCard key={photo.id} photo={photo} index={index} />
        ))}
      </motion.div>
      
      {/* Empty State */}
      {filteredPhotos.length === 0 && !isLoading && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">No photos found in this category.</p>
        </div>
      )}
    </div>
  );
}