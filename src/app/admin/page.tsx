"use client";

import { useState } from "react";

export default function AdminPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState("");

  async function handleUpload() {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setUploadedUrl(data.url);
  }

  return (
    <main className="min-h-screen bg-zinc-100 px-8 py-24">
      <div className="mx-auto max-w-3xl rounded-[32px] bg-white p-10 shadow-xl">
        <h1 className="mb-8 text-4xl font-light">
          Admin local STRATEGII URBANE
        </h1>

        <p className="mb-8 text-zinc-600">
          Încarcă imagini, planșe sau video pentru site. Fișierele se salvează
          local în folderul <strong>public/uploads</strong>.
        </p>

        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="mb-6 block w-full rounded-xl border border-zinc-300 p-4"
        />

        <button
          onClick={handleUpload}
          className="rounded-full bg-black px-8 py-4 text-white"
        >
          Încarcă fișier
        </button>

        {uploadedUrl && (
          <div className="mt-10 rounded-2xl bg-zinc-100 p-6">
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Fișier încărcat
            </p>

            <p className="break-all text-lg">{uploadedUrl}</p>
          </div>
        )}
      </div>
    </main>
  );
}