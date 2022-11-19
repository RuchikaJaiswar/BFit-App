export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '43a2ca8dc5mshe57f6b0f3ecbeacp12ce24jsn589891e9c479',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
  };

 export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '43a2ca8dc5mshe57f6b0f3ecbeacp12ce24jsn589891e9c479',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
}
  
  