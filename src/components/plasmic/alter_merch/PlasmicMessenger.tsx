// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xtfWGDm5314EDVZ9cvmE1G
// Component: LEQxAUVaGP
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_alter_merch.module.css"; // plasmic-import: xtfWGDm5314EDVZ9cvmE1G/projectcss
import sty from "./PlasmicMessenger.module.css"; // plasmic-import: LEQxAUVaGP/css

export type PlasmicMessenger__VariantMembers = {};
export type PlasmicMessenger__VariantsArgs = {};
type VariantPropType = keyof PlasmicMessenger__VariantsArgs;
export const PlasmicMessenger__VariantProps = new Array<VariantPropType>();

export type PlasmicMessenger__ArgsType = {};
type ArgPropType = keyof PlasmicMessenger__ArgsType;
export const PlasmicMessenger__ArgProps = new Array<ArgPropType>();

export type PlasmicMessenger__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultMessengerProps {
  className?: string;
}

function PlasmicMessenger__RenderFunc(props: {
  variants: PlasmicMessenger__VariantsArgs;
  args: PlasmicMessenger__ArgsType;
  overrides: PlasmicMessenger__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  return (
    <React.Fragment>
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        />
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMessenger__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMessenger__VariantsArgs;
    args?: PlasmicMessenger__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMessenger__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMessenger__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicMessenger__ArgProps,
          internalVariantPropNames: PlasmicMessenger__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicMessenger__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMessenger";
  } else {
    func.displayName = `PlasmicMessenger.${nodeName}`;
  }
  return func;
}

export const PlasmicMessenger = Object.assign(
  // Top-level PlasmicMessenger renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicMessenger
    internalVariantProps: PlasmicMessenger__VariantProps,
    internalArgProps: PlasmicMessenger__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMessenger;
/* prettier-ignore-end */
