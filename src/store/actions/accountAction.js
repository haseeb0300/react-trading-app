import axios from 'axios';
import { GET_ERRORS } from './type';


export const getQueue = () => dispatch => {
    return axios
        .get('/api/queue')
        .then((res) => {
            console.log(res)

            return Promise.resolve(res.data)
        }).catch((err) => {
            console.log(err)
            return Promise.reject(err)
        })


}
export const getServer = () => dispatch => {
    return axios
        .get('api/server')
        .then((res) => {
            console.log(res)

            return Promise.resolve(res.data)
        }).catch((err) => {
            console.log(err)
            return Promise.reject(err)
        })


}
export const getRank = () => dispatch => {
    return axios
        .get('api/rank')
        .then((res) => {
            console.log(res)
            return Promise.resolve(res.data)
        }).catch((err) => {
            console.log(err)
            return Promise.reject(err)
        })
}


export const postAccount = accountData => dispatch => {
    return axios
      .post('api/account', accountData)
      .then(res => {
        return Promise.resolve(res.data)
      })
      .catch(err => {
  
        if (err.response.data != null && err.response.data.validation) {
          console.log(err.response.data);
          err = err.response.data
        } else {
          err = { "msg": "Something went wrong" }
        }
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
        return Promise.reject(err)
      });
  };

 