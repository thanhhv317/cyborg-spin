const axios = require('axios');

module.exports = class CyborgService {

   async playLuckySpin (name, token) {
    console.log(`Spin on account ${name}`)
    const timestamp = Date.now(); // Generate the current timestamp

    const url = `https://api.cyborg.game/v1/lucky-game/luck-spin/play?t=${timestamp}`;
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url,
      headers: { 
        'Authorization': token,
        'Host': 'api.cyborg.game', 
        'Content-Type': 'application/json',
        'Origin': 'https://tele.cyborg.game', 
        'Referer': 'https://tele.cyborg.game/', 
        'Connection': 'keep-alive', 
        'Sec-Fetch-Dest': 'empty', 
        'Priority': 'u=3, i'
      }
    };

    // sample response
    /**
     * "data": {
      "id": 5,
      "luckyGameId": 1,
      "orderNumber": 5,
      "quantity": 2,
      "type": "TURN"
    } */
  
    try {
      const { data } = await axios.request(config)
      if (!data.data) {
        console.log(`[playLuckySpin] ${name} success`)
        return data?.error
      }
      return data.data
    } catch (error) {
      console.log(`Error on account: ${name}`)
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const { status } = error.response;
        if (status === 401) {
          console.error('Error 401: Unauthorized');
        } else if (status === 400) {
          console.error('Error 400: Bad Request');
        } else {
          console.error(`Error ${status}: ${error.response.statusText}`);
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }
      return error?.response?.data?.error || {}
    }
  }
}