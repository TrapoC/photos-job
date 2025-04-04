import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Photo } from "@/lib/photo-data";

interface PhotoDetailProps {
  photo: Photo;
  nextPhotoId?: number;
  prevPhotoId?: number;
}

export function PhotoDetail({ photo, nextPhotoId, prevPhotoId }: PhotoDetailProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Close button */}
        <div className="flex justify-end mb-4">
          <Link 
            to="/" 
            className="p-2 rounded-full bg-gray-900 hover:bg-gray-800 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </Link>
        </div>
        
        {/* Photo */}
        <div className="relative mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isImageLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <img 
              src={photo.imageUrl} 
              alt={photo.title} 
              className="w-full h-auto max-h-[80vh] object-contain mx-auto"
              onLoad={() => setIsImageLoaded(true)}
            />
          </motion.div>
          
          {/* Navigation arrows */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
            {prevPhotoId ? (
              <button 
                onClick={() => navigate(`/photo/${prevPhotoId}`)}
                className="p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
                aria-label="Previous photo"
              >
                <ArrowLeft size={24} />
              </button>
            ) : <div />}
            
            {nextPhotoId ? (
              <button 
                onClick={() => navigate(`/photo/${nextPhotoId}`)}
                className="p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
                aria-label="Next photo"
              >
                <ArrowRight size={24} />
              </button>
            ) : <div />}
          </div>
        </div>
        
        {/* Photo details */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{photo.title}</h1>
            
            <div className="flex flex-wrap items-center text-gray-400 mb-6 gap-x-4 gap-y-2">
              <span>{photo.category}</span>
              <span className="hidden md:inline">•</span>
              <span>{photo.year}</span>
              <span className="hidden md:inline">•</span>
              <span>{photo.dimensions}</span>
            </div>
            
            <p className="text-gray-300 mb-8 max-w-2xl">{photo.description}</p>
            
            <div className="border-t border-gray-800 pt-8 mt-8">
              <Link 
                to="/" 
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to all photos
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}