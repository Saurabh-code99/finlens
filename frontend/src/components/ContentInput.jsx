import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContentInput() {
  const [activeTab, setActiveTab] = useState("paste");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleAnalysis = async () => {
    if (!text.trim()) {
      alert("Please paste some financial content first.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: text,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Something went wrong.");
        return;
      }

      navigate("/analysis", {
        state: {
          type: "text",
          content: data.content,
          analysis: data.analysis,
        },
      });
    } catch (error) {
      console.error(error);
      alert("Backend server se connect nahi ho pa raha.");
    }
  };

  const handleImageAnalyze = () => {
    if (!file) {
      alert("Please select a screenshot first.");
      return;
    }

    navigate("/analysis", {
      state: {
        type: "image",
        fileName: file.name,
      },
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10">
      {/* Tabs */}
      <div className="flex rounded-xl bg-slate-900 border border-slate-800 p-1">
        <button
          onClick={() => setActiveTab("paste")}
          className={`flex-1 py-3 rounded-lg font-medium transition ${
            activeTab === "paste"
              ? "bg-cyan-400 text-slate-950"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Paste Content
        </button>

        <button
          onClick={() => setActiveTab("upload")}
          className={`flex-1 py-3 rounded-lg font-medium transition ${
            activeTab === "upload"
              ? "bg-cyan-400 text-slate-950"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Upload Screenshot
        </button>
      </div>

      {/* Paste Content */}
      {activeTab === "paste" && (
        <div className="mt-4">
          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder={`Paste financial content here...

Example:
₹10,000 → ₹50,000 in 6 months!
100% guaranteed strategy.
Join now!`}
            className="w-full h-64 p-5 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 outline-none focus:border-cyan-400 resize-none"
          />

          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-slate-500">
              {text.length} characters
            </span>

            <button
              onClick={handleAnalysis}
              className="px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition"
            >
              Analyze Content
            </button>
          </div>
        </div>
      )}

      {/* Upload Screenshot */}
      {activeTab === "upload" && (
        <div className="mt-4">
          <label className="block cursor-pointer">
            <div className="h-64 rounded-2xl border-2 border-dashed border-slate-700 bg-slate-900 hover:border-cyan-400 transition flex flex-col items-center justify-center">
              <div className="text-5xl mb-4">📸</div>

              <h3 className="text-xl font-semibold">Upload a Screenshot</h3>

              <p className="text-slate-500 mt-2 text-sm">PNG, JPG or JPEG</p>

              {file && (
                <p className="mt-4 text-cyan-400 text-sm">
                  Selected: {file.name}
                </p>
              )}
            </div>

            <input
              type="file"
              accept="image/png,image/jpeg,image/jpg"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          <div className="flex justify-end mt-4">
            <button
              onClick={handleImageAnalyze}
              className="px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition"
            >
              Analyze Content
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContentInput;
