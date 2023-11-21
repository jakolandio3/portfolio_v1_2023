"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Button from "./Button";

function Modal({ content, modalName }) {
  const searchParams = useSearchParams();
  let showModal = searchParams.has(`modal_${modalName}`);
  return (
    <>
      <Link href={`/?modal_${modalName}`}>toggle modal</Link>
      {showModal && <BoxModal content={content} />}
    </>
  );
}

export default Modal;

function BoxModal({ content }) {
  return (
    <div
      id="modal1"
      className=" fixed left-[0%] top-[0%] z-[10] h-[100%] w-[100%]  bg-[rgba(255,255,255,0.1)] backdrop-blur-sm"
    >
      <div className=" fixed left-[25%]  top-[25%] z-[50] h-[50%] w-[50%] overflow-hidden rounded-xl border bg-transparent p-3">
        {content}
        <div className="fixed right-0 top-0 m-20">
          <Button>❌</Button>
        </div>
      </div>
    </div>
  );
}
