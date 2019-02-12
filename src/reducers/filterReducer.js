const filterReducer = (state = [], action) => {
  switch (action.type) {
    case 'FILTER_COLOR':
      return {
        ...state,
        filteredArray: action.payload.value.filter(item => item.color === action.payload.color) ,
      };
      default:
        return state
  }
};
  
  export default filterReducer