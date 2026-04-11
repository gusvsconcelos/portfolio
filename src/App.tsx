import "./App.css";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="w-full min-h-screen p-6 bg-bg-1 font-display **:antialiased">
      <div className="flex flex-col gap-6 max-w-150 mx-auto">
        <Home />
      </div>
    </div>
  );
}
