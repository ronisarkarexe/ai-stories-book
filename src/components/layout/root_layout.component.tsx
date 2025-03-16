import { ReactNode } from "react";
// import TopHeaderComponent from "../top_header/top_header.component";
import FooterComponent from "../footer/footer.component";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      {/* <TopHeaderComponent /> */}
      <div className="min-h-screen">{children}</div>
      <FooterComponent />
    </>
  );
};

export default RootLayout;
