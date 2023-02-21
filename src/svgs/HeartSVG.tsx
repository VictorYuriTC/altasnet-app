import { CSSProperties, MouseEventHandler } from "react";

interface IHeartSVG {
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  onClick?: MouseEventHandler<SVGSVGElement>;
  fill?: string;
  style?: CSSProperties;
  className?: string;
  height?: number;
  width?: number;
}

function HeartSVG({
  onMouseEnter,
  onMouseLeave,
  onClick,
  fill,
  style,
  className,
  height,
  width,
}: IHeartSVG) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${className}`}
      role="button"
      width={width || 24}
      height={height || 24}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{
        ...style,
      }}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
}
export default HeartSVG;
