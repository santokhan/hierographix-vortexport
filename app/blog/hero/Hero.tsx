import Headline from "@/components/shared/Headline";
import SubscribeForm from "@/components/home/hero/SubscribeForm";
import BlogCard, { BCard } from "@/components/shared/blog-card/BlogCard";
import Styles from "./Hero.module.css";

export const cardsData: BCard[] = [
  {
    caption: "Vortexpert's AI & Data Research",
    src: "rise-of-ai",
    title:
      "The Rise of Artificial Intelligence: Revolutionizing Industries and Transforming",
    url: "/blog/1",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    caption: "Vortexpert's AI & Data Research",
    src: "potential-of-ai",
    title:
      "Unlocking the Potential of AI: Exploring Its Impact on Business and Society",
    url: "/blog/2",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
  {
    src: "ai-in-web",
    caption: "Vortexpert's AI & Data Research",
    title:
      "AI in Web Development: Enhancing User Experiences and Driving Innovation",
    url: "/blog/3",
    creator: "By Vortex Team",
    timestamp: "June 1, 2023",
    read: "4 min read",
  },
];

export default function Hero() {
  return (
    <div className="relative overflow-hidden px-4 py-12 lg:py-20 space-y-10 lg:space-y-20">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center space-y-4 lg:space-y-8">
        <div className="space-y-3 my-4">
          <Headline>
            Our <span className="text-teal-500">Blog</span>
          </Headline>
          <p className="max-w-screen-sm text-gray-400 text-center lg:text-lg">
            Unlock a world of exclusive content and stay up-to-date with the
            latest trends by subscribing to our newsletter.
          </p>
        </div>
        <SubscribeForm />
      </div>

      <div className="max-w-screen-xl mx-auto space-y-10">
        <div
          className={[
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10",
          ].join(" ")}
        >
          <div className="lg:col-span-2">
            <BlogCard data={cardsData[0]} />
          </div>
          <div className={["overflow-auto space-y-6 max-h-[640px] px-2", Styles.styledScrollbar].join(' ')}>
            <BlogCard data={cardsData[1]} />
            <BlogCard data={cardsData[2]} />
          </div>
        </div>
      </div>
    </div>
  );
}
