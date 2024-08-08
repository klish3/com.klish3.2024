"use client";



import { Nav } from "./components/Nav/Nav";
import { Resume } from "./pages/Resume/Resume";
const App = () => {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen items-center justify-center gap-8 dark:bg-gray-800">
        <Resume />
      </main>
    </>
  );
};

export default App;
