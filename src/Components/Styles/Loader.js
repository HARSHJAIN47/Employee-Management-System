import styled from "styled-components";

const Loader = styled.div`
  border: 5px solid #00a333;
  border-radius: 50%;
  border-top: 5px solid #ffff;
  width: 30px;
  height: 30px;
  position: relative;
  top: 498px;
  right: -1100px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  z-index: 2;
`;
export default Loader;
