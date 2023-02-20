import { Col } from "reactstrap";
import { capitalizeFirstLetter } from "../../../../../utils/stringFunctions";
import useStrategicalAllianceLogoSize from "./useStrategicalAllianceLogoSize";

interface ICompanyLogoCard {
  companyLogo: string;
}

function CompanyLogoCard({ companyLogo }: ICompanyLogoCard) {
  const logoSize = useStrategicalAllianceLogoSize();
  return (
    <Col
      xs={{ offset: 1, size: 10 }}
      md={{ offset: 0, size: 2 }}
      className="d-flex justify-content-center">
      <img
        src={companyLogo}
        alt={`${capitalizeFirstLetter(
          companyLogo
        )}'s logo, Altasnet's strategical alliance.`}
        style={{
          width: logoSize.width,
        }}
      />
    </Col>
  );
}
export default CompanyLogoCard;
