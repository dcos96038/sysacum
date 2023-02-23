import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f2f2f0]">
      <Header />
      <main className="flex min-h-[calc(100vh-208px)]">
        <section className="flex gap-4 flex-col justify-center items-center px-80">
          <div className="flex flex-col">
            <label htmlFor="user" className="font-semibold">
              Usuario
            </label>
            <input
              type="text"
              className="bg-[#D9D9D9] pl-1 border border-stone-400 rounded"
              name="user"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="font-semibold">
              Contraseña
            </label>
            <input
              type="password"
              className="bg-[#D9D9D9] pl-1 border border-stone-400 rounded"
              name="password"
            />
          </div>
        </section>
        <section className="flex">
          <img
            src="./site-image.png"
            alt="Background image"
            className="min-h-[calc(100vh-208px)] object-cover"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
