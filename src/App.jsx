import { ScrollTrigger } from "gsap/all";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductViwer from "./components/ProductViewer";
import gsap from "gsap";
import Showcase from "./components/Showcase";

gsap.registerPlugin(ScrollTrigger);

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <ProductViwer />
            <Showcase />
        </>
    );
}

export default App;
