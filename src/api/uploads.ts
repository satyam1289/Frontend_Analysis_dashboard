// Mocked for Vercel demo
export async function uploadFile(file: File) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ upload_id: "demo-" + Date.now(), status: "complete" });
    }, 1500);
  });
}

export async function getUploadStatus(uploadId: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: "complete" });
    }, 500);
  });
}
