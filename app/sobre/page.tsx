export default function About() {
  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Introdução */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6 text-white">Sobre Mim</h1>
        <div className="space-y-4 text-slate-400">
          <p>
            Olá! Sou Matheus Calonico, desenvolvedor Full Stack apaixonado por criar experiências digitais que combinam design elegante com performance excepcional. Com sólida formação em Engenharia de Software, trabalho constantemente para entregar soluções que não apenas resolvem problemas, mas também agregam valor real aos usuários.
          </p>
          <p>
            Minha jornada no desenvolvimento começou com curiosidade genuína sobre como as coisas funcionam na web. Desde então, venho expandindo meus conhecimentos em tecnologias modernas, melhores práticas de código e metodologias ágeis. Acredito que código limpo, bem documentado e performático é essencial para o sucesso de qualquer projeto.
          </p>
        </div>
      </section>

      {/* Formação */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-white">Formação</h2>
        <div className="border border-slate-700 rounded-lg p-6 bg-slate-900/50">
          <h3 className="text-lg font-semibold text-white mb-2">
            Engenharia de Software
          </h3>
          <p className="text-slate-400 text-sm mb-2">
            Universidade de Brasília (UniCEUB)
          </p>
          <p className="text-slate-500 text-sm">2025 - 2028</p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-white">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Front */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Front</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'PWA', 'Service Workers'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Back */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Back</h3>
            <div className="flex flex-wrap gap-2">
              {['TypeScript'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Data */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Data</h3>
            <div className="flex flex-wrap gap-2">
              {['Chart.js', 'APIs Governamentais'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Design */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Tools & Design</h3>
            <div className="flex flex-wrap gap-2">
              {['Vercel', 'Vitest', 'Figma', 'GOV.BR Design System'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Vamos Trabalhar Juntos?
        </h2>
        <p className="text-slate-400 mb-6 max-w-xl mx-auto">
          Estou disponível para desafios e oportunidades que me permitam crescer como desenvolvedor. Vamos conversar!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:matheusscalonico@gmail.com"
            className="px-6 py-3 rounded bg-blue-500/20 text-blue-300 border border-blue-500/50 hover:bg-blue-500/30 transition-colors text-sm font-medium"
          >
            Enviar Email
          </a>
          <a
            href="https://www.linkedin.com/in/matheuscalonico/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded bg-slate-700/50 text-white border border-slate-600 hover:bg-slate-700 transition-colors text-sm font-medium"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
