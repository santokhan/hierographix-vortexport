import Headline from "@/components/shared/Headline";
import BlogCard, { BCard } from "@/components/shared/blog-card/BlogCard";
import MostPopular from "../most-popular/MostPopular";

export const cardsData: BCard[] = [
  {
    caption: "Vortexpert's AI & Data Research",
    src: "rise-of-ai",
    title:
      "Revolutionizing Healthcare with AI: From Diagnostics to Personalized Treatment",
    url: "/blog/11",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    caption: "DESIGN, Vortexpert's AI & Data Research",
    src: "potential-of-ai",
    title:
      "Machine Learning in UX Design: Creating Intuitive and Personalized User Interfaces",
    url: "/blog/12",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    src: "ai-in-web",
    caption: "DESIGN, Vortexpert's AI & Data Research",
    title:
      "The Intersection of AI and Web Design: Crafting Intelligent and Adaptive Design",
    url: "/blog/12",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    src: "ai-in-web",
    caption: "Backend development",
    title:
      "Demystifying Backend Development: Understanding the Core Technologies and Concepts",
    url: "/blog/13",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
];

export const cardsDataArticle: BCard[] = [
  {
    caption: "Vortexpert's AI & Data Research",
    src: "rise-of-ai",
    title:
      "Unlocking the Potential of AI: Exploring Its Impact on Business and Society",
    url: "/blog/14",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    caption: "DESIGN, Vortexpert's AI & Data Research",
    src: "potential-of-ai",
    title:
      "The Future of Frontend Development: Trends and Technologies to Watch",
    url: "/blog/15",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    src: "ai-in-web",
    caption: "DESIGN, Vortexpert's AI & Data Research",
    title:
      "The Intersection of AI and Web Design: Crafting Intelligent and Adaptive Design",
    url: "/blog/16",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    src: "ai-in-web",
    caption: "Backend development",
    title:
      "Exploring Backend Frameworks: Choosing the Right Tool for Your Web Application",
    url: "/blog/17",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    src: "ai-in-web",
    caption: "Backend development",
    title:
      "Database Management in Backend Development: Optimizing Performance and Data Integrity",
    url: "/blog/18",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    src: "ai-in-web",
    caption: "Backend development",
    title:
      "Database Management in Backend Development: Optimizing Performance and Data Integrity",
    url: "/blog/19",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    src: "ai-in-web",
    caption: "DEV OPS",
    title:
      "Streamlining Development and Operations: Understanding the Role of DevOps",
    url: "/blog/20",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    src: "ai-in-web",
    caption: "DEV OPS",
    title:
      "Continuous Integration and Deployment: Automating the Software Delivery Pipeline with DevOps",
    url: "/blog/21",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    src: "ai-in-web",
    caption: "Backend development",
    title:
      "Backend APIs: Designing and Implementing Effective Communication Channels for Web Applications",
    url: "/blog/22",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    src: "ai-in-web",
    caption: "Backend development",
    title:
      "Infrastructure as Code: Empowering DevOps Practices for Scalable and Reliable Systems",
    url: "/blog/23",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    src: "ai-in-web",
    caption: "Backend development",
    title:
      "Infrastructure as Code: Empowering DevOps Practices for Scalable and Reliable Systems",
    url: "/blog/24",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    src: "ai-in-web",
    caption: "Backend development",
    title:
      "Infrastructure as Code: Empowering DevOps Practices for Scalable and Reliable Systems",
    url: "/blog/25",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    src: "ai-in-web",
    caption: "Backend development",
    title:
      "Infrastructure as Code: Empowering DevOps Practices for Scalable and Reliable Systems",
    url: "/blog/26",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    src: "ai-in-web",
    caption: "Backend development",
    title:
      "Infrastructure as Code: Empowering DevOps Practices for Scalable and Reliable Systems",
    url: "/blog/27",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    src: "ai-in-web",
    caption: "Backend development",
    title:
      "Infrastructure as Code: Empowering DevOps Practices for Scalable and Reliable Systems",
    url: "/blog/28",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
];

export default function Article() {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto px-4 py-16 lg:py-20 space-y-10">
        <Headline>Articles</Headline>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cardsDataArticle.slice(0, 9).map((e: BCard, i: number) => (
            <BlogCard data={e} key={i} />
          ))}
        </div>
      </div>
      <MostPopular />
      <div className="max-w-screen-xl mx-auto px-4 py-16 lg:py-20 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cardsDataArticle
            .slice(9, cardsDataArticle.length)
            .map((e: BCard, i: number) => (
              <BlogCard data={e} key={i} />
            ))}
        </div>
      </div>
    </div>
  );
}
