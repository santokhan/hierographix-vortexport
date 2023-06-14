import Link from "next/link";
import { SocialMedia } from "../shared/footer/Footer";
import Image from "next/image";

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
          className="w-full h-auto"
        />
        {/* Text Content */}
        <div
          className={`absolute left-0 top-0 p-8 lg:p-16 w-full h-full image-top-effect`}
        >
          <div className="space-y-2">
            <h5 className="font-meduim text-white text-lg uppercase">
              Unleashing Digital Marvels
            </h5>
            <h3 className="text-2xl lg:text-4xl font-bold text-center leading-[1.2]">
              <div className="text-start text-white">
                Electrifying Frontend Development Services!
              </div>
            </h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-8 space-y-5"></div>

        <aside className="lg:col-span-4">
          <SocialMedia />
        </aside>
      </div>
    </div>
  );
}
