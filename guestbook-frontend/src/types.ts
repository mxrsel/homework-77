export interface Review {
  id: number;
  author: string;
  message: string;
  image: string | null;
}

export interface ReviewMutation {
  author: string
  message: string;
  image: File | null;
}