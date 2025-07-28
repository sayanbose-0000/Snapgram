"use client"

import { githubSignIn } from "@/libs/auth/authenticate";
import { TbBrandGithubFilled } from "react-icons/tb";

const GithubSignInComp = () => {
  return (
    <>
      <TbBrandGithubFilled size={30} className="cursor-pointer" onClick={githubSignIn} />
    </>
  );
};

export default GithubSignInComp;
