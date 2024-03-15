import React, { useState, useEffect } from 'react'
import './PlayVideo.css'

import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, valueConvertor } from '../../data'
import moment from 'moment'


const PlayVideo = ({ videoId }) => {

    const [apiData, setApiData] = useState(null);

    const fetchVideoData = async () => {
        //Fetching Videos Data
        const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetailsUrl).then(response => response.json()).then(data => setApiData(data.items[0]));
    }

    useEffect(() => {
        fetchVideoData();
        console.log(apiData);
    }, []);

    return (
        <div className='play-video'>
            {/* <video src="" controls autoPlay muted></video> */}
            {<iframe width="880" height="495" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
            <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
            <div className="play-video-info">
                <p> {apiData? valueConvertor(apiData.statistics.viewCount): "Views"} &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow().toUpperCase(): "Uploaded Date"}</p>
                <div>
                    <span><img src={like} alt="" />125</span>
                    <span><img src={dislike} alt="" />2</span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>

            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>Mr. Beast</p>
                    <span>1B subscribers</span>
                </div>

                <button>Subscribe</button>
            </div>

            <div className="vid-description">
                <p>Channel about cars adn fun</p>
                <p>Subscrive the channel please</p>

                <hr />
                <h4>130 Comments</h4>

                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Dorsey <span>0ne day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat vero natus laborum omnis culpa adipisci odit facilis quo at?</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>

                    </div>
                </div>

                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Dorsey <span>One day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat vero natus laborum omnis culpa adipisci odit facilis quo at?</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>

                    </div>
                </div>


                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Dorsey <span>one day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat vero natus laborum omnis culpa adipisci odit facilis quo at?</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default PlayVideo