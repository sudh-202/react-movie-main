const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "4127dd0475fc9c0d4e0c78c79377d2b7",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;