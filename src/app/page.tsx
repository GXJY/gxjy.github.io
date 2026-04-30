export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-zinc-400">
      <main className="flex flex-1 w-full flex-col items-center justify-center gap-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-[0.35em] uppercase text-zinc-200">
          BEYOND ONE PLUS
        </h1>
      </main>
      <nav className="mb-10 flex items-center justify-center gap-10 text-xs tracking-[0.3em]">
        <a
          href="#essay"
          className="transition-colors duration-300 hover:text-white"
        >
          [ 随笔 ]
        </a>
        <a
          href="#projects"
          className="transition-colors duration-300 hover:text-white"
        >
          [ 关于 ]
        </a>
        <a
          href="#about"
          className="transition-colors duration-300 hover:text-white"
        >
          [ 论文 ]
        </a>
      </nav>
    </div>
  );
}
