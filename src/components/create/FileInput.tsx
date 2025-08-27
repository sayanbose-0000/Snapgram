"use client";

import { ImageKitProvider } from "@imagekit/next";
import Image from "next/image";
import { ChangeEvent } from "react";

interface FileInputProps {
  file: File | null,
  setFile: (file: (File) | null) => void,
  imagePreview: string | null,
  setImagePreview: (url: string | null) => void,
};

const FileInput = ({ file, setFile, imagePreview, setImagePreview }: FileInputProps) => {

  const handleOnFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const currentFile = e.target.files?.[0];
    setFile(currentFile || null);

    if (currentFile) {
      setImagePreview(URL.createObjectURL(currentFile));
    } else {
      setImagePreview(null);
    }
  };

  return (
    <>
      <label htmlFor="img-input">
        {imagePreview && (
          <ImageKitProvider urlEndpoint={`https://ik.imagekit.io/${process.env.IMAGEKIT_ID}`}>
            <Image
              src={imagePreview}
              height={500}
              width={500}
              alt="Upload Picture"
              className="h-56 object-contain cursor-pointer"
            />
          </ImageKitProvider>
        )}

        <input
          id="img-input"
          type="file"
          className={`file-input file-input-ghost my-2 ${file && "hidden"}`}
          accept="image/*"
          onChange={handleOnFileUpload}
        />
      </label>
    </>
  );
};

export default FileInput;
