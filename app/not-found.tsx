import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center text-center">
      <div className="mb-8">
        <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-blue-700 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-3xl font-bold mb-4 text-white">
          Página não encontrada
        </h2>
        <p className="text-lg text-slate-400 mb-8 max-w-md">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
      </div>

      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          Voltar ao Início
        </Link>
        <Link
          href="/#projetos"
          className="px-6 py-3 border border-blue-600 hover:border-blue-700 text-blue-400 hover:text-blue-300 rounded-lg font-medium transition-colors"
        >
          Ver Projetos
        </Link>
      </div>

      <div className="mt-16 pt-16 border-t border-slate-700">
        <p className="text-slate-500 text-sm">
          Se o problema persistir, entre em contato através do email
        </p>
      </div>
    </main>
  );
}
