import styled from "styled-components";

const Accordion = styled.div`
  background: #03a9f4;
  width: 150px;
  height: 60px;
  text-align: center;
  :hover {
    cursor: pointer;
    transform: translateY(-10px);
    transition: 1s;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    border-bottom: 2px solid #eee;
    :hover {
      transform: none;
    }
  }
`;

const TabOrAccordion = ({ title, clickFunction }) => {
  return (
    // console.log('###',title)
    // <><p>{title}</p>
    <Accordion onClick={clickFunction}>
      <h3>{title}</h3>
    </Accordion>
  );
};

export default TabOrAccordion;
