import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Hello world!</h1>
        <p>
          This is a placeholder, I'm working on a portfolio website that I'll
          upload here soon. For now you can check out my blog at{" "}
          <a
            className="underline text-sky-500 decoration-sky-500 hover:text-sky-700 hover:decoration-sky-700 dark:hover:text-sky-200 dark:hover:decoration-sky-200"
            href="https://blog.putnam.computer/"
          >
            this link
          </a>
          .
        </p>
      </main>
    </div>
  );
}
