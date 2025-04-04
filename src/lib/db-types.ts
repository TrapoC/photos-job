export type Schema = {
  photos: {
    id?: number;
    title: string;
    description?: string | null;
    imageUrl: string;
    category: string;
    dimensions?: string | null;
    year?: number | null;
    createdAt?: string;
  }
}