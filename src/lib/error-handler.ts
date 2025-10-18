import { notFound } from "next/navigation";

export function handleError(err: unknown): never {
  if (err instanceof Error && err.message === "Not Found") {
    return notFound();
  }

  throw err;
}
