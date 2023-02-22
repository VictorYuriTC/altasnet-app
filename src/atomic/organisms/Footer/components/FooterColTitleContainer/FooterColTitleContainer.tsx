import { ReactNode } from "react";

interface IFooterColTitleContainer {
  children: ReactNode;
}

function FooterColTitleContainer({ children }: IFooterColTitleContainer) {
  return <div className="d-flex flex-column gap-1 py-4">{children}</div>;
}
export default FooterColTitleContainer;
