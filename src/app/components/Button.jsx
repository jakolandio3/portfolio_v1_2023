import clsx from "clsx";
import Link from "next/link";

function Button({ children, size, to = "/", newTab }) {
  return (
    <Link
      scroll={false}
      href={`${to}`}
      target={newTab ? "_blank" : null}
      className={clsx(
        "block rounded-lg bg-gray-900 text-gray-400 shadow-inner hover:text-white hover:shadow-gray-600",
        size === "sm" ? "p-1" : "p-3",
      )}
    >
      {" "}
      <h1 className={clsx("", size === "sm" && "text-xs")}>{children}</h1>
    </Link>
  );
}

export default Button;
