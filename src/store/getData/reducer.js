import { GET_DATA_BOTTLES_ERROR, GET_DATA_BOTTLES_LOADING, GET_DATA_BOTTLES_SUCCESS, GET_DATA_CHARGERS_ERROR, GET_DATA_CHARGERS_LOADING, GET_DATA_CHARGERS_SUCCESS, GET_DATA_ELECTRONICS_ERROR, GET_DATA_ELECTRONICS_LOADING, GET_DATA_ELECTRONICS_SUCCESS, GET_DATA_MOBILE_LOADING, GET_DATA_MOBILE_SUCCESS, GET_DATA_NEWARRIVALS_ERROR, GET_DATA_NEWARRIVALS_LOADING, GET_DATA_NEWARRIVALS_SUCCESS, GET_DATA_SPEAKERS_ERROR, GET_DATA_SPEAKERS_LOADING, GET_DATA_SPEAKERS_SUCCESS, GET_DATA_TOY_ERROR, GET_DATA_TOY_LOADING, GET_DATA_TOY_SUCCESS, GET_DATA_WATCHES_FILTER_AND_SORT, GET_DATA_WATCH_ERROR, GET_DATA_WATCH_LOADING, GET_DATA_WATCH_SUCCESS, GET_DATA_WIRELESSSPEAKERS_FILTER_AND_SORT } from "./action.types"


const initialState={
    getDataWatches:{
        watchloading:false,
        watcherror:false,
        watchdata:[]
    },
    getDataElectronics:{
        electronicsloading:false,
        electronicserror:false,
        electronicsdata:[]
    },
    getDataMobile:{
        mobileloading:false,
        mobileerror:false,
       mobiledata:[]
    },
    getDataToy:{
        toyloading:false,
        toyerror:false,
       toydata:[]
    },
    getDataBottles:{
        bottlesloading:false,
        bottleserror:false,
        bottlesdata:[]
    },
    getDataSpeakers:{
        speakersloading:false,
        speakerserror:false,
        speakersdata:[]
    },
    getDataChargers:{
        chargersloading:false,
        chargerserror:false,
        chargersdata:[]
    },
    getDataNewarrivals:{
        newarrivalsloading:false,
        newarrivalsserror:false,
        newarrivalsdata:[]
    },

    getDataWatchesFilterandSort:{
        data:[]
    },
    getDataWirelessSpeakersFilterandSort:{
        data:[]
    }
}

export const getDataWatchReducer=(state=initialState,{type,payload})=>{
 switch (type){
    case GET_DATA_WATCH_LOADING:{
        return {
            ...state,
            getDataWatches:{
                watchloading:true,
                watcherror:false,
                watchdata:[] 
            },
           
        }
    }

    case GET_DATA_WATCH_SUCCESS:{
        return {
            ...state,
            getDataWatches:{
                watchloading:false,
                watcherror:false,
                watchdata:payload
            },
          
        }
    }
    case GET_DATA_WATCH_ERROR:{
        return {
            ...state,
            getDataWatches:{
                watchloading:false,
                watcherror:true,
                watchdata:[] 
            },
           
        }
    }

    default: return {...state}
 }
}

export const getDataElectronicsReducer=(state=initialState,{type,payload})=>{
switch(type){
    case GET_DATA_ELECTRONICS_LOADING:{
        return {
            ...state,
            getDataElectronics:{
                electronicsloading:true,
                electronicserror:false,
                electronicsdata:[] 
            },
           
        }
    }

    case GET_DATA_ELECTRONICS_SUCCESS:{
        return {
            ...state,
            getDataElectronics:{
                electronicsloading:false,
                electronicserror:false,
                electronicsdata:payload
            },
          
        }
    }
    case GET_DATA_ELECTRONICS_ERROR:{
        return {
            ...state,
            getDataElectronics:{
                electronicsloading:false,
                electronicserror:true,
                electronicsdata:[] 
            },
           
        }
    }

    default: return {...state}
}
}

