import styled from 'styled-components';
import { scaleUp } from '../../common/animations';

const Option = styled.li`
  animation: ${scaleUp} 0.3s ease forwards;
  cursor: pointer;
  display: inline-block;
  margin: 2px;
  transform: scale(0);
`;

export default Option;
