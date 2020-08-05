import React from 'react';
import { FooterBox } from './style';
import { ILink } from '../../type';
import { Link } from 'react-router-dom';
import { RouterMap } from '../../constant/history';
import useRecentBlogs from '../../hooks/useRecentBlogs';
import useRecentComments from '../../hooks/useRecentComments';

const socialList: ILink[] = [
  {
    render: 'LKY',
    link: 'https://github.com/CorleoneYu',
  },
  {
    render: 'CWL',
    link: 'https://github.com/WeilinChen507',
  },
];

export default function Footer() {
  const { recentBlogs } = useRecentBlogs();
  const { recentComments } = useRecentComments();

  return (
    <FooterBox>
      <div className="footer-social">
        {socialList.map((social) => {
          return (
            <a className="social-link" target="blank" href={social.link} key={social.link}>
              {social.render}
            </a>
          );
        })}
      </div>
      <div className="footer-info">
        <div className="info-item copyright">
          <h3 className="info-title">Lky & Cwl</h3>
          <p>Copyright© 2020</p>
        </div>
        <div className="info-item recent-posts">
          <h3 className="info-title">RECENT POSTS</h3>
          <div className="link-list">
            {recentBlogs.map((blog) => {
              return (
                <div className="link" key={blog.id}>
                  <Link to={RouterMap.article}>{blog.title}</Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="info-item recent-commits">
          <h3 className="info-title">RECENT COMMENTS</h3>
          <div className="link-list">
            {recentComments.map((comment) => {
              return (
                <div className="link" key={comment.id}>
                  <Link to={RouterMap.article}>
                    <span>{comment.name ? comment.name : '女装大佬'}：</span>
                    <span>{comment.content}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </FooterBox>
  );
}
