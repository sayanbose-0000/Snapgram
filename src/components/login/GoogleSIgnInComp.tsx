"use client";

import { googleSignIn } from "@/libs/authentication";
import { TbBrandGoogleFilled } from "react-icons/tb";

const GoogleSIgnInComp = () => {
  return (
    <>
      <TbBrandGoogleFilled size={30} className="cursor-pointer" onClick={googleSignIn} />
    </>
  );
};

export default GoogleSIgnInComp;