import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Widgets() {

    // const newsArticle = (heading, subtitle) => {
    //     <div className="widgets_article">
    //         <div className="widgets_articleLeft">
    //             <FiberManualRecordIcon/>
    //         </div>
    //         <div className="widgets_articleRight">
    //             <h4>{heading}</h4>
    //             <p>{subtitle}</p>
    //         </div>
    //     </div>
    // }

    return (
        <div className='widgets'>
            <div className="widgets_header">
                <h2>Linkedin News</h2>
                <InfoIcon/>
            </div>
            {/* {newsArticle('Corona Virus India Update:', 'Top News 9k readers')}
            {newsArticle('Corona Virus India Update:', 'Top News 9k readers')}
            {newsArticle('Corona Virus India Update:', 'Top News 9k readers')}
            {newsArticle('Corona Virus India Update:', 'Top News 9k readers')}
            {newsArticle('Corona Virus India Update:', 'Top News 9k readers')}
            {newsArticle('Corona Virus India Update:', 'Top News 9k readers')}
            {newsArticle('Corona Virus India Update:', 'Top News 9k readers')}
         */}
                <div className="widgets_article">
                    <div className="widgets_articleLeft">
                        <FiberManualRecordIcon/>
                    </div>
                <div className="widgets_articleRight">
                        <h4>Google</h4>
                        <p>grow with google - India</p>
                    </div>
                    
                </div>
                <div className="widgets_article">
                    <div className="widgets_articleLeft">
                        <FiberManualRecordIcon/>
                    </div>
                <div className="widgets_articleRight">
                        <h4>The power of now</h4>
                        <p>3 days ago. 6789 readers</p>
                    </div>
                    
                </div>
                <div className="widgets_article">
                    <div className="widgets_articleLeft">
                        <FiberManualRecordIcon/>
                    </div>
                <div className="widgets_articleRight">
                        <h4>The impact of remote work</h4>
                        <p>9 min ago. 298 readers</p>
                    </div>
                    
                </div>
                <div className="widgets_article">
                    <div className="widgets_articleLeft">
                        <FiberManualRecordIcon/>
                    </div>
                <div className="widgets_articleRight">
                        <h4>Chrome's contraversial logo change</h4>
                        <p>7 days ago. 117,849 readers</p>
                    </div>
                    
                </div>
                <div className="widgets_article">
                    <div className="widgets_articleLeft">
                        <FiberManualRecordIcon/>
                    </div>
                <div className="widgets_articleRight">
                        <h4>Machine learning</h4>
                        <p>11 hrs ago. 2967 readers</p>
                    </div>
                    
                </div>
                <div className="widgets_article">
                    <div className="widgets_articleLeft">
                        <FiberManualRecordIcon/>
                    </div>
                <div className="widgets_articleRight">
                        <h4>Covid </h4>
                        <p>1hr ago. </p>
                    </div>
                    
                </div>
            
            
        </div>
    )
}

export default Widgets