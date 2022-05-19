import * as React from "react";
import styled from "styled-components";

import { Polymorphic } from "../libs";

type Props = React.ComponentProps<typeof Polymorphic> & {
  isCurrent?: boolean;
};
export const Header = (props: Props) => {
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

const Element = styled(Polymorphic)<{ isCurrent: Props["isCurrent"] }>`
  border-bottom: 1px solid
    ${(props) => (props.isCurrent ? "orange" : "transparent")};
  pointer-events: auto;
  margin: 4px;
`;
