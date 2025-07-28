import GithubSignInComp from "@/components/login/GithubSignInComp";
import GoogleSIgnInComp from "@/components/login/GoogleSIgnInComp";
import { jetBrainsMono } from "@/fonts/font";

const LoginPage = () => {
  return (
    <main className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className={`text-5xl font-bol ${jetBrainsMono.className}`}>
            Snapgram
          </h1>

          <p className="py-6">
            Share your everyday moments with our app. Snap photos, post short
            videos, and stay connected with friends. Follow your favorite
            creators, explore new stories, and join a community that celebrates
            real, authentic vibes. Start sharing today!
          </p>

          <div className="divider">Continue with</div>

          <div className="flex flex-row justify-center items-center gap-4">
            <GoogleSIgnInComp />
            <GithubSignInComp />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
