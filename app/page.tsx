import Image from "next/image";
import Sidebar from "./sidebar/sidebar";
import Canvas from "./canvas/canvas";

export default function Home() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      flexDirection: 'row',
      display: 'flex',
    }}>
      <Sidebar />
      <Canvas />
    </div>
  );
}
