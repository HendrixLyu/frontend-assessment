import "./App.css";
import styled from "styled-components";
import Container from "./components/Container";
import { useEffect, useState } from "react";
import getData from "./api/getData";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to bottom right, #69c0ff 0%, #b7eb8f 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("");
  useEffect(() => {
    getData("/data").then(res => {
      // console.log(res.data);
      setData(res.data);
      setLoading(false);
    });
  }, []);
  // const res_test = axios.get("http://localhost:7890/api/data").then(res => console.log(res.data))
  return (
    <>
      {!loading && (
        <Wrapper>
          <Container data={data} setActive={setActive} active={active} />
        </Wrapper>
      )}
    </>
  );
}

export default App;
