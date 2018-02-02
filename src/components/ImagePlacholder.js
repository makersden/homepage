import styled from "styled-components";

const ImagePlaceholder = styled.div`
  max-width: ${props => props.width};
  height: ${props => props.height};
  flex: 1;
  ${props =>
    props.border &&
    `
    border: 1px solid #979797;
  `} border-radius: 1px;

  background: rgba(0, 0, 0, 0.05);
`;

export default ImagePlaceholder;
