import styled from 'styled-components';

export const TagListBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  .tag-list-item {
    font-size: 13px;
    display: inline-block;
    margin: 10px 8px 0 0;
    padding: 2px 15px;
    transition-duration: 0.4s;
    letter-spacing: 0;
    border-radius: 15px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
    color: white;
    cursor: pointer;
  }
`;
