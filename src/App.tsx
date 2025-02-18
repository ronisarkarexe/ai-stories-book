import "./App.css";
import FooterComponent from "./components/footer/footer.component";
import HeroSectionComponent from "./components/hero/hero_section.component";
import HomeComponent from "./components/home/home.component";
import TopHeaderComponent from "./components/top_header/top_header.component";

function App() {
  return (
    <div className="bg-gray-50">
      <TopHeaderComponent />
      <HeroSectionComponent />
      <HomeComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
