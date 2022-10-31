// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group14Icon(props: Group14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 10"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.075 7.202l-1.56.012c-.764 0-1.226-.045-1.385-.134-.151-.084-.223-.185-.223-.302a.96.96 0 01.096-.39l.652-1.374C1.058 4.835.637 4.542.382 4.132.127 3.724 0 3.21 0 2.59c0-.617.052-1.084.16-1.396A1.39 1.39 0 01.795.447 2.774 2.774 0 011.894.089C2.328.031 2.917 0 3.661 0h3.995c.199 0 .302.173.302.514 0 .173-.103.276-.302.312l-.048.012-.796.1c.35.396.526.905.526 1.53 0 .99-.279 1.703-.828 2.133-.541.432-1.492.647-2.85.647h-.397l-.16.603c1.378.023 2.277.062 2.69.112.414.045.701.106.86.179.16.067.307.173.446.312.147.134.23.29.255.47.031.178.047.412.047.703 0 .715-.282 1.231-.843 1.552-.565.327-1.568.491-3.009.491-.668 0-1.512-.067-2.53-.2-.183-.023-.27-.244-.27-.66 0-.41.083-.614.254-.614h.048c1.09.09 1.961.134 2.61.134.656 0 1.066-.039 1.225-.111.16-.067.24-.235.24-.503s-.072-.421-.208-.458c-.139-.039-.422-.056-.843-.056zm.047-5.962c-.795 0-1.28.06-1.448.178-.16.112-.239.433-.239.96 0 .53.032.913.096 1.15.071.232.147.366.223.403.071.039.254.055.54.055.287 0 .514-.002.685-.01a.94.94 0 00.494-.19.573.573 0 00.238-.436c.02-.179.032-.46.032-.849 0-.385-.032-.675-.095-.87-.064-.193-.136-.305-.207-.336a.754.754 0 00-.319-.055z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group14Icon;
/* prettier-ignore-end */
