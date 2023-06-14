import Link from "next/link";
import { SocialMedia } from "../shared/footer/Footer";
import Image from "next/image";

const blogDetailsData = {
  caption: "Unleashing Digital Marvels",
  creator: "By Vortex Team",
  read: "8 min read",
  src: "assets/images/blog/article/rise-of-ai.png",
  timestamp: "June 1, 2023",
  title: "Electrifying Frontend Development Services!",
  url: "",
  relatedArticles: [
    {
      text: "Unlocking the Potential of AI: Exploring Its Impact on Business and Society",
      url: "",
    },
    {
      text: "AI in Web Development: Enhancing User Experiences and Driving Innovation",
      url: "",
    },
    {
      text: "Revolutionizing Healthcare with AI: From Diagnostics to Personalized Treatment",
      url: "",
    },
    {
      text: "Designing for the Future: How AI is Shaping the Field of Graphic Design",
      url: "",
    },
    {
      text: "The Intersection of AI and Web Design: Crafting Intelligent and Adaptive Design",
      url: "",
    },
  ],
  details: [
    {
      desc: [
        "Artificial Intelligence (AI) has emerged as a transformative force, revolutionizing industries and fundamentally changing the way we live. 🚀✨ With its ability to process vast amounts of data, learn from patterns, and make intelligent decisions, AI is unlocking new possibilities across various sectors.",
        "One area where AI is making significant strides is healthcare. 👩‍⚕️🏥 Medical professionals can leverage AI-powered algorithms to analyze medical records, diagnose diseases, and even predict patient outcomes. This has the potential to enhance accuracy, improve treatment plans, and save lives. 💉💊❤️",
      ],
    },
    {
      img: {
        src: "assets/images/blog/article/revolution.png",
      },
    },
    {
      important:
        "AI is also reshaping the automotive industry, with self-driving cars becoming a reality. 🚗🤖 Advanced AI algorithms enable vehicles to perceive their surroundings, navigate complex road networks, and make real-time decisions. This technology promises to reduce accidents, increase mobility, and transform transportation as we know it. 🚦🚘🌐",
    },
    {
      img: {
        src: "assets/images/blog/article/ai-in-web.png",
      },
    },
    {
      title: "In the financial sector",
      desc: [
        "AI-powered algorithms are driving efficient and personalized customer experiences. 💰💼 Chatbots and virtual assistants equipped with natural language processing capabilities can handle customer inquiries, provide recommendations, and even execute financial transactions. This automation streamlines processes, enhances customer satisfaction, and increases operational efficiency for financial institutions. 💬🤝💸",
        "Moreover, AI is revolutionizing the manufacturing industry through robotics and automation. 🏭🤖 Intelligent machines equipped with AI algorithms can perform complex tasks with precision and speed, leading to improved productivity, reduced costs, and enhanced safety in factories. 🔄⚙️🔧",
      ],
    },
    {
      title: "The Impact of AI...",
      important:
        "The impact of AI extends beyond specific industries, permeating various aspects of our daily lives. Virtual voice assistants like Siri, Alexa, and Google Assistant leverage AI to understand and respond to human commands, simplifying tasks and providing information on-demand. 🗣️💡📱 AI algorithms power personalized recommendations on streaming platforms, e-commerce websites, and social media, enhancing user experiences and driving engagement. 🎬🛒📲",
      desc: [
        "However, as AI continues to advance, ethical considerations become crucial. Ensuring transparency, fairness, and accountability in AI systems is paramount to address potential biases and prevent unintended consequences. ⚖️🤔",
      ],
    },
    {
      title: "Conclusion",
      desc: [
        "In conclusion, the rise of artificial intelligence is transforming industries and reshaping our world. Its potential to analyze complex data, automate processes, and make intelligent decisions has the power to revolutionize healthcare, transportation, finance, manufacturing, and more. As we embrace the opportunities presented by AI, it is vital to navigate ethical challenges and harness its potential for the betterment of society. 🌍",
      ],
    },
  ],
};

export default function ReadBlog() {
  return (
    <div className="w-full">
      {/* Hero */}
      <div className="flex justify-start py-4">
        <Link
          className="flex gap-3 items-center justify-start whitespace-nowrap text-vpurple-500 hover:underline underline-offset-2"
          href="/blog"
        >
          <i className="fa fa-arrow-left text-sm"></i> Back to Blog
        </Link>
      </div>

      {/* Hero */}
      <div className="relative">
        <Image
          src={require("../../app/assets/images/blog/article/rise-of-ai.png")}
          alt="rise of ait"
          className="w-full h-auto rounded-2xl"
        />
        {/* Text Content */}
        <div className="absolute left-0 top-0 p-8 lg:p-16 w-full h-full image-top-effect z-[3] flex flex-col justify-between">
          <div className="space-y-2">
            <h5 className="font-meduim text-white text-lg uppercase">
              {blogDetailsData.caption}
            </h5>
            <h3 className="text-2xl lg:text-4xl font-bold text-center leading-[1.2]">
              <div className="text-start text-white">
                {blogDetailsData.title}
              </div>
            </h3>
          </div>

          <div className="flex gap-4 items-center whitespace-nowrap ml-auto text-gray-300">
            <div className="flex items-center gap-2 ">
              <div className="w-9 h-9 rounded-full bg-teal-400 flex justify-center items-center hover:bg-teal-500 focus:ring-4 ring-teal-400/50"></div>
              {blogDetailsData.creator}
            </div>
            <div className="w-[2px] h-3 bg-gray-300"></div>
            <div className="">{blogDetailsData.timestamp}</div>
            <div className="w-[2px] h-3 bg-gray-300"></div>
            <div className="">{blogDetailsData.read}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-16 lg:py-20">
        {/* Main content */}
        <div className="lg:col-span-9 space-y-8">
          {blogDetailsData.details.map((e: any, i: number) => {
            const { img, title, desc, important } = e;
            return (
              <div className="" key={i}>
                {img?.src && <BlogImg src={img.src} />}
                {title && <Title>{title}</Title>}
                {important && <Important>{important}</Important>}
                {desc && <Desc desc={desc} />}
              </div>
            );
          })}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-3 space-y-8">
          <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
            <i className="fa fa-history"></i>
            {blogDetailsData.read}
          </div>
          <div className="space-y-2">
            <div className="text-gray-500 dark:text-gray-400">Share it on</div>
            <SocialMedia />
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            <div className="">Related Article</div>
            {blogDetailsData.relatedArticles.map((e, i) => (
              <div className="border-b last:border-none" key={i}>
                <Link
                  href={e.url}
                  className="font-medium text-gray-800 dark:text-gray-200 block py-3 hover:text-vpurple-500 hover:dark:text-vpurple-500"
                >
                  {e.text}
                </Link>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

export function Desc(props: { desc: string[] }) {
  return (
    <div className="space-y-5">
      {props.desc.map((e: any, i: number) => (
        <p className="text-gray-800 dark:text-gray-400" key={i}>
          {e}
        </p>
      ))}
    </div>
  );
}

export function Title(props: any) {
  return (
    <h5 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
      {props.children}
    </h5>
  );
}
export function Important(props: any) {
  return (
    <p className="font-semibold text-gray-600 dark:text-white border-l-2 border-teal-400 pl-3 mb-4">
      {props.children}
    </p>
  );
}
export function BlogImg(props: { src: string }) {
  return (
    <Image
      src={require(`../../app/assets/images/blog/article/rise-of-ai.png`)}
      alt={props.src}
      className="w-full h-auto rounded"
    />
  );
}
