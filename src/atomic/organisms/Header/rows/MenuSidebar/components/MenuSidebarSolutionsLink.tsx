import { Dispatch, SetStateAction } from "react";
import { Plus, X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Colors from "../../../../../../foundations/Colors/Colors";

interface IMenuSibarLink {
  text?: string;
  to: string;
  setIsHoveringSolutions: Dispatch<SetStateAction<boolean>>;
  isHoveringSolutions: SetStateAction<boolean>;
}

function MenuSidebarSolutionsLink({
  to,
  text,
  setIsHoveringSolutions,
  isHoveringSolutions,
}: IMenuSibarLink) {
  return (
    <Link
      className="d-flex flex-column text-decoration-none py-2"
      to={to}
      style={{
        borderBottom: `1px solid ${Colors.WHITE}10`,
      }}
      onMouseEnter={() => setIsHoveringSolutions(true)}
      onMouseLeave={() => setIsHoveringSolutions(false)}>
      <span
        className="ps-3"
        style={{
          color: Colors.WHITE,
          opacity: isHoveringSolutions ? "1.0" : "0.8",
        }}>
        {text}
      </span>

      <div className="d-flex justify-content-end">
        {!isHoveringSolutions && (
          <Plus
            color="white"
            opacity="0.5"
            width={24}
            height={24}
            className="position-absolute me-2"
            style={{ translate: "0em -1.5em" }}
          />
        )}

        {isHoveringSolutions && (
          <X
            color="white"
            opacity="0.5"
            width={24}
            height={24}
            className="position-absolute me-2"
            style={{ translate: "0em -1.5em" }}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              e.nativeEvent.stopImmediatePropagation();
              setIsHoveringSolutions(false);
            }}
          />
        )}
      </div>
    </Link>
  );
}
export default MenuSidebarSolutionsLink;
