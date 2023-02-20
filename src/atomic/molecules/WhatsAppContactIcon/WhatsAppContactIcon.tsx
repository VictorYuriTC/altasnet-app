import { useState } from "react";
import { Whatsapp } from "react-bootstrap-icons";
import Colors from "../../../foundations/Colors/Colors";

function WhatsAppContactIcon() {
  const WHATSAPP_COLOR = "#25D366";
  const [isHoveringWhatsApp, setIsHoveringWhatsApp] = useState(false);
  return (
    <div
      className="d-flex align-items-center position-fixed bottom-0 end-0 d-flex text-decoration-none"
      style={{
        zIndex: "150",
      }}>
      <a
        href="https://api.whatsapp.com/send/?phone=553195767298&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => {
          isHoveringWhatsApp
            ? setIsHoveringWhatsApp(true)
            : setIsHoveringWhatsApp(false);
        }}
        onMouseLeave={() => {
          setIsHoveringWhatsApp(false);
        }}
        style={{
          backgroundColor: WHATSAPP_COLOR,
          borderRadius: "1em",
          height: "2em",
          marginBottom: "1em",
          color: Colors.WHITE,
          opacity: isHoveringWhatsApp ? "1.0" : "0",
          visibility: isHoveringWhatsApp ? "visible" : "hidden",
          transition: "400ms",
          scale: isHoveringWhatsApp ? "1.0" : "0",
        }}
        className="text-decoration-none d-flex align-items-center justify-content-center px-4 py-2 me-1">
        <span>Fale conosco</span>
      </a>

      <a
        href="https://api.whatsapp.com/send/?phone=553195767298&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noreferrer">
        {" "}
        <Whatsapp
          onMouseEnter={() => setIsHoveringWhatsApp(true)}
          onMouseLeave={() => setIsHoveringWhatsApp(false)}
          style={{
            backgroundColor: WHATSAPP_COLOR,
            borderRadius: "0.5em",
            padding: "0.4em",
            marginRight: "1em",
            marginBottom: "1em",
          }}
          color={Colors.WHITE}
          width={48}
          height={48}
        />
      </a>
    </div>
  );
}
export default WhatsAppContactIcon;
