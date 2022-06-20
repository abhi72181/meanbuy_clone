import {legacy_createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"


// import { getDataReducer } from "./getData/reducer"
import { getDataBottlesReducer, getDataChargersReducer, getDataNewarrivalsReducer, getDataSpeakersReducer, getDataWatchesFilterandSortReducer, getDataWatchReducer, getDataWirelessSpeakersFilterandSortReducer } from "./getData/reducer"
import { getDataElectronicsReducer } from "./getData/reducer"
import { getDataMobileReducer } from "./getData/reducer"
import { getDataToyReducer } from "./getData/reducer"
import { authReducer } from "./auth/auth.reducer"
import {  addCartReducer, deleteCartReducer, getCartReducer } from "./cart/Cart.reducer"



const rootReducer=combineReducers({
    getDataWatch:getDataWatchReducer,
    getDataElectronics:getDataElectronicsReducer,
    getDataMobile:getDataMobileReducer,
    getDataToy:getDataToyReducer,
    getDataBottles:getDataBottlesReducer,
    getDataSpeakers:getDataSpeakersReducer,
    getDataChargers:getDataChargersReducer,
    getDataNewarrivals:getDataNewarrivalsReducer,
    auth:authReducer,
    getDataWatchesFilterandSort:getDataWatchesFilterandSortReducer,
   
    getCartData:getCartReducer,
    addCartData:addCartReducer,
    deleteCartData:deleteCartReducer

})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))