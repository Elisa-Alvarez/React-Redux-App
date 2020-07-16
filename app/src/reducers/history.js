import { 
    UPDATE_HISTORY_START,
    UPDATE_HISTORY_SUCCESS,
    UPDATE_HISTORY_FAIL
} from '../actions/fetchApi';

export const initalState = {
   
    date:'',
    event:[
        {year:'', text: '', html:''}
    ],
    today:true,
          
  }


  export const history = (state = initalState, action) => {
    switch(action.type){
        
          case UPDATE_HISTORY_START:
                        return {
              ...state,
              today:true,
            };  case UPDATE_HISTORY_SUCCESS:
            return {
                ...state,
                stories: [
                    ...state.journal,
                    action.payload
                ],
                
                error: '',
                success_message: 'New Entry added! You can add another Journal entry now, or click the close button'
            };
        case UPDATE_HISTORY_FAIL:
            return {
                ...state,
                error: action.payload
            };
          default:
            return state;
     }


    }