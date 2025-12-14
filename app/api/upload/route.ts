import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

// Helper to ensure directory exists
async function ensureDir(dirpath: string) {
    try {
        await mkdir(dirpath, { recursive: true });
    } catch (err: any) {
        if (err.code !== 'EEXIST') throw err;
    }
}

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file received." }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());

        // Sanitize filename: remove extension, replace spaces/special chars, add timestamp, append extension back
        const originalName = file.name;
        const ext = path.extname(originalName);
        const namePart = path.basename(originalName, ext).replace(/[^a-zA-Z0-9]/g, "_");
        const filename = `${namePart}_${Date.now()}${ext}`;

        // Define upload path
        const uploadDir = path.join(process.cwd(), "public", "uploads");
        await ensureDir(uploadDir);

        const filepath = path.join(uploadDir, filename);

        // Write file
        await writeFile(filepath, buffer);

        // Return public URL
        const fileUrl = `/uploads/${filename}`;

        return NextResponse.json({ url: fileUrl });

    } catch (error: any) {
        console.error("Upload Error:", error);
        return NextResponse.json({ error: "Failed to upload file." }, { status: 500 });
    }
}
