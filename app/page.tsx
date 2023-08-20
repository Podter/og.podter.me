import Link from "next/link";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full justify-center items-center">
      <h1 className="font-bold text-4xl">og.podter.me</h1>
      <p className="mt-2">I generate OpenGraph images.</p>
      <Link
        href="https://podter.me"
        className="mt-3 text-sm font-medium underline underline-offset-4 decoration-neutral-800/25 hover:decoration-neutral-800/50 dark:decoration-neutral-300/25 dark:hover:decoration-neutral-300/50 transition-colors"
      >
        podter.me
      </Link>
    </main>
  );
}
