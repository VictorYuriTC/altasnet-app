import { Route, Routes } from "react-router-dom";
import WhatsAppContactIcon from "../atomic/molecules/WhatsAppContactIcon/WhatsAppContactIcon";
import Footer from "../atomic/organisms/Footer/Footer";
import Header from "../atomic/organisms/Header/Header";
import Home from "../atomic/pages/Home/Home";

export default function Linking() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <WhatsAppContactIcon />
      <Footer />
    </>
  );
}
