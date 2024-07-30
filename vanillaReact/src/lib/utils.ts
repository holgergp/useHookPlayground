import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function timedPromise(seconds: number): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Done in ${seconds} seconds`), seconds * 1000),
  );
}
