import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { PropsWithChildren } from "react";

interface ModalProps extends PropsWithChildren {
  Trigger: React.FC;
  dialogTitle: string;
}

export const Modal = ({ Trigger, children, dialogTitle }: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger style={{ maxHeight: 30, all: "unset" }}>
        <Trigger />
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-[#00000088]" />
        <DialogContent className="fixed max-h-[90vh] overflow-auto top-1/2 left-1/2 max-lg:w-[calc(100vw-40px)] lg:w-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#333] rounded-[10px]">
          <DialogTitle className="text-[22px] text-[#ddd] p-5 m-0">{dialogTitle}</DialogTitle>
          <div className="*:text-[#ddd]">{children}</div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
