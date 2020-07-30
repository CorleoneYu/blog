import React from 'react';
import { FooterBox } from './style';

interface ISocialItem {
  name: string;
  link: string;
}

const socialList: ISocialItem[] = [
  {
    name: 'LKY-GITHUB',
    link: 'https://github.com/CorleoneYu',
  },
  {
    name: 'CWL-GITHUB',
    link: 'https://github.com/WeilinChen507',
  },
];

export default function Footer() {
  return (
    <FooterBox>
      <div className="footer-social">
        {socialList.map((social) => {
          return (
            <a
              className="social-link"
              target="blank"
              href={social.link}
              key={social.name}
            >
              {social.name}
            </a>
          );
        })}
      </div>
      <div className="footer-info">
        <div className="info-item copyright"></div>
        <div className="info-item posts"></div>
      </div>
    </FooterBox>
  );
}
