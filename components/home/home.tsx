import HomeHeader from "./HomeHeader";
import HomeExperiencias from "./HomeExperiencias";
import FeaturedProjects from "./FeaturedProjects";
import HomeFooter from "./HomeFooter";
import "./home.css";

export default function Home() {
    return (
        <div className="home-container">
            <HomeHeader />
            <FeaturedProjects />
            <HomeExperiencias />
            <HomeFooter />
        </div>
    );
}
