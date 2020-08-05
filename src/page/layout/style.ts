import styled from 'styled-components';
import { footerHeight } from '../../components/footer/style';
import { maxWidth } from '../../constant/style';

export const LayoutBox = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 120px 20px 0;
  max-width: ${maxWidth};
  min-height: calc(100vh - ${footerHeight}px);
`;
