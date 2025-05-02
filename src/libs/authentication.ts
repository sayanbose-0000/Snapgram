"use server"

import { signIn } from "~/auth";

const googleSignIn = async () => {
  await signIn("google");
};

const githubSignIn = async () => {
  await signIn("github");
};

export { googleSignIn, githubSignIn };