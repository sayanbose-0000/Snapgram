"use server";

import { getUploadAuthParams } from "@imagekit/next/server";
import { v4 as uuidv4 } from 'uuid';


const getAuthenticationParameters = async () => {
  const { token, expire, signature } = getUploadAuthParams({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || "",
    expire: Math.floor(Date.now() / 1000) + (5 * 60),
    token: uuidv4()
  });

  return { token, expire, signature };
};

export default getAuthenticationParameters;
