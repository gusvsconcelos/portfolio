import "./App.css";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="w-full min-h-screen p-4 bg-bg-1 font-display">
      <div className="flex flex-col gap-8 max-w-150 mx-auto">
        <Home />
      </div>
    </div>
  );
}
