import type { IIconProps } from "./types/IIconProps";

function ItalicIcon(props: IIconProps) {
  const { isDefaultFill, ...otherProps } = props;

  return (
    <svg
      viewBox={"0 0 24 24"}
      xmlns={"http://www.w3.org/2000/svg"}
      fill={isDefaultFill ? "currentColor" : "--neutral-80"}
      {...otherProps}
    >
      <path
        d={
          "M6.25 19C5.9 19 5.604 18.879 5.362 18.637C5.12 18.395 4.99934 18.0993 5 17.75C5.00067 17.4007 5.12167 17.1047 5.363 16.862C5.60434 16.6193 5.9 16.4987 6.25 16.5H9L12 7.50001H9.25C8.9 7.50001 8.604 7.37901 8.362 7.13701C8.12 6.89501 7.99934 6.59934 8 6.25001C8.00067 5.90068 8.12167 5.60468 8.363 5.36201C8.60434 5.11934 8.9 4.99868 9.25 5.00001H16.75C17.1 5.00001 17.396 5.12101 17.638 5.36301C17.88 5.60501 18.0007 5.90068 18 6.25001C17.9993 6.59934 17.8783 6.89534 17.637 7.13801C17.3957 7.38068 17.1 7.50134 16.75 7.50001H14.5L11.5 16.5H13.75C14.1 16.5 14.396 16.621 14.638 16.863C14.88 17.105 15.0007 17.4007 15 17.75C14.9993 18.0993 14.8783 18.3953 14.637 18.638C14.3957 18.8807 14.1 19.0013 13.75 19H6.25Z"
        }
      />
    </svg>
  );
}

export { ItalicIcon };
