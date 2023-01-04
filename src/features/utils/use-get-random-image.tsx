import axios from 'axios';

// Generate "Continuous" UNSPLASH Random Image
export const useGetRandomImage = (
  width: number,
  height: number,
  topic: string | number
) => {
  return {
    src: `https://source.unsplash.com/${width}x${height}/?${topic}`,
    alt: `Image of ${topic}`,
  };
};

// Generate "SINGLE" UNSPLASH Random Image
export const useGetSingleImage = async (
  width: number,
  height: number,
  topic: string | number
) => {
  let res = await axios.get(
    `https://source.unsplash.com/${width}x${height}/?${topic}`
  );

  return {
    src: `${res.request.responseURL}`,
    alt: `Image of ${topic}`,
  };
};
