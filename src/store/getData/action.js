import axios from "axios";
import { GET_DATA_ELECTRONICS_LOADING,GET_DATA_ELECTRONICS_SUCCESS,GET_DATA_ELECTRONICS_ERROR,GET_DATA_WATCH_LOADING,GET_DATA_WATCH_SUCCESS,GET_DATA_WATCH_ERROR, GET_DATA_MOBILE_LOADING, GET_DATA_MOBILE_SUCCESS, GET_DATA_MOBILE_ERROR, GET_DATA_TOY_LOADING, GET_DATA_TOY_SUCCESS, GET_DATA_TOY_ERROR, GET_DATA_BOTTLES_LOADING, GET_DATA_BOTTLES_SUCCESS, GET_DATA_BOTTLES_ERROR, GET_DATA_SPEAKERS_LOADING, GET_DATA_SPEAKERS_SUCCESS, GET_DATA_SPEAKERS_ERROR, GET_DATA_CHARGERS_LOADING, GET_DATA_CHARGERS_SUCCESS, GET_DATA_CHARGERS_ERROR, GET_DATA_NEWARRIVALS_LOADING, GET_DATA_NEWARRIVALS_SUCCESS, GET_DATA_NEWARRIVALS_ERROR, GET_DATA_WATCHES_FILTER_AND_SORT } from "./action.types";

export const getDataWatches=(value)=>(dispatch)=>{
dispatch({type:GET_DATA_WATCH_LOADING});
axios.get(`https://meanbuybackend.herokuapp.com/${value}`).then((r)=>{
    dispatch({type:GET_DATA_WATCH_SUCCESS,payload:r.data})
}).catch(()=>{
    dispatch({type:GET_DATA_WATCH_ERROR})
})
}

export const getDataElectronics=(value)=>(dispatch)=>{
    dispatch({type:GET_DATA_ELECTRONICS_LOADING});
    axios.get(`https://meanbuybackend.herokuapp.com/${value}`).then((r)=>{
        dispatch({type:GET_DATA_ELECTRONICS_SUCCESS,payload:r.data})
    }).catch(()=>{
        dispatch({type:GET_DATA_ELECTRONICS_ERROR})
    })
    }

    export const getDataMobile=(value)=>(dispatch)=>{
        dispatch({type:GET_DATA_MOBILE_LOADING});
        axios.get(`https://meanbuybackend.herokuapp.com/${value}`).then((r)=>{
            dispatch({type:GET_DATA_MOBILE_SUCCESS,payload:r.data})
        }).catch(()=>{
            dispatch({type:GET_DATA_MOBILE_ERROR})
        })
        }

        export const getDataToy=(value)=>(dispatch)=>{
            dispatch({type:GET_DATA_TOY_LOADING});
            axios.get(`https://meanbuybackend.herokuapp.com/${value}`).then((r)=>{
                dispatch({type:GET_DATA_TOY_SUCCESS,payload:r.data})
            }).catch(()=>{
                dispatch({type:GET_DATA_TOY_ERROR})
            })
            }

            export const getDataBottles=(value)=>(dispatch)=>{
                dispatch({type:GET_DATA_BOTTLES_LOADING});
                axios.get(`https://meanbuybackend.herokuapp.com/${value}`).then((r)=>{
                    dispatch({type:GET_DATA_BOTTLES_SUCCESS,payload:r.data})
                }).catch(()=>{
                    dispatch({type:GET_DATA_BOTTLES_ERROR})
                })
                }

                export const getDataSpeakers=(value)=>(dispatch)=>{
                    dispatch({type:GET_DATA_SPEAKERS_LOADING});
                    axios.get(`https://meanbuybackend.herokuapp.com/${value}`).then((r)=>{
                        dispatch({type:GET_DATA_SPEAKERS_SUCCESS,payload:r.data})
                    }).catch(()=>{
                        dispatch({type:GET_DATA_SPEAKERS_ERROR})
                    })
                    }

                    export const getDataChargers=(value)=>(dispatch)=>{
                        dispatch({type:GET_DATA_CHARGERS_LOADING});
                        axios.get(`https://meanbuybackend.herokuapp.com/${value}`).then((r)=>{
                            dispatch({type:GET_DATA_CHARGERS_SUCCESS,payload:r.data})
                        }).catch(()=>{
                            dispatch({type:GET_DATA_CHARGERS_ERROR})
                        })
                        }

                        export const getDataNewarrivals=(value)=>(dispatch)=>{
                            dispatch({type:GET_DATA_NEWARRIVALS_LOADING});
                            axios.get(`https://meanbuybackend.herokuapp.com/${value}`).then((r)=>{
                                dispatch({type:GET_DATA_NEWARRIVALS_SUCCESS,payload:r.data})
                            }).catch(()=>{
                                dispatch({type:GET_DATA_NEWARRIVALS_ERROR})
                            })
                            }

                            export const getDataWatchFilterandSort=(value,brand,sorted,orders)=>(dispatch)=>{
                                if(value!="" && brand!="" && sorted!="" && orders!=""){
                                    axios.get(`https://meanbuybackend.herokuapp.com/${value}?brand=${brand}&_sort=${sorted}&_order=${orders}`).then((r)=>{
                                        dispatch({type:GET_DATA_WATCHES_FILTER_AND_SORT,payload:r.data})
                                    })
                                    
                                }

                                if(value!="" && brand!="" && sorted=="" && orders==""){
                                    axios.get(`https://meanbuybackend.herokuapp.com/${value}?brand=${brand}`).then((r)=>{
                                        dispatch({type:GET_DATA_WATCHES_FILTER_AND_SORT,payload:r.data})
                                    })
                                }
                                if(value!="" && brand==""  && sorted!="" && orders!=""){
                                    axios.get(`https://meanbuybackend.herokuapp.com/${value}?_sort=${sorted}&_order=${orders}`).then((r)=>{
                                        dispatch({type:GET_DATA_WATCHES_FILTER_AND_SORT,payload:r.data})
                                    })
                                }

                                if(value!="" && brand==""  && sorted=="" && orders==""){
                                    axios.get(`https://meanbuybackend.herokuapp.com/${value}`).then((r)=>{
                                        dispatch({type:GET_DATA_WATCHES_FILTER_AND_SORT,payload:r.data})
                                    })
                                }
                               
                                }