import axios from 'axios'
export const UPDATE_HISTORY_START = 'UPDATE_HISTORY_START'
export const UPDATE_HISTORY_SUCCESS='UPDATE_HISTORY_SUCCESS'
export const UPDATE_HISTORY_FAIL = 'UPDATE_HISTORY_FAIL'

let d = new Date()
let month= d.getMonth()
let day = d.getDay()

export const fetchApi= (state) => dispatch => {
    dispatch({ type: UPDATE_HISTORY_START, payload: state})
    axios.get(`http://history.muffinlabs.com/date/${month}/${day}`)
    .then(res => {
        console.log(res.data)
        dispatch({type: UPDATE_HISTORY_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: UPDATE_HISTORY_FAIL, payload: err})
    })
    
}