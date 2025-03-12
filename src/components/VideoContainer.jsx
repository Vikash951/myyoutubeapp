// import { useState, useEffect } from 'react';
// import { YOUTUBE_VIDEO_API } from '../utils/constant';
// import VideoCard from './VideoCard';
// import { Link } from 'react-router';

// const VideoContainer = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     getVideos();
//   }, []);

//   const getVideos = async () => {
//     const response = await fetch(YOUTUBE_VIDEO_API);
//     const data = await response.json();
//     //console.log(data.items);
//     setVideos(data.items);
//   };

//   return (
//     <div className="grid grid-cols-4 gap-4 p-4">
//       {videos.map((video) => (
//         <Link to={"/watch?v=" + video.id} key={video?.id}>
//           <VideoCard info={video} />
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default VideoContainer;

import { useState, useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getVideos(); 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getVideos = async (pageToken = "") => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await fetch(
        `${YOUTUBE_VIDEO_API}&pageToken=${pageToken}`
      );
      const data = await response.json();

      setVideos((prevVideos) => [...prevVideos, ...data.items]); 
      setNextPageToken(data.nextPageToken || null);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }

    setLoading(false);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 50
    ) {
      if (nextPageToken) {
        getVideos(nextPageToken);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 p-5 mx-auto">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video?.id}>
          <VideoCard info={video} />
        </Link>
      ))}
      {loading && <div className="text-center mt-5">Loading more videos...</div>}
    </div>
  );
};

export default VideoContainer;
