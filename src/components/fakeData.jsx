import axios from 'axios';

const RandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
};

const fetchRandomUsers = async () => {
  try {
    const RandomUser = await axios.get(
      `https://randomuser.me/api/?results=${RandomNumber()}`
    );
    return RandomUser.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchRandomUsers;
