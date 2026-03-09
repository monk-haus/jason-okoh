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
    id: "vol-6",
    title: "Malick Thiaw",
    client: "Footballer Fits",
    tag: "FOOTBALLER FITS",
    hero: "/assets/images/malick-thiaw/01.webp",
    images: [
      "/assets/images/malick-thiaw/01.webp",
      "/assets/images/malick-thiaw/vid-1.webm",
      "/assets/images/malick-thiaw/02.webp",
      "/assets/images/malick-thiaw/03.webp",
      "/assets/images/malick-thiaw/04.webp",
      "/assets/images/malick-thiaw/05.webp",
      "/assets/images/malick-thiaw/06.webp",
      "/assets/images/malick-thiaw/07.webp",
      "/assets/images/malick-thiaw/08.webp",
      "/assets/images/malick-thiaw/09.webp",
      "/assets/images/malick-thiaw/vid-2.webm",
      "/assets/images/malick-thiaw/vid-3.webm",
      "/assets/images/malick-thiaw/vid-4.webm",
    ],
  },
  {
    id: "vol-4",
    title: "KidWild",
    client: "NME Magazine",
    tag: "NME",
    hero: "/assets/images/kidwild/cover.webp",
    images: [
      "/assets/images/kidwild/cover.webp",
      "/assets/images/kidwild/01.webp",
      "/assets/images/kidwild/02.webp",
      "/assets/images/kidwild/03.webp",
      "/assets/images/kidwild/04.webp",
      "/assets/images/kidwild/05.webp",
      "/assets/images/kidwild/06.webp",
      "/assets/images/kidwild/07.webp",
      "/assets/images/kidwild/08.webp",
      "/assets/images/kidwild/09.webp",
      "/assets/images/kidwild/10.webp",
    ],
  },
  {
    id: "vol-5",
    title: "Goddy Q",
    client: "IGQWT",
    tag: "IGQWT",
    hero: "/assets/images/goddy-q/vid-1.webm",
    images: [
      "/assets/images/goddy-q/vid-1.webm",
      "/assets/images/goddy-q/01.webp",
      "/assets/images/goddy-q/02.webp",
    ],
  },
  {
    id: "vol-3",
    title: "Dvany Cruz",
    client: "Increments Vol. 3",
    tag: "INCREMENTS",
    hero: "/assets/images/dvany-cruz/cover.webp",
    images: [
      "/assets/images/dvany-cruz/cover.webp",
      "/assets/images/dvany-cruz/01.webp",
      "/assets/images/dvany-cruz/02.webp",
      "/assets/images/dvany-cruz/03.webp",
      "/assets/images/dvany-cruz/04.webp",
      "/assets/images/dvany-cruz/05.webp",
      "/assets/images/dvany-cruz/06.webp",
    ],
  },
  {
    id: "vol-2",
    title: "Marcus Pancho",
    client: "Increments Vol. 2",
    tag: "INCREMENTS",
    hero: "/assets/images/marcus-pancho/cover.webp",
    images: [
      "/assets/images/marcus-pancho/cover.webp",
      "/assets/images/marcus-pancho/01.webp",
      "/assets/images/marcus-pancho/02.webp",
      "/assets/images/marcus-pancho/03.webp",
      "/assets/images/marcus-pancho/04.webp",
      "/assets/images/marcus-pancho/05.webp",
      "/assets/images/marcus-pancho/06.webp",
    ],
  },
  {
    id: "vol-1",
    title: "Jason Okoh",
    client: "Increments Vol. 1",
    tag: "INCREMENTS",
    hero: "/assets/images/jason-okoh/cover.webp",
    images: [
      "/assets/images/jason-okoh/cover.webp",
      "/assets/images/jason-okoh/01.webp",
      "/assets/images/jason-okoh/02.webp",
      "/assets/images/jason-okoh/03.webp",
      "/assets/images/jason-okoh/04.webp",
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
