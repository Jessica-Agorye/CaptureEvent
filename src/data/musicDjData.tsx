export type MusicDJ = {
  id: number;
  name: string;
  city: string;
  rating: number;
  price: string;
  image: string;
  description?: string;
};

export const MusicDJs: MusicDJ[] = [
  {
    id: 1,
    name: "Lara James",
    city: "Lagos",
    rating: 4.8,
    price: "$200/session",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "David Osei",
    city: "Accra",
    rating: 4.5,
    price: "$180/session",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Mia Benson",
    city: "Nairobi",
    rating: 4.9,
    price: "$250/session",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Tunde Bello",
    city: "Abuja",
    rating: 4.6,
    price: "$190/session",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Fatima Said",
    city: "Cairo",
    rating: 4.7,
    price: "$210/session",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
];
