import { OpenAIImage } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-5">
        <OpenAIImage />
      </div>
    </main>
  );
}
