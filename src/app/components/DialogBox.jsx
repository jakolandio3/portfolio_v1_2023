"use client";
import * as Dialog from "@radix-ui/react-dialog";

import { useState } from "react";
import HamburgerLinks from "./HanburgerLinks";

function DialogDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className="Button violet">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-10 w-10 stroke-current"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed top-0 grid h-full w-full" />
        <Dialog.Content className="DialogContent fixed top-0 z-50 h-full w-full bg-base-200">
          <Dialog.Title className="DialogTitle"></Dialog.Title>
          <Dialog.Description className="DialogDescription"></Dialog.Description>

          <div className="">
            <ul className="menu z-50 flex min-h-full w-full flex-col gap-8 bg-base-200 p-4 text-base-content">
              <Dialog.Close asChild>
                <button className="text-2xl">❌</button>
              </Dialog.Close>
              <li>
                {" "}
                <HamburgerLinks onChangeState={setIsOpen} />
              </li>
            </ul>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default DialogDemo;
