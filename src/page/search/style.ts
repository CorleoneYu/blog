import styled from 'styled-components';

const inputHeight = '40px';

export const SearchBox = styled.div`
  .search-input-container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border: 1px solid rgba(184, 197, 214, 0.2);
    border-radius: 20px;
    background: white;
    font-size: 14px;

    .search-input {
      flex: 1;
      display: inline-block;
      height: ${inputHeight};
      line-height: ${inputHeight};
      outline: none;
      border: none;
    }
  }

  .tag-list {
    margin-top: 20px;
    padding-bottom: 50px;
  }
`;
