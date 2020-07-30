import styled from 'styled-components';

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
    display: flex;
    justify-content: space-between;
    padding: 0 25px;

    .nav-link {
      cursor: pointer;
    }

    .nav-menu {
    }
  }
`;
