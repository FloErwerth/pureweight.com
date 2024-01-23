import { PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren) => {
  return <div className="w-2/3 mx-auto">{children}</div>;
};
