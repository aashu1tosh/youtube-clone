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
import { useParams } from 'react-router-dom'


const PlayVideo = () => {

    const {videoId} = useParams();

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
        //Fetching Videos Data
        const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetailsUrl).then(response => response.json()).then(data => setApiData(data.items[0]));

    }

    const fetchOtherData = async () => {
        //Fetching Channel Data
        const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelID}&key=${API_KEY}`
        await fetch(channelDataUrl).then(response => response.json()).then(data => setChannelData(data.items));

        //Fetching Comment Data
        const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
        await fetch(commentUrl).then(res => res.json()).then(data => setCommentData(data.items))
    }

    useEffect(() => {
        fetchVideoData();
    }, [videoId]);
    
    useEffect(() => {
        fetchOtherData();
        console.log(channelData);
    }, [apiData])

    return (
        <div className='play-video'>
            {/* <video src="" controls autoPlay muted></video> */}
            {<iframe width="880" height="495" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
            <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
            <div className="play-video-info">
                <p> {apiData ? valueConvertor(apiData.statistics.viewCount) : "Views"} &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow().toUpperCase() : "Uploaded Date"}</p>
                <div>
                    <span><img src={like} alt="" />{apiData ? valueConvertor(apiData.statistics.likeCount) : "like"}</span>
                    <span><img src={dislike} alt="" /></span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>

            <hr />
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : user_profile}</p>
                    <span>{channelData ? valueConvertor(channelData.statistics.subscriberCount) : "Hehe"}</span>
                </div>

                <button>Subscribe</button>
            </div>

            <div className="vid-description">
                <p>{apiData ? apiData.snippet.description.slice(0, 250) : "Description Unavailable"}</p>


                <hr />
                <h4>{apiData ? valueConvertor(apiData.statistics.commentCount) : "Unavilable"} Comments</h4>

                {commentData.map((item, index) => {
                    return (
                        <div key={index} className="comment">
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>one day ago</span></h3>
                                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                <div className="comment-action">
                                    <img src={like} alt="" />
                                    <span>{ valueConvertor(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                    <img src={dislike} alt="" />
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PlayVideo