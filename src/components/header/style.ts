import styled from 'styled-components';
import { maxWidth } from '../../constant/style';

export const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 68px;
  line-height: 68px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
  background: white;

  .nav-bar {
    overflow: hidden;
    max-width: ${maxWidth};
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
`;
