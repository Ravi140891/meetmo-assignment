import Image from "next/image";
import TranslationScreen from "./components/TranslationScreen";

export default function Home() {
  return (
    <main className="w-full max-w-md flex items-center justify-center mx-auto">
      <TranslationScreen />
    </main>
  );
}
