export interface Photo {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  dimensions: string;
  year: number;
}

export const photos: Photo[] = [
  {
    id: 1,
    title: "Urban Shadows",
    description: "Contrast of light and shadow in urban environment",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop",
    category: "Street",
    dimensions: "4000 x 6000",
    year: 2023
  },
  {
    id: 2,
    title: "Concrete Dreams",
    description: "Architectural study of modern brutalist structures",
    imageUrl: "https://images.unsplash.com/photo-1486728297118-82a07bc48a28?q=80&w=2076&auto=format&fit=crop",
    category: "Architecture",
    dimensions: "5000 x 3333",
    year: 2022
  },
  {
    id: 3,
    title: "Neon Nights",
    description: "City lights reflecting in rain-soaked streets",
    imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop",
    category: "Night",
    dimensions: "4500 x 3000",
    year: 2023
  },
  {
    id: 4,
    title: "Solitude",
    description: "Lone figure against vast landscape",
    imageUrl: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=2070&auto=format&fit=crop",
    category: "Landscape",
    dimensions: "5500 x 3667",
    year: 2021
  },
  {
    id: 5,
    title: "Geometric Patterns",
    description: "Study of repeating patterns in modern architecture",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1965&auto=format&fit=crop",
    category: "Architecture",
    dimensions: "4000 x 6000",
    year: 2022
  },
  {
    id: 6,
    title: "Urban Motion",
    description: "Long exposure capturing the flow of city life",
    imageUrl: "https://images.unsplash.com/photo-1506102383123-c8ef1e872756?q=80&w=1470&auto=format&fit=crop",
    category: "Street",
    dimensions: "3840 x 2160",
    year: 2023
  },
  {
    id: 7,
    title: "Reflections",
    description: "Urban landscape mirrored in glass facades",
    imageUrl: "https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?q=80&w=1470&auto=format&fit=crop",
    category: "Architecture",
    dimensions: "4200 x 2800",
    year: 2021
  },
  {
    id: 8,
    title: "Monochrome Portrait",
    description: "Dramatic black and white portrait study",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
    category: "Portrait",
    dimensions: "3600 x 5400",
    year: 2022
  },
  {
    id: 9,
    title: "Industrial Decay",
    description: "Beauty in abandoned industrial spaces",
    imageUrl: "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?q=80&w=1974&auto=format&fit=crop",
    category: "Urban",
    dimensions: "5000 x 3333",
    year: 2023
  },
  {
    id: 10,
    title: "Minimal Composition",
    description: "Study in negative space and minimalism",
    imageUrl: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=1470&auto=format&fit=crop",
    category: "Abstract",
    dimensions: "4000 x 2667",
    year: 2022
  },
  {
    id: 11,
    title: "Urban Geometry",
    description: "Geometric patterns in city architecture",
    imageUrl: "https://images.unsplash.com/photo-1485627941502-d2e6429a8af0?q=80&w=1470&auto=format&fit=crop",
    category: "Architecture",
    dimensions: "4500 x 3000",
    year: 2021
  },
  {
    id: 12,
    title: "Shadow Play",
    description: "Dramatic shadows creating abstract patterns",
    imageUrl: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1587&auto=format&fit=crop",
    category: "Abstract",
    dimensions: "3840 x 2160",
    year: 2023
  }
];

export const categories = Array.from(new Set(photos.map(photo => photo.category)));