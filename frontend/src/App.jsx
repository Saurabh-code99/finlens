import { Routes, Route } from "react-router-dom";
import ContentInput from "./components/ContentInput";
import Analysis from "./pages/Analysis";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              FIN<span className="text-cyan-400">LENS</span>
            </h1>

            <p className="text-xs text-slate-400">Financial Content X-Ray</p>
          </div>

          <div className="text-sm text-slate-400">Privacy First</div>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6">
        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center">
          <div className="mb-6 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm">
            AI-powered Financial Content Literacy
          </div>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Don't just read financial content.
            <span className="text-cyan-400"> Understand it.</span>
          </h2>

          <p className="mt-6 text-lg text-slate-400 max-w-2xl">
            FINLENS helps you understand financial claims, evidence, promotional
            intent and manipulation signals before making an important financial
            decision.
          </p>

          {/* Input Component */}
          <ContentInput />

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <span>✓ No OTP</span>
            <span>✓ No SMS access</span>
            <span>✓ No bank data</span>
            <span>✓ No stock tips</span>
          </div>
        </section>

        {/* What FINLENS checks */}
        <section className="pb-20">
          <h3 className="text-3xl font-bold text-center mb-10">
            What FINLENS checks
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-3xl mb-4">🔍</div>

              <h4 className="text-xl font-semibold mb-2">Claims</h4>

              <p className="text-slate-400">
                Identifies important financial claims present in the content.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-3xl mb-4">📊</div>

              <h4 className="text-xl font-semibold mb-2">Evidence</h4>

              <p className="text-slate-400">
                Shows how much supporting evidence is actually provided for a
                claim.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-3xl mb-4">🧠</div>

              <h4 className="text-xl font-semibold mb-2">
                Manipulation Signals
              </h4>

              <p className="text-slate-400">
                Highlights urgency, FOMO, certainty and emotional pressure.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
          FINLENS • Understand financial content. Decide independently.
        </footer>
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/analysis" element={<Analysis />} />
    </Routes>
  );
}

export default App;
