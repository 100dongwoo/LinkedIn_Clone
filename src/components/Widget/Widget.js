import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import './Widget.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widget(props) {
    const newsArticle = (heading, subtitle) => (
        <widget className="widget_article">
            <div className="widget_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widget_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </widget>
    );
    return (
        <div className="widget">
            <div className="widget_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('SHOW React is back', 'TOP CXV')}
            {newsArticle('GOLD React is back', 'TOP ASD')}
            {newsArticle('PANG React is back', 'TOP REW')}
            {newsArticle('YOUNG React is back', 'TOP AWS')}
            {newsArticle('SILVER React is back', 'TOP QWE')}
        </div>
    );
}

export default Widget;
