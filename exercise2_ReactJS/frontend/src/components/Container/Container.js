import styled from "styled-components";
import TabOrAccordion from "./TabOrAccordion/TabOrAccordion";
import MainContent from "./MainContent/MainContent";

const ContainerStyle = styled.div`
  background: #fff;
  width: 600px;
  min-height: 400px;
  padding: 30px;
  border: none;
  box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  position: relative;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Container = ({ data, setActive, active }) => {
  return (
    <ContainerStyle>
      {data.map(item => (
        <>
          <TabOrAccordion
            title={item.title}
            key={item.title}
            clickFunction={event => {
              event.preventDefault();
              setActive(item.title);
              // console.log("click->", item.title);
            }}
          />
          <MainContent check_active={active === item.title}>
            {item.content}
          </MainContent>
        </>
      ))}
    </ContainerStyle>
  );
};

export default Container;
