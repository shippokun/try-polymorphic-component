import * as React from "react";

import { PolymorphicPropsWithRef } from "./type";

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
