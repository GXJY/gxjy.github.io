export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-2xl font-light mb-4">BEYOND ONE PLUS</h1>
          <nav className="flex gap-6 text-sm text-zinc-600">
            <a href="#essay" className="hover:text-zinc-900 transition-colors">
              随笔
            </a>
            <a href="#projects" className="hover:text-zinc-900 transition-colors">
              关于
            </a>
            <a href="#about" className="hover:text-zinc-900 transition-colors">
              论文
            </a>
          </nav>
        </header>
        <main className="space-y-8">
          <p className="text-zinc-600 leading-relaxed">
            记录思考，分享想法。
          </p>
        </main>
      </div>
    </div>
  );
}
