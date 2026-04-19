import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen p-3 sm:p-6 bg-bg-1 dark:bg-bg-dark-1 font-display antialiased">
      <main className="flex-1 w-full">
        <div className="flex flex-col gap-3 sm:gap-6 max-w-150 mx-auto">
          <Home />
        </div>
      </main>
      <Footer />
    </div>
  );
}
