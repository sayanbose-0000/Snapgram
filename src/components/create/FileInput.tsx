"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";


const FileInput = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleOnFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  return (
    <>
      <label htmlFor="img-input">
        {imagePreview &&
          <Image src={imagePreview} height={500} width={500} alt="Image" className="h-56 object-contain cursor-pointer" />
        }
        <input id="img-input" type="file" className="file-input file-input-ghost my-2" accept="image/*" onChange={handleOnFileUpload} />
      </label>
    </>
  );
};

export default FileInput;