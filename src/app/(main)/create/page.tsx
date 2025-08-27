"use client";

import FileInput from "@/components/create/FileInput";
import savePost from "@/libs/db/savePost";
import getAuthenticationParameters from "@/libs/imagekit-auth/getAuthenticationParameters";
import { upload, UploadOptions } from "@imagekit/next";
import { FormEvent, useState } from "react";
import { CgSpinnerAlt } from "react-icons/cg";

const CreatePage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [caption, setCaption] = useState<string>("");
  const [err, setErr] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [imagePreview, setImagePreview] = useState<string | null>(null);


  const handlePost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErr("");
    setProgress(0);
    setLoading(true);

    if (!file) {
      setErr("Image must be present");
      setLoading(false);
      return;
    }

    if (file.size > 20971520) {
      setErr("Image must be less than 20 mb");
      setLoading(false);
      return;
    }

    if (!caption) {
      setErr("Caption must be present");
      setLoading(false);
      return;
    }


    // Save to imagekitz
    let url: string = "";
    try {
      const { token, signature, expire } = await getAuthenticationParameters();

      const uploadOptions: UploadOptions = {
        file,
        fileName: file.name,
        token,
        signature,
        expire,
        publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || "",
        folder: "snapgram",
        onProgress: (e) => {
          console.log(`Progress: ${e.loaded}/${e.total}`);
          setProgress((e.loaded / e.total) * 100);
        },
      };

      const uploadResponse = await upload(uploadOptions);
      console.log(uploadResponse);

      const uploadUrl: string = uploadResponse.url || "";
      url = uploadUrl;
    }

    catch (err) {
      console.log(err);
      setErr("Error uploading image");
      setLoading(false);
      return;
    }

    // Save post to database
    try {
      await savePost(url, caption);
      setErr("");
    } catch (err: any) {
      setErr(err.message);
      setImagePreview("");
    }

    setLoading(false);
    setProgress(0);
    setFile(null);
    setCaption("");
  };

  return (
    <form className="h-screen w-full mx-2 mb:w-xs flex justify-center items-center" onSubmit={e => handlePost(e)}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mx-2">
        <legend className="fieldset-legend text-xl">Create post:</legend>

        <FileInput file={file} setFile={setFile} imagePreview={imagePreview} setImagePreview={setImagePreview} />
        {
          progress !== 0 &&
          <progress className="progress progress-info w-full" value={progress} max="100"></progress>
        }

        <label className="input my-2">
          <span className="label">Caption:</span>
          <input type="text" placeholder="Enter caption..." value={caption} onChange={e => setCaption(e.target.value)} />
        </label>

        {err && <p className="text-red-400">* {err}</p>}

        {!loading ?
          <button className="btn btn-success my-2" type="submit">Create</button>
          :
          <button className="btn btn-soft my-2" disabled>
            Posting
            <CgSpinnerAlt className="animate-spin scale-125" />
          </button>
        }
      </fieldset>
    </form>
  );
};

export default CreatePage;
