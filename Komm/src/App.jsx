import Apresentacao from './components/Apresentacao';
import Navbar from './components/navbar';
import { Particles } from './components/magicui/particles';
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { IconCloudDemo } from './components/Skills';
import './assets/app.css';
import { ArcTimeline } from './components/magicui/arc-timeline';

function App() {
  return (
    <div className="w-full min-h-screen relative">
      <SmoothCursor />

      <Particles
        quantity="500"
        className="particles-bg"
      />

      <Navbar />

      <main className="main-content flex flex-col items-center justify-center">
        <Apresentacao />
        <IconCloudDemo />
      </main>
    </div>
  );
}

export default App;
