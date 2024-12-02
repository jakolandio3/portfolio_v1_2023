"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Button from "./Button";

function Modal({
  content,
  modalName,
  modalButton = "ModalButton-Placeholder",
}: ModalProps) {
  const searchParams = useSearchParams();
  let showModal = searchParams.has(`modal_${modalName}`);
  return (
    <>
      <Link scroll={false} href={`?modal_${modalName}`}>
        {modalButton}
      </Link>
      {showModal && <BoxModal content={content} />}
    </>
  );
}

export default Modal;

function BoxModal({ content }: Pick<ModalProps, "content">) {
  return (
    <div
      id="modal1"
      className="relative left-[-130%] top-[-15%] z-[10] flex h-[130%] w-[250%] rounded-xl  bg-[rgba(255,255,255,0)] backdrop-blur-sm"
    >
      <div className="no-scrollbar relative left-[10%] z-[50] h-[70%] w-[80%] self-center overflow-y-scroll rounded-xl border bg-transparent p-3">
        {content}
        <div className="fixed right-[-5%] top-[-50px] m-20">
          <Button href="#">❌</Button>
        </div>
      </div>
    </div>
  );
}

interface ModalProps {
  content: React.ReactNode;
  modalName: string;
  modalButton?: React.ReactNode;
}
