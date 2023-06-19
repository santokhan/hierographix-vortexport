export interface Navs {
  name: string;
  url?: string;
}
export interface Dropodown {
  icon: string;
  name: string;
  url: string;
}
export interface NavsDD {
  name: string;
  url: string;
  dropdown: Dropodown[];
}

export const navs = [
  { name: "Home", url: "/" },
  {
    name: "Expertise",
    dropdown: [
      { icon: "marketing", name: "Marketing", url: "/marketing" },
      { icon: "design", name: "Design", url: "/design" },
      {
        icon: "code",
        name: "Frontend Development",
        url: "/frontend-development",
      },
      {
        icon: "brackets",
        name: "Backend Development",
        url: "/backend-development",
      },
      { icon: "devops", name: "Dev Ops", url: "/dev-ops" },
      {
        icon: "ai",
        name: "Vortexpert's AI & Data Research",
        url: "/data-research",
      },
    ],
  },
  { name: "Our Portfolio", url: "/our-portfolio" },
  { name: "Blog", url: "/blog" },
];
