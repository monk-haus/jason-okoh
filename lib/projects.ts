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
    title: "Jason Okoh",
    client: "Increments Vol. 1",
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
    title: "Marcos Pancho",
    client: "Increments Vol. 2",
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
    title: "Dvany Cruz",
    client: "Increments Vol. 3",
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
  {
    id: "vol-4",
    title: "KidWild",
    client: "NME Magazine",
    tag: "NME",
    hero: "/assets/images/vol-four/vol-4-cover.webp",
    images: [
      "/assets/images/vol-four/vol-4-cover.webp",
      "/assets/images/vol-four/04-01.webp",
      "/assets/images/vol-four/04-02.webp",
      "/assets/images/vol-four/04-03.webp",
      "/assets/images/vol-four/04-04.webp",
      "/assets/images/vol-four/04-05.webp",
      "/assets/images/vol-four/04-06.webp",
      "/assets/images/vol-four/04-07.webp",
      "/assets/images/vol-four/04-08.webp",
      "/assets/images/vol-four/04-09.webp",
      "/assets/images/vol-four/04-10.webp",
    ],
  },
  {
    id: "vol-5",
    title: "Goddy Q",
    client: "INQWT",
    tag: "INQWT",
    hero: "/assets/images/vol-five/05-video.webm",
    images: [
      "/assets/images/vol-five/05-video.webm",
      "/assets/images/vol-five/05-01.webp",
      "/assets/images/vol-five/05-02.webp",
    ],
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
