import Link from "next/link";

import { ArrowLeftIcon } from "@radix-ui/react-icons";

import { AISelector } from "@/components/features";
import { Button, Header } from "@/components/ui";

export default function AiSelectroPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between gap-5 p-24">
        <Link href={"/"}>
          <Button>
            <ArrowLeftIcon className="size-5" /> Back
          </Button>
        </Link>
        <AISelector />
      </main>
    </>
  );
}
