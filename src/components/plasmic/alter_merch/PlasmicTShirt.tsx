// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xtfWGDm5314EDVZ9cvmE1G
// Component: wUsp9C_j8X
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
import sty from "./PlasmicTShirt.module.css"; // plasmic-import: wUsp9C_j8X/css

export type PlasmicTShirt__VariantMembers = {};
export type PlasmicTShirt__VariantsArgs = {};
type VariantPropType = keyof PlasmicTShirt__VariantsArgs;
export const PlasmicTShirt__VariantProps = new Array<VariantPropType>();

export type PlasmicTShirt__ArgsType = {};
type ArgPropType = keyof PlasmicTShirt__ArgsType;
export const PlasmicTShirt__ArgProps = new Array<ArgPropType>();

export type PlasmicTShirt__OverridesType = {
  root?: p.Flex<"a">;
};

export interface DefaultTShirtProps {
  className?: string;
}

function PlasmicTShirt__RenderFunc(props: {
  variants: PlasmicTShirt__VariantsArgs;
  args: PlasmicTShirt__ArgsType;
  overrides: PlasmicTShirt__OverridesType;

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
    <a
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.__wab_text,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      {"T-shirts"}
    </a>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTShirt__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTShirt__VariantsArgs;
    args?: PlasmicTShirt__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTShirt__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTShirt__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicTShirt__ArgProps,
          internalVariantPropNames: PlasmicTShirt__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTShirt__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTShirt";
  } else {
    func.displayName = `PlasmicTShirt.${nodeName}`;
  }
  return func;
}

export const PlasmicTShirt = Object.assign(
  // Top-level PlasmicTShirt renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTShirt
    internalVariantProps: PlasmicTShirt__VariantProps,
    internalArgProps: PlasmicTShirt__ArgProps
  }
);

export default PlasmicTShirt;
/* prettier-ignore-end */
