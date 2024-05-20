import './Recommended.css'
import { API_KEY } from '../../data'
import { valueConvertor } from '../../data'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Recommended = ({ categoryId }) => {

    const [apiRecommendedData, setApiRecommendedData] = useState([]);

    const fetchData = async () => {
        const relatedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(relatedVideoUrl).then(res => res.json()).then(data => setApiRecommendedData(data.items));
        console.log(apiRecommendedData)
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='recommended'>
            {
                apiRecommendedData.map((item, index) => {
                    return(
                    <Link Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <div className="vid-info">
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{valueConvertor(item.statistics.viewCount)}</p>
                    </div>
                </Link>)
                })
            }
        </div>
    )
}

export default Recommended