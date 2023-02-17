import { Route, Routes } from "react-router-dom";
import Home from "../atomic/pages/Home/Home";

export default function Linking() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
