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
      { icon: "speaker", name: "Marketing", url: "/marketing" },
      { icon: "design", name: "Design", url: "/design" },
      {
        icon: "code",
        name: "Frontend Development",
        url: "/frontend-development",
      },
      {
        icon: "curly-braces",
        name: "Backend Development",
        url: "/backend-development",
      },
      { icon: "command-line", name: "Dev Ops", url: "/dev-ops" },
      {
        icon: "brain",
        name: "Vortexpert's AI & Data Research",
        url: "/data-research",
      },
    ],
  },
  { name: "Our Portfolio", url: "/our-portfolio" },
  { name: "Blog", url: "/blog" },
];
