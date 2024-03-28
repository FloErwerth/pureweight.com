import { PropsWithChildren } from "react";
import { Footer } from "@/components/Footer.tsx";

export const Main = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="max-lg:px-0 w-2/3 max-lg:w-full mx-auto">{children}</div>
      <Footer />
    </>
  );
};
