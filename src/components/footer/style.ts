import styled from 'styled-components';
import { maxWidth } from '../../constant/style';

export const footerHeight = 350;

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

  .footer-info {
    max-width: ${maxWidth};
    margin: 0 auto;
    margin-top: 50px;
    display: flex;

    .info-item {
      width: 33.33333%;
      padding: 0 30px;

      .info-title {
        font-size: 14px;
        color: #5f5f5f;
        margin-bottom: 10px;
      }

      .link-list {
        font-size: 13px;
        line-height: 25px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #767676;
      }
    }
  }
`;
