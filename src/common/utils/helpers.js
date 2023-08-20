import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cx = (...inputs) => twMerge(clsx(inputs));

export default cx;
