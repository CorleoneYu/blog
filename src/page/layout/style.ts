import styled from 'styled-components';
import { footerHeight } from '../../components/footer/style';

export const LayoutBox = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 120px 20px 0;
  box-sizing: border-box;
  max-width: 940px;
  min-height: calc(100vh - ${footerHeight}px);
`;
