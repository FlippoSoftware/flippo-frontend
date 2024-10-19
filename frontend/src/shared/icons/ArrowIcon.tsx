import type { IIconProps } from "./types/IIconProps";

interface IArrowIconProps extends IIconProps {
  type?: "default" | "link";
}

const ArrowTypes = {
  default:
    "M7.82484 13L12.7248 17.9C12.9248 18.1 13.0208 18.3334 13.0128 18.6C13.0048 18.8667 12.9005 19.1 12.6998 19.3C12.4998 19.4834 12.2665 19.5794 11.9998 19.588C11.7332 19.5967 11.4998 19.5007 11.2998 19.3L4.69984 12.7C4.59984 12.6 4.52884 12.4917 4.48684 12.375C4.44484 12.2584 4.42451 12.1334 4.42584 12C4.42718 11.8667 4.44818 11.7417 4.48884 11.625C4.52951 11.5084 4.60018 11.4 4.70084 11.3L11.3008 4.70005C11.4842 4.51672 11.7135 4.42505 11.9888 4.42505C12.2642 4.42505 12.5015 4.51672 12.7008 4.70005C12.9008 4.90005 13.0008 5.13772 13.0008 5.41305C13.0008 5.68838 12.9008 5.92572 12.7008 6.12505L7.82484 11H18.9998C19.2832 11 19.5208 11.096 19.7128 11.288C19.9048 11.48 20.0005 11.7174 19.9998 12C19.9992 12.2827 19.9032 12.5204 19.7118 12.713C19.5205 12.9057 19.2832 13.0014 18.9998 13H7.82484Z",
  link: "M15.9998 8.4L7.0998 17.3C6.91647 17.4833 6.68314 17.575 6.3998 17.575C6.11647 17.575 5.88314 17.4833 5.6998 17.3C5.51647 17.1167 5.4248 16.8833 5.4248 16.6C5.4248 16.3167 5.51647 16.0833 5.6998 15.9L14.5998 7H6.9998C6.71647 7 6.47914 6.904 6.2878 6.712C6.09647 6.52 6.00047 6.28267 5.9998 6C5.99914 5.71733 6.09514 5.48 6.2878 5.288C6.48047 5.096 6.7178 5 6.9998 5H16.9998C17.2831 5 17.5208 5.096 17.7128 5.288C17.9048 5.48 18.0005 5.71733 17.9998 6V16C17.9998 16.2833 17.9038 16.521 17.7118 16.713C17.5198 16.905 17.2825 17.0007 16.9998 17C16.7171 16.9993 16.4798 16.9033 16.2878 16.712C16.0958 16.5207 15.9998 16.2833 15.9998 16V8.4Z"
};

function ArrowIcon(props: IArrowIconProps) {
  const { type = "default", isDefaultFill, ...otherProps } = props;

  return (
    <svg
      viewBox={"0 0 24 24"}
      xmlns={"http://www.w3.org/2000/svg"}
      fill={isDefaultFill ? "currentColor" : "--neutral-80"}
      {...otherProps}
    >
      <path d={ArrowTypes[type]} />
    </svg>
  );
}

export { ArrowIcon };
