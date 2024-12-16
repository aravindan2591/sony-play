export type IMAGE = {
  id: number;
  background: string;
  thumbnail: string;
  cutout?: string;
};

export const IMAGES = [
  {
    id: 0,
    background: "/images/1-background.png",
    thumbnail: "/images/1-thumbnail.png",
    cutout: "/images/1-foreground-cutout.png",
  },
  {
    id: 1,
    background: "/images/2-background.png",
    thumbnail: "/images/2-thumbnail.png",
  },
  {
    id: 2,
    background: "/images/3-background.png",
    thumbnail: "/images/3-thumbnail.png",
  },
  {
    id: 3,
    background: "/images/4-background.png",
    thumbnail: "/images/4-thumbnail.png",
  },
  {
    id: 4,
    background: "/images/5-background.png",
    thumbnail: "/images/5-thumbnail.png",
  },
  {
    id: 5,
    background: "/images/6-background.png",
    thumbnail: "/images/6-thumbnail.png",
  },
];
