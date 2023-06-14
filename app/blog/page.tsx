import Hero from "./hero/Hero";
import EditorChoice from "./editor-choice/EditorChoice";
import Article from "./article/Article";
import BottomBar from "@/components/shared/theme-toggler/ThemeToggler";

export default function Blog() {
  return (
    <div className="bg-white dark:bg-vpurple-950">
      <Hero />
      <EditorChoice />
      <Article />

      <BottomBar />
    </div>
  );
}
