import axios from 'axios';

const params = {
    headers:{
        Authorization : "bearer " + process.env.REACT_APP_STRAPI_KEY,
    },
};


export const fetchData = async (url) => {
    try {
        console.log(process.env.REACT_APP_URL + url )
        const { data } = await axios.get(process.env.REACT_APP_URL + url , params);
        return data;
        
    } catch (error) {
        console.log(error)  
        return error;
    }
}