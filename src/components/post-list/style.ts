import styled from 'styled-components';

export const PostListBox = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  .post-list-item {
    width: 33.333%;
    padding: 15px;
  }
`;

export const PostItemBox = styled.div`
  position: relative;
  border-radius: 3px;
  overflow: hidden;

  .triangles-container {
    .triangle {
      position: absolute;
      z-index: 0;
      right: 0;
      bottom: 50px;
      left: 0;
      width: 110%;
      min-height: 100px;
      transform: rotate(7deg) translate(-10px, 0);
      background: white;
    }

    .triangle-reverse {
      transform: rotate(-10deg) translate(-10px, 0);
      opacity: 0.7;
    }
  }

  .item-label {
    position: relative;
    height: 130px;
    padding: 10px 20px 40px 20px;
    background: white;

    .item-title {
      font-size: 17px;
      word-break: break-all;
      color: #313131;
      cursor: pointer;
    }

    .item-tag-list {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      padding: 0 15px 15px;

      .item-tag {
        margin-right: 10px;
        font-size: 13px;
        color: #5f5f5f;
      }
    }
  }
`;

interface IThumbProps {
  url: string;
}

export const Thumb = styled.div`
  width: 100%;
  min-height: 250px;
  background-size: cover;
  background-position: 50%;
  background-image: url(${(props: IThumbProps) => props.url});
`;
