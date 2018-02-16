import axios from 'axios';
import { FeedBackUrl, getUser } from '../config'
import { LOAD_FEEDBACK_SUCCESS, LOAD_FEEDBACK_FAIL, LOAD_FEEDBACK_DETAIL_SUCCESS, ACCEPT_SUCCESS, DELETE_SUCCESS, INSERT_SUCCESS } from '../type'

export const fetchFeedback = () => {
    return (dispacth) => {
        axios.get(FeedBackUrl)
        .then(function(response){
            fetchSuccess(dispacth, response.data)
        })
        .catch(function(error){
            return dispacth({
                type: LOAD_FEEDBACK_FAIL
            })
        })        
    }
}

const fetchSuccess = (dispacth, data) => {
    dispacth({
        type: LOAD_FEEDBACK_SUCCESS,
        payload: data
    })
}

export const fetchFeedbackDetail = (id) => {
    return (dispacth) => {
        axios.get(FeedBackUrl + '/' + id)
        .then(function(response){
            dispacth({
                type: LOAD_FEEDBACK_DETAIL_SUCCESS,
                payload: response.data
            })                
        })
        .catch(function(error){
            console.log('error >>>>>>> ', error);
        })
    }
}

export const insertFeedback = (request) => {
    return (dispacth) => {
        axios.post(FeedBackUrl, request)
        .then(function(response){
            dispacth({
                type: INSERT_SUCCESS,
                payload: request
            })
            console.log('response >>>>' , response);
            
        })
        .catch(function(error){
            console.log('error >>>>>>> ',error);
            
        })
    }
}

export const deleteFeedback = (id) => {
    return (dispacth) => {
        axios.delete(FeedBackUrl + '/' + id)
        .then(function(response){
            dispacth({
                type: DELETE_SUCCESS
            })
            console.log('delete response >>>>> ', response);
            
        })
        .catch(function(error){
            console.log('delete Error >>>>> ', error);
            
        })
    }
}

export const handleAcceptFeedback = (data) => {
    let dataa = {...data, status: 1, subject:'asdasd'};
    return (dispacth) => {
        axios.patch(FeedBackUrl + '/' + data.id, {...dataa},{
          headers: {
              'Content-type': 'application/json'
          }  
        })
        .then(function(response){
            dispacth({
                type: ACCEPT_SUCCESS,
            })            
            console.log('response>>',response);
            
        })
        .catch(function(error){
            console.log('error>>>', error)
        })
    }
}

export const loginUser = () => {
    let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer Rjsp2vaOdrUGhuEbtl9W2iBVpFHXpVTNnrBiWAkRCeUs5briKRV2Z8t5hZWYtKY9rVgkm8z15mg4ul2vwUHHzTsfpOG9fPxHeDTV'
    }
    axios.get(getUser, {headers})
    .then(user => console.log(user))
    .catch(err => console.log(err))
}