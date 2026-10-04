import { useLocation, useNavigate } from "react-router-dom";

function Analysis() {
  const location = useLocation();
  const navigate = useNavigate();

  const { type, content, fileName, analysis } = location.state || {};

  const evidence = analysis?.evidenceStrength || "unknown";

  const getEvidenceStyle = () => {
    if (evidence === "high") {
      return "bg-green-400/10 text-green-400 border-green-400/20";
    }

    if (evidence === "medium") {
      return "bg-yellow-400/10 text-yellow-400 border-yellow-400/20";
    }

    if (evidence === "low") {
      return "bg-orange-400/10 text-orange-400 border-orange-400/20";
    }

    if (evidence === "none") {
      return "bg-red-400/10 text-red-400 border-red-400/20";
    }

    return "bg-slate-400/10 text-slate-400 border-slate-400/20";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">
              FIN<span className="text-cyan-400">LENS</span>
            </h1>

            <p className="text-xs text-slate-500">Financial Content X-Ray</p>
          </div>

          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-lg border border-slate-700 text-sm text-slate-300 hover:bg-slate-800"
          >
            ← New Analysis
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <p className="text-cyan-400 text-sm font-semibold">CONTENT X-RAY</p>

          <h2 className="text-4xl font-bold mt-2">
            Financial Content Analysis
          </h2>

          <p className="text-slate-400 mt-3">
            Understand the claim before making a decision.
          </p>
        </div>

        {/* Original Content */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Original Content</h3>

          {type === "text" ? (
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-slate-300 whitespace-pre-wrap">
              {content}
            </div>
          ) : (
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
              <p className="text-slate-400">Screenshot uploaded</p>

              <p className="text-cyan-400 mt-2">{fileName}</p>
            </div>
          )}
        </section>

        {/* Claims */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">
          <p className="text-slate-400 text-sm">CLAIMS DETECTED</p>

          <div className="mt-5 space-y-4">
            {analysis?.claims?.length > 0 ? (
              analysis.claims.map((claim, index) => (
                <div
                  key={index}
                  className="bg-slate-950 border border-slate-800 rounded-xl p-5"
                >
                  <p className="text-lg font-semibold">
                    {typeof claim === "string" ? claim : claim.text}
                  </p>

                  {typeof claim === "object" && claim.reason && (
                    <p className="text-slate-400 text-sm mt-3">
                      {claim.reason}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-slate-500">No claims detected.</p>
            )}
          </div>
        </section>

        {/* Evidence + Intent */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Evidence */}
          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400 text-sm">EVIDENCE STRENGTH</p>

            <div
              className={`inline-block mt-4 px-4 py-2 rounded-lg border font-semibold ${getEvidenceStyle()}`}
            >
              {evidence.replace(/_/g, " ").toUpperCase()}
            </div>

            <p className="text-slate-400 text-sm mt-4">
              {analysis?.claims?.[0]?.reason ||
                "Evidence is assessed based on the available content."}
            </p>
          </section>

          {/* Content Intent */}
          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400 text-sm">CONTENT INTENT</p>

            <div className="mt-5 space-y-5">
              {/* Education */}
              <div>
                <div className="flex justify-between mb-2">
                  <span>Education</span>

                  <span className="text-slate-400">
                    {analysis?.education ?? 0}%
                  </span>
                </div>

                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-slate-300 rounded-full"
                    style={{
                      width: `${analysis?.education ?? 0}%`,
                    }}
                  />
                </div>
              </div>

              {/* Promotion */}
              <div>
                <div className="flex justify-between mb-2">
                  <span>Promotion</span>

                  <span className="text-cyan-400">
                    {analysis?.promotion ?? 0}%
                  </span>
                </div>

                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-400 rounded-full"
                    style={{
                      width: `${analysis?.promotion ?? 0}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Manipulation Signals */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">
          <p className="text-slate-400 text-sm">MANIPULATION SIGNALS</p>

          <div className="flex flex-wrap gap-3 mt-4">
            {analysis?.manipulationSignals?.length > 0 ? (
              analysis.manipulationSignals.map((signal, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg bg-orange-400/10 border border-orange-400/20 text-orange-300"
                >
                  {signal}
                </span>
              ))
            ) : (
              <p className="text-slate-500">
                No major manipulation signals detected.
              </p>
            )}
          </div>
        </section>

        {/* What's Missing */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">
          <p className="text-slate-400 text-sm">WHAT'S MISSING?</p>

          <div className="grid md:grid-cols-3 gap-4 mt-5">
            {analysis?.missingEvidence?.length > 0 ? (
              analysis.missingEvidence.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-950 border border-slate-800 rounded-xl p-4"
                >
                  {item}
                </div>
              ))
            ) : (
              <p className="text-slate-500">No missing evidence identified.</p>
            )}
          </div>
        </section>

        {/* Simple Hindi */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">
          <p className="text-cyan-400 text-sm font-semibold">SIMPLE HINDI</p>

          <p className="text-lg mt-4 text-slate-200 leading-8">
            {analysis?.simpleHindi || "Hindi explanation available nahi hai."}
          </p>
        </section>

        {/* Uncertainty */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">
          <p className="text-yellow-400 text-sm font-semibold">UNCERTAINTY</p>

          <p className="text-slate-300 mt-4 leading-7">
            {analysis?.uncertainty || "No additional uncertainty reported."}
          </p>
        </section>

        {/* Decision Brake */}
        <section className="bg-cyan-400/5 border border-cyan-400/20 rounded-2xl p-6 mb-10">
          <p className="text-cyan-400 text-sm font-semibold">DECISION BRAKE</p>

          <h3 className="text-2xl font-bold mt-2">
            Pause. Check. Decide yourself.
          </h3>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
              <p className="text-cyan-400 font-bold">01</p>

              <p className="text-slate-300 mt-3">
                What exactly are you being promised?
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
              <p className="text-cyan-400 font-bold">02</p>

              <p className="text-slate-300 mt-3">
                What evidence supports this claim?
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
              <p className="text-cyan-400 font-bold">03</p>

              <p className="text-slate-300 mt-3">
                What could you lose if you are wrong?
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center border-t border-slate-800 pt-8 pb-8">
          <p className="text-slate-500 text-sm">
            FINLENS does not provide investment advice, stock tips or price
            predictions.
          </p>

          <p className="text-slate-600 text-xs mt-3">
            Privacy-first • No OTP • No SMS • No bank data
          </p>
        </footer>
      </main>
    </div>
  );
}

export default Analysis;
