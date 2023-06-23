import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px
  font-weight: 600;
  background-color: yellow;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem, 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  margin: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

function App() {
  return (
    <div>
      <H1>Hotel Paradiso</H1>
      <Button onClick={() => alert("Check in")}>Check In</Button>
      <Button onClick={() => alert("Check out")}>Check Out</Button>

      <Input type="number" placeholder="Number of guests"></Input>
    </div>
  );
}

export default App;
