import Header from "../components/shared/header/Header";
import Hero from "./hero/Hero";
import Footer from "../components/shared/footer/Footer";
import EditorChoice from "./editor-choice/EditorChoice";
import Article from "./article/Article";
import BottomBar from "../components/shared/theme-toggler/ThemeToggler";
export default function Blog() {
  return (
    <div className="bg-vpurple-950">
      <Header />
      <Hero />
      <EditorChoice />
      <Article />
      <Footer />
      <BottomBar />
    </div>
  );
}
