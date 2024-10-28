import { forwardRef } from "react";

export const PrimaryButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={`pt-3 pb-3 pr-10 pl-10 rounded-full bg-white text-gray-900 font-bold hover:scale-110 transition-all ${
        props.className ?? ""
      }`}
    >
      {children}
    </button>
  );
});

PrimaryButton.displayName = "PrimaryButton";
