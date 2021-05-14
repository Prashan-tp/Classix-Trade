import {combineReducers} from 'redux' ;
import Buyer_Reducer from './buyer_reducer';
import Seller_Reducer from './seller_reducer' ;
import CC_Reducer from './cc_reducer';
const rootReducer = combineReducers({
    buyer:Buyer_Reducer,
    seller:Seller_Reducer ,
    cc: CC_Reducer 
}) ;
export default rootReducer ;