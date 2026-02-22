export interface Project {
  id: string;
  title: string;
  client: string;
  tag: string;
  hero: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "vol-1",
    title: "Vol. 1",
    client: "Increments",
    tag: "INCREMENTS",
    hero: "/assets/images/vol-one/vol-1-cover.webp",
    images: [
      "/assets/images/vol-one/vol-1-cover.webp",
      "/assets/images/vol-one/01-01.webp",
      "/assets/images/vol-one/01-02.webp",
      "/assets/images/vol-one/01-03.webp",
      "/assets/images/vol-one/01-04.webp",
    ],
  },
  {
    id: "vol-2",
    title: "Vol. 2",
    client: "Increments",
    tag: "INCREMENTS",
    hero: "/assets/images/vol-two/vol-2-cover.webp",
    images: [
      "/assets/images/vol-two/vol-2-cover.webp",
      "/assets/images/vol-two/02-01.webp",
      "/assets/images/vol-two/02-02.webp",
      "/assets/images/vol-two/02-03.webp",
      "/assets/images/vol-two/02-04.webp",
      "/assets/images/vol-two/02-05.webp",
      "/assets/images/vol-two/02-06.webp",
    ],
  },
  {
    id: "vol-3",
    title: "Vol. 3",
    client: "Increments",
    tag: "INCREMENTS",
    hero: "/assets/images/vol-three/vol-3-cover.webp",
    images: [
      "/assets/images/vol-three/vol-3-cover.webp",
      "/assets/images/vol-three/03-01.webp",
      "/assets/images/vol-three/03-02.webp",
      "/assets/images/vol-three/03-03.webp",
      "/assets/images/vol-three/03-04.webp",
      "/assets/images/vol-three/03-05.webp",
      "/assets/images/vol-three/03-06.webp",
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
