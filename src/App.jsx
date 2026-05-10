import { ScrollTrigger } from "gsap/all";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductViwer from "./components/ProductViewer";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <ProductViwer />
        </>
    );
}

export default App;
