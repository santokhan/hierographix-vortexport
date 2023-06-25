"use client"
import ScrollAnimation from 'react-animate-on-scroll';

import Hero from "./hero/Hero";
import EditorChoice from "./editor-choice/EditorChoice";
import Article from "./article/Article";
import BottomBar from "@/components/shared/theme-toggler/ThemeToggler";

export default function Blog() {
  return (
    <div className="bg-white dark:bg-vpurple-950">
      <ScrollAnimation animateIn="fadeIn">
        <Hero />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <EditorChoice />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Article />
      </ScrollAnimation>

      <BottomBar />
    </div>
  );
}
