import clsx from "clsx";
import Link from "next/link";

function Button({ children, size, to = "/", newTab, scroll = false }) {
  return (
    <Link
      scroll={scroll}
      href={`${to}`}
      target={newTab ? "_blank" : null}
      className={clsx(
        "block rounded-lg border border-button-text bg-button-bg font-bold text-button-text shadow-inner hover:text-black hover:shadow-gray-600",
        size === "sm" ? "p-1" : "p-3",
      )}
    >
      {" "}
      <h1 className={clsx("", size === "sm" && "text-xs")}>{children}</h1>
    </Link>
  );
}

export default Button;
