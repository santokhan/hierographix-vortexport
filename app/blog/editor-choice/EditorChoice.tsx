import Headline from "@/components/shared/Headline";
import { BCard, BlogCardWhite } from "@/components/shared/blog-card/BlogCard";

export const editorChoice: BCard[] = [
  {
    caption: "Vortexpert's AI & Data Research",
    src: "rise-of-ai",
    title:
      "Revolutionizing Healthcare with AI: From Diagnostics to Personalized Treatment",
    url: "/blog/4",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    caption: "DESIGN, Vortexpert's AI & Data Research",
    src: "potential-of-ai",
    title:
      "Machine Learning in UX Design: Creating Intuitive and Personalized User Interfaces",
    url: "/blog/5",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    src: "ai-in-web",
    caption: "DESIGN, Vortexpert's AI & Data Research",
    title:
      "The Intersection of AI and Web Design: Crafting Intelligent and Adaptive Design",
    url: "/blog/6",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    src: "ai-in-web",
    caption: "Backend development",
    title:
      "Demystifying Backend Development: Understanding the Core Technologies and Concepts",
    url: "/blog/7",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
];

export default function EditorChoice() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-16 lg:py-20 space-y-10">
        <Headline>
          <span className="text-gray-800">Editor&apos;s</span>{" "}
          <span className="text-teal-500">Pick</span>
        </Headline>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {editorChoice.map((e: BCard, i: number) => (
            <BlogCardWhite data={e} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
