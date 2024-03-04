import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
} from "@radix-ui/react-dialog";

export const MenuModal = () => {
  return (
    <Dialog>
      <DialogTrigger style={{ maxHeight: 30, all: "unset" }}>
        <div>-</div>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-[#00000088]" />
        <DialogContent className="fixed max-h-[90vh] overflow-auto top-1/2 left-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#333] rounded-[10px]">
          <div></div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
