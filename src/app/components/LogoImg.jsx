import clsx from "clsx";
import { HiCake } from "react-icons/hi2";

function LogoImg({ size }) {
  return (
    <div
      className={clsx(
        "flex h-[50px] w-[50px] content-center items-center justify-center rounded-t-2xl border bg-gradient-to-r  from-[rgba(0,0,255,0.3)] via-[rgba(190,10,10,0.3)] to-[rgba(167,202,11,0.3)] text-center align-middle opacity-100",
        size === "sm" && "h-[30px] w-[30px]",
      )}
    >
      <HiCake />
    </div>
  );
}

export default LogoImg;
