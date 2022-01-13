import axios from 'axios';

const fetchRandomUsers = async () => {
  try {
    const RandomUser = await axios.get('https://randomuser.me/api/?results=10');
    return RandomUser.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchRandomUsers;
