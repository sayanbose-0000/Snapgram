import { Archivo, JetBrains_Mono } from "next/font/google";

const archivo = Archivo({
  weight: ["400"],
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  weight: ["400"],
  subsets: ["latin"]
});

export { archivo, jetBrainsMono };