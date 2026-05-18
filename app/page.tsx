import ProjectGrid from './components/ProjectGrid';

export default function Home() {
  return (
    <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-4 text-white">Matheus Calonico</h1>
        <p className="text-lg text-slate-400">
          Desenvolvedor Full Stack apaixonado por design e performance
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-white">Projetos</h2>
        <ProjectGrid />
      </section>
    </main>
  );
}
