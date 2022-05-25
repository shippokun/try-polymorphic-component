import * as React from "react";
import styled from "styled-components";

import {
  Polymorphic,
  PolymorphicComponentType,
  PolymorphicComponentProps,
} from "../libs";

type OwnProps = {
  isCurrent?: boolean;
};

type Props<E extends React.ElementType> = PolymorphicComponentProps<
  OwnProps,
  E
>;

const defaultElement: React.ElementType = "a";

export const Header = <E extends React.ElementType = typeof defaultElement>(
  props: Props<E>,
) => {
  return (
    <Wrap>
      <Element {...props} />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: inline-block;
  border-radius: 4px;
  background-color: #fff;
  padding: 4px;
  pointer-events: none;

  &:hover {
    background-color: #c8c8c8;
  }

  &:active {
    background-color: #a2a2a2;
  }
`;

const Element: PolymorphicComponentType<
  OwnProps,
  typeof defaultElement
> = styled(Polymorphic)<OwnProps>`
  border-bottom: 1px solid
    ${(props) => (props.isCurrent ? "orange" : "transparent")};
  pointer-events: auto;
  margin: 4px;
`;
