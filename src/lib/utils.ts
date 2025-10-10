import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import packageJson from '../../package.json';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getVersion = () => packageJson.version;
