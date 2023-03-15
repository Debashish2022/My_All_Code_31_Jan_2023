import React from 'react';
import './PageNotAvailable.css';
import SadImage from '../../assets/navbar/sadEmoji.png';
import { Row } from 'react-bootstrap';

export default function PageNotAvailable() {
  return (
    <div>
        <Row id="pageNotAvailableDiv"><img src={SadImage} id="sadEmojiImg" /></Row>
        <Row id="pageNotAvailableDiv" className='pb-5'><h1 id="pageNotAvailableTxt">Page Not Found</h1></Row>
    </div>
  )
}
