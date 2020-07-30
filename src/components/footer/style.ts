import styled from 'styled-components';

export const footerHeight = 200;

export const FooterBox = styled.div`
  background: white;
  z-index: 10;
  height: ${footerHeight}px;

  .footer-social {
    padding: 25px;
    text-align: center;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);

    .social-link {
      font-size: 13px;
      padding: 0 25px;
      color: #5f5f5f;
    }
  }
`;
