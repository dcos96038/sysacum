export default function App() {
  return (
    <div className="min-h-screen bg-[#f2f2f0]">
      <header className="bg-[#b0c2d4] flex items-center py-2 px-1 h-20">
        <img src="./utn.svg" alt="UTN Logo" className="w-64" />
      </header>
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
            alt="Fondo"
            className="min-h-[calc(100vh-208px)] object-cover"
          />
        </section>
      </main>
      <footer className="flex flex-col justify-between h-32">
        <div className="bg-[#b0c2d4]">
          <h2 className="uppercase text-center font-bold">
            Redes sociales institucionales
          </h2>
        </div>
        <div className="flex pb-4 gap-10 items-center justify-center">
          <img src="./facebook.svg" className="w-14" alt="" />
          <img src="./instagram.svg" className="w-14" alt="" />
          <img src="./twitch.svg" className="w-14" alt="" />
          <img src="./twitter.svg" className="w-14" alt="" />
          <img src="./youtube.svg" className="w-14" alt="" />
        </div>
      </footer>
    </div>
  );
}
