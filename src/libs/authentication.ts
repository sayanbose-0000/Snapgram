"use server"

import { signIn, signOut } from "~/auth";

const googleSignIn = async () => {
  await signIn("google");
};

const githubSignIn = async () => {
  await signIn("github");
};

const logOut = async () => {
  await signOut();
}

export { googleSignIn, githubSignIn, logOut };