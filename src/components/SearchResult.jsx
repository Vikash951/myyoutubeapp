// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const SearchResults = () => {
//   const { query } = useParams(); // Get the search query from the URL
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchSearchResults = async () => {
//       const API_KEY = "YOUR_YOUTUBE_API_KEY"; // Replace with your YouTube API Key
//       const YOUTUBE_SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${API_KEY}`;

//       try {
//         const response = await fetch(YOUTUBE_SEARCH_URL);
//         const data = await response.json();
//         setVideos(data.items || []);
//       } catch (error) {
//         console.error("Error fetching YouTube search results:", error);
//       }
//     };

//     fetchSearchResults();
//   }, [query]);

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-semibold mb-4">Search Results for "{query}"</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {videos.map((video) => (
//           <div key={video.id.videoId} className="border p-2 rounded-lg shadow-md">
//             <img
//               className="w-full rounded-md"
//               src={video.snippet.thumbnails.medium.url}
//               alt={video.snippet.title}
//             />
//             <h3 className="text-lg font-semibold mt-2">{video.snippet.title}</h3>
//             <p className="text-gray-600">{video.snippet.channelTitle}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchResults;
