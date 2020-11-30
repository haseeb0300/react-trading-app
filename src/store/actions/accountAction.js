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

export const getAccount = () => dispatch => {
  return axios
      .get('api/account')
      .then((res) => {
          console.log(res)
          return Promise.resolve(res.data)
      }).catch((err) => {
          console.log(err)
          return Promise.reject(err)
      })
}

export const getFilterAccount = (data) => dispatch => {
  return axios
      .get('api/account?queue_id='+data.queue_id+'&current_rank_id='+data.current_rank_id+'&server_id='+data.server_id+'&level_up='+data.level_up+'&min_price='+data.min_price+'&max_price='+data.max_price)
      .then((res) => {
          console.log(res)
          return Promise.resolve(res.data)
      }).catch((err) => {
          console.log(err)
          return Promise.reject(err)
      })
}

export const getLolAccount = () => dispatch => {
  return axios
      .get('api/account/lol')
      .then((res) => {
          console.log(res)
          return Promise.resolve(res.data)
      }).catch((err) => {
          console.log(err)
          return Promise.reject(err)
      })
}

export const getUnrankedAccount = () => dispatch => {
  return axios
      .get('api/account/unranked')
      .then((res) => {
          console.log(res)
          return Promise.resolve(res.data)
      }).catch((err) => {
          console.log(err)
          return Promise.reject(err)
      })
}


export const getCustomizeAccount = () => dispatch => {
  return axios
      .get('api/account/customize')
      .then((res) => {
          console.log(res)
          return Promise.resolve(res.data)
      }).catch((err) => {
          console.log(err)
          return Promise.reject(err)
      })
}

export const postOrder = accountData => dispatch => {
  return axios
    .post('api/order', accountData)
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

export const postRegularSellAccount = accountData => dispatch => {
    return axios
      .post('api/regularSell', accountData)
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

  export const postBulkRegularSellAccount = accountData => dispatch => {
    return axios
      .post('api/regularBulkSell', accountData)
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
  export const postComfortSellAccount = accountData => dispatch => {
    return axios
      .post('api/comfortSell', accountData)
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
  export const postBulkComfortSellAccount = accountData => dispatch => {
    return axios
      .post('api/comfortBulkSell', accountData)
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
 