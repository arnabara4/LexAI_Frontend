import React, { useState, useEffect } from "react";
import FileDropzone from "./components/FileDropzone";
import AnalysisPreview from "./components/AnalysisPreview";
import ResultsViewer from "./components/ResultViewer";
import api from "../../utils/api";
import toast from "react-hot-toast";

export default function AnalyzePage() {
  const [file, setFile] = useState(null);        // File object
  const [text, setText] = useState("");          // pasted text input
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);    // response from backend
  const [error, setError] = useState(null);

  // 🧠 Fetch last cached analysis from Redis on load
  useEffect(() => {
    const fetchLastAnalysis = async () => {
      try {
        const { data } = await api.get("/analyze/last");
        if (data?.analysis_result) {
          setResult(data.analysis_result);
          if (data.document_text) setText(data.document_text);
          toast.success("Restored last analysis");
        }
      } catch (err) {
        if (err.response?.status !== 404) {
          console.error(err);
        }
      }
    };
    fetchLastAnalysis();
  }, []);

  const handleAnalyze = async () => {
    if (!file && !text) {
      toast.error("Provide a PDF or paste text to analyze.");
      return;
    }

    setLoading(true);
    setProgress(0);
    setError(null);
    setResult(null);

    try {
      let payload;
      let headers = {};

      if (file) {
        payload = new FormData();
        payload.append("document", file, file.name);
        headers["Content-Type"] = "multipart/form-data";
      } else {
        payload = { text };
        headers["Content-Type"] = "application/json";
      }

      const res = await api.post("/analyze", payload, {
        headers,
        onUploadProgress: (e) => {
          if (e.total) {
            setProgress(Math.round((e.loaded * 100) / e.total));
          }
        },
      });

      setResult(res.data);
      toast.success("Analysis complete");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || err.message || "Analysis failed");
      toast.error("Analysis failed");
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  const handleClear = () => {
    setFile(null);
    setText("");
    setResult(null);
    setError(null);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Dropzone & preview */}
        <div className="lg:col-span-5">
          <FileDropzone
            file={file}
            setFile={setFile}
            text={text}
            setText={setText}
          />

          <AnalysisPreview
            file={file}
            text={text}
            loading={loading}
            progress={progress}
            onAnalyze={handleAnalyze}
            onClear={handleClear}
          />
        </div>

        {/* Right: Results */}
        <div className="lg:col-span-7">
          <ResultsViewer
            data={result}
            loading={loading}
            error={error}
            onRetry={handleAnalyze}
          />
        </div>
      </div>
    </div>
  );
}
