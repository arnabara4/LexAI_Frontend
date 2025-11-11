// src/pages/Dashboard/components/FileDropzone.jsx
import React, { useRef } from "react";
import { UploadCloud, FileText } from "lucide-react"; // Import icons

export default function FileDropzone({ file, setFile, text, setText }) {
  const inputRef = useRef(null);

  // --- We'll check for PDF OR TXT as per your screenshot ---
  const validTypes = ["application/pdf", "text/plain"];
  const alertInvalidFile = () => {
    toast.error("Invalid file. Please upload a PDF or .txt file.");
  };

  function onDrop(e) {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (!f) return;
    if (!validTypes.includes(f.type)) {
      alertInvalidFile();
      return;
    }
    setFile(f);
  }

  function onSelectFile(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    if (!validTypes.includes(f.type)) {
      alertInvalidFile();
      return;
    }
    setFile(f);
  }

  return (
    <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-color-card)] p-6 transition-colors duration-300">
      <label className="block text-sm font-medium mb-1 text-[var(--font-color)]">
        Upload Document
      </label>
      <p className="text-sm text-[var(--font-color-muted)] mb-4">
        Drag and drop your PDF or text file here
      </p>

      {/* --- Dropzone Area --- */}
      <div
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        className="rounded-lg border-2 border-dashed border-[var(--border-color)] 
                   bg-[var(--bg-color-content)] p-8 text-center cursor-pointer 
                   hover:border-[var(--primary-color)] transition-colors duration-300"
        onClick={() => inputRef.current.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf,text/plain"
          className="hidden"
          onChange={onSelectFile}
        />

        {!file ? (
          // --- Default Dropzone State ---
          <div className="flex flex-col items-center">
            <UploadCloud className="w-12 h-12 text-[var(--font-color-muted)]" />
            <div className="mt-4 text-lg font-medium text-[var(--font-color)]">
              Drag your file here or click to browse
            </div>
            <div className="text-sm text-[var(--font-color-muted)] mt-1">
              Supported formats: PDF, TXT (Max 10MB)
            </div>
            <button className="mt-4 px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--bg-color-muted)] text-[var(--font-color)] hover:bg-[var(--border-color)] transition-colors">
              Select File
            </button>
          </div>
        ) : (
          // --- File Selected State ---
          <div className="flex items-center justify-center gap-4 text-left">
            <div className="bg-[var(--bg-color-muted)] border rounded-md p-3 border-[var(--border-color)]">
              <FileText className="w-8 h-8 text-[var(--primary-color)]" />
            </div>
            <div>
              <div className="text-sm font-medium text-[var(--font-color)]">{file.name}</div>
              <div className="text-xs text-[var(--font-color-muted)]">{(file.size / 1024 / 1024).toFixed(2)} MB</div>
            </div>
          </div>
        )}
      </div>

      {/* --- "Or Paste Text" Section --- */}
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2 text-[var(--font-color)]">
          Or paste document text
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={8}
          placeholder="Paste contract text here if you don't want to upload a PDF..."
          className="w-full p-4 rounded-md border text-sm
                     bg-[var(--bg-color-content)] 
                     border-[var(--border-color)] 
                     text-[var(--font-color)] 
                     focus:outline-none focus:ring-2 
                     focus:ring-[var(--primary-color)] 
                     transition-colors"
        />
      </div>
    </div>
  );
}