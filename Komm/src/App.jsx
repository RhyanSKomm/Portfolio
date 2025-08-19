import Apresentacao from './components/Apresentacao';
import Navbar from './components/navbar';
import { Particles } from './components/magicui/particles';
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import './assets/app.css';

function App() {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <SmoothCursor />
            <Particles quantity="500"
                style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -10 }}
            />
            <Navbar />
            <div className="pt-[80px]">
                <Apresentacao />
            </div>
        </div>
    );
}

export default App;
