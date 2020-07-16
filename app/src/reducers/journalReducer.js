import { 
    ADD_JOURNAL_START,
    ADD_JOURNAL_SUCCESS,
    ADD_JOURNAL_FAIL
} from '../actions/addJournal';

const initalState = {
    journal: [],
    error: '',
    
    success_message: ''
};
export const journalReducer = (state = initalState, action) => {
    switch(action.type){
        case ADD_JOURNAL_START:
            return {
                ...state,
                 error: ''
            };
        case ADD_JOURNAL_SUCCESS:
            return {
                ...state,
                journal: [
                    ...state.journal,
                    action.payload
                ],
                
                error: '',
                success_message: 'New Entry added! You can add another Journal entry now, or click the close button'
            };
        case ADD_JOURNAL_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }
}