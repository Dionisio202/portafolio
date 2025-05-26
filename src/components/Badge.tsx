import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

const Badge = ({ children }: BadgeProps) => {
  return (
    <span
      className="
        relative text-sm font-light px-4 py-1 rounded-full border shadow-sm hover:shadow-lg 
        transition-all duration-300 ease-out overflow-hidden
        border-gray-400 text-gray-100 bg-[length:300%_300%] animate-gradientMove
        bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700
        dark:from-zinc-600 dark:via-emerald-700 dark:to-zinc-800
        dark:border-emerald-400/15 dark:shadow-emerald-400/10
        hover:dark:shadow-emerald-300/18 hover:scale-105
        before:absolute before:inset-0 before:bg-gradient-to-r 
        before:from-transparent before:via-white/20 before:to-transparent
        before:translate-x-[-100%] before:animate-shine before:rounded-full
      "
    >
      {children}
    </span>
  );
};

export default Badge;