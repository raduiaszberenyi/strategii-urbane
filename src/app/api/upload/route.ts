import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return Response.json({ error: "No file uploaded" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadDir, { recursive: true });

  const safeName = file.name
    .toLowerCase()
    .replaceAll(" ", "-")
    .replace(/[^\w.-]/g, "");

  const filePath = path.join(uploadDir, safeName);

  await writeFile(filePath, buffer);

  return Response.json({
    success: true,
    url: `/uploads/${safeName}`,
  });
}
