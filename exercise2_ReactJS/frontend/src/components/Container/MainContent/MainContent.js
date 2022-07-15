import styled, { css } from "styled-components";

const ActiveStyle = css`
  display: block;
`;

const Panel = styled.div`
  display: none;
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  padding: 40px;
  background: #eeeeee;
  ${({ is_active }) => is_active && ActiveStyle}
  @media screen and (max-width: 768px) {
    position: relative;
    top: 1px;
  }
`;

const MainContent = ({ check_active = false, children }) => {
  return <Panel is_active={check_active}>{children}</Panel>;
};

export default MainContent;
