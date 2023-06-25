"use client"
import ScrollAnimation from 'react-animate-on-scroll';

import ReadBlog from "@/components/blog/ReadBlog";
import BottomBar from "@/components/shared/theme-toggler/ThemeToggler";

export default function BlogPage() {
  return (
    <div className="bg-white dark:bg-vpurple-950">
      <div className="max-w-screen-xl mx-auto px-4">
        <ScrollAnimation animateIn="fadeIn">
          <ReadBlog />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <BottomBar />
        </ScrollAnimation>
      </div>
    </div>
  );
}