export const getDataMobileReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_DATA_MOBILE_LOADING:{
            return {
                ...state,
                getDataMobile:{
                    mobileloading:true,
                    mobileerror:false,
                    mobiledata:[] 
                },
               
            }
        }
    
        case GET_DATA_MOBILE_SUCCESS:{
            return {
                ...state,
                getDataMobile:{
                    mobileloading:false,
                    mobileerror:false,
                    mobiledata:payload
                },
              
            }
        }
        case GET_DATA_ELECTRONICS_ERROR:{
            return {
                ...state,
                getDataMobile:{
                    mobileloading:false,
                    mobileerror:true,
                    mobiledata:[] 
                },
               
            }
        }
    
        default: return {...state}
    }
    }

    export const getDataToyReducer=(state=initialState,{type,payload})=>{
        switch(type){
            case GET_DATA_TOY_LOADING:{
                return {
                    ...state,
                    getDataToy:{
                        toyloading:true,
                        toyerror:false,
                        toydata:[] 
                    },
                   
                }
            }
        
            case GET_DATA_TOY_SUCCESS:{
                return {
                    ...state,
                    getDataToy:{
                        toyloading:false,
                        toyerror:false,
                        toydata:payload
                    },
                  
                }
            }
            case GET_DATA_TOY_ERROR:{
                return {
                    ...state,
                    getDataToy:{
                        toyloading:false,
                        toyerror:true,
                        toydata:[] 
                    },
                   
                }
            }
        
            default: return {...state}
        }
        }

        export const getDataBottlesReducer=(state=initialState,{type,payload})=>{
            switch(type){
                case GET_DATA_BOTTLES_LOADING:{
                    return {
                        ...state,
                        getDataBottles:{
                            bottlesloading:true,
                            bottleserror:false,
                            bottlesdata:[] 
                        },
                       
                    }
                }
            
                case GET_DATA_BOTTLES_SUCCESS:{
                    return {
                        ...state,
                        getDataBottles:{
                            bottlesloading:false,
                            bottleserror:false,
                            bottlesdata:payload
                        },
                      
                    }
                }
                case GET_DATA_BOTTLES_ERROR:{
                    return {
                        ...state,
                        getDataBottles:{
                            bottlesloading:false,
                            bottleserror:true,
                            bottlesdata:[] 
                        },
                       
                    }
                }
            
                default: return {...state}
            }
            }

            export const getDataSpeakersReducer=(state=initialState,{type,payload})=>{
                switch(type){
                    case GET_DATA_SPEAKERS_LOADING:{
                        return {
                            ...state,
                            getDataSpeakers:{
                                speakersloading:true,
                                speakerserror:false,
                                speakersdata:[] 
                            },
                           
                        }
                    }
                
                    case GET_DATA_SPEAKERS_SUCCESS:{
                        return {
                            ...state,
                            getDataSpeakers:{
                                speakersloading:false,
                                speakerserror:false,
                                speakersdata:payload
                            },
                          
                        }
                    }
                    case GET_DATA_SPEAKERS_ERROR:{
                        return {
                            ...state,
                            getDataSpeakers:{
                                speakersloading:false,
                                speakerserror:true,
                                speakersdata:[] 
                            },
                           
                        }
                    }
                
                    default: return {...state}
                }
                }
                export const getDataChargersReducer=(state=initialState,{type,payload})=>{
                    switch(type){
                        case GET_DATA_CHARGERS_LOADING:{
                            return {
                                ...state,
                                getDataChargers:{
                                    chargersloading:true,
                                    chargerserror:false,
                                    chargersdata:[] 
                                },
                               
                            }
                        }
                    
                        case GET_DATA_CHARGERS_SUCCESS:{
                            return {
                                ...state,
                                getDataChargers:{
                                    chargersloading:false,
                                    chargerserror:false,
                                    chargersdata:payload
                                },
                              
                            }
                        }
                        case GET_DATA_CHARGERS_ERROR:{
                            return {
                                ...state,
                                getDataChargers:{
                                    chargersloading:false,
                                    chargerserror:true,
                                    chargersdata:[] 
                                },
                               
                            }
                        }
                    
                        default: return {...state}
                    }
                    }

                    export const getDataNewarrivalsReducer=(state=initialState,{type,payload})=>{
                        switch(type){
                            case GET_DATA_NEWARRIVALS_LOADING:{
                                return {
                                    ...state,
                                    getDataNewarrivals:{
                                        newarrivalsloading:true,
                                        newarrivalserror:false,
                                        newarrivalsdata:[] 
                                    },
                                   
                                }
                            }
                        
                            case GET_DATA_NEWARRIVALS_SUCCESS:{
                                return {
                                    ...state,
                                    getDataNewarrivals:{
                                        newarrivalsloading:false,
                                        newarrivalserror:false,
                                        newarrivalsdata:payload
                                    },
                                  
                                }
                            }
                            case GET_DATA_NEWARRIVALS_ERROR:{
                                return {
                                    ...state,
                                    getDataNewarrivals:{
                                        newarrivalsloading:false,
                                        chargerserror:true,
                                        newarrivalsdata:[] 
                                    },
                                   
                                }
                            }
                        
                            default: return {...state}
                        }
                        }

                        export const getDataWatchesFilterandSortReducer=(state=initialState,{type,payload})=>{
                            console.log(payload,"paycheck")
                            switch(type){
                                
                                
                            
                         case GET_DATA_WATCHES_FILTER_AND_SORT:{
                                    return {
                                        ...state,
                                        getDataWatchesFilterandSort:{
                                            data:payload
                                        }
                                      
                                    }
                                }
                              
                            
                                default: return {...state}
                            }
                            }

                           