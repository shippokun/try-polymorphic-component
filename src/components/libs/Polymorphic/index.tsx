import * as React from "react";

import { PolymorphicPropsWithRef } from "./type";
export type { PolymorphicPropsWithRef as PolymorphicComponentProps } from "./type";

type Props = {
  children: React.ReactNode;
};

const defaultElement: React.ElementType = "div";

export const Polymorphic = <
  E extends React.ElementType = typeof defaultElement,
>(
  props: PolymorphicPropsWithRef<Props, E>,
) => {
  const { as, children, ...restProps } = props;
  const Element = as || defaultElement;

  return <Element {...restProps}>{children}</Element>;
};

export type PolymorphicComponentType<P, D extends React.ElementType> = <
  E extends React.ElementType = D,
>(
  props: PolymorphicPropsWithRef<P, E>,
) => React.ReactElement | null;
