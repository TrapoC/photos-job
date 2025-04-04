import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PhotoDetail } from "@/components/ui/photo-detail";
import { photos } from "@/lib/photo-data";

const PhotoDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const photoId = parseInt(id || "0");
  
  const photoIndex = photos.findIndex(p => p.id === photoId);
  const photo = photos[photoIndex];
  
  const prevPhotoId = photoIndex > 0 ? photos[photoIndex - 1].id : undefined;
  const nextPhotoId = photoIndex < photos.length - 1 ? photos[photoIndex + 1].id : undefined;
  
  // Scroll to top when photo changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [photoId]);
  
  if (!photo) {
    return <Navigate to="/" />;
  }
  
  return (
    <main className="w-full min-h-screen bg-black text-white">
      <Header />
      <PhotoDetail 
        photo={photo} 
        prevPhotoId={prevPhotoId} 
        nextPhotoId={nextPhotoId} 
      />
      <Footer />
    </main>
  );
};

export default PhotoDetailPage;