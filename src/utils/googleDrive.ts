// Utility to fetch image URLs from a public Google Drive folder
// Usage: getGoogleDriveImageUrls('FOLDER_ID')
// Returns: Promise<string[]>

export async function getGoogleDriveImageUrls(folderId: string): Promise<string[]> {
	// Google Drive API requires an API key for listing files in a folder
	// For public folders, you can use the "files" endpoint with API key
	// Docs: https://developers.google.com/drive/api/v3/reference/files/list
	// You must enable the Drive API and get an API key from Google Cloud Console

	const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY;
	if (!API_KEY) throw new Error("Google Drive API key not set");

	const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image/'&key=${API_KEY}&fields=files(id,name,mimeType)`;
	const res = await fetch(url);
	if (!res.ok) throw new Error("Failed to fetch images from Google Drive");
	const data = await res.json();
	// Construct direct image URLs
	return (data.files || []).map(
		(file: any) => `https://drive.google.com/uc?export=view&id=${file.id}`
	);
}
