import { Col, Row } from "reactstrap";
import Colors from "../../../../../foundations/Colors/Colors";
import arubaLogo from "../../../../../imgs/aruba-networks.png";
import blackberryCylanceLogo from "../../../../../imgs/blackberry-cylance.png";
import f5Logo from "../../../../../imgs/f5.png";
import fortinetLogo from "../../../../../imgs/fortinet.png";
import hewlettPackardLogo from "../../../../../imgs/hewlett-packard.png";
import lenovoLogo from "../../../../../imgs/lenovo.png";
import nutanixLogo from "../../../../../imgs/nutanix.png";
import questLogo from "../../../../../imgs/quest.png";
import serviceNowLogo from "../../../../../imgs/service-now.png";
import veeamLogo from "../../../../../imgs/veeam.png";
import CompanyLogoCard from "./CompanyLogoCard";

function StrategicAlliancesRow() {
  return (
    <>
      <Row style={{ paddingTop: "10em", paddingBottom: "3.5em" }}>
        <Col
          md={{ offset: 3, size: 6 }}
          className="d-flex flex-column align-items-center justify-content-center ">
          <h1
            style={{
              fontWeight: "900",
              color: Colors.BLACK,
            }}>
            Alianças Estratégicas
          </h1>
          <div
            style={{
              backgroundColor: Colors.SECONDARY,
              width: "20%",
              height: "1px",
            }}
          />
        </Col>
      </Row>

      <Row className="d-flex justify-content-md-center">
        <CompanyLogoCard companyLogo={arubaLogo} />
        <CompanyLogoCard companyLogo={blackberryCylanceLogo} />
        <CompanyLogoCard companyLogo={f5Logo} />
        <CompanyLogoCard companyLogo={fortinetLogo} />
        <CompanyLogoCard companyLogo={hewlettPackardLogo} />
        <CompanyLogoCard companyLogo={lenovoLogo} />
        <CompanyLogoCard companyLogo={nutanixLogo} />
        <CompanyLogoCard companyLogo={questLogo} />
        <CompanyLogoCard companyLogo={serviceNowLogo} />
        <CompanyLogoCard companyLogo={veeamLogo} />
      </Row>
    </>
  );
}
export default StrategicAlliancesRow;
