const updateReducer = (state = [], action) => {
    switch (action.type) {
      case 'SELECTED_TEXTS':
        return {
          ...state,
          filteredArray: action.payload ,
        };
        default:
          return state
    }
  };
    
    export default updateReducer