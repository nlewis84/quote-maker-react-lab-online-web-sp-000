export default (state = [], action) => {
  let newState;
  // console.log(action)
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);
    case "UPVOTE_QUOTE":
      newState = state.map(quote => {
        if (quote.id === action.quoteId) {
          return { ...quote, votes: quote.votes + 1 };
        } else {
          return quote;
        }
      })
      return newState;
    case "DOWNVOTE_QUOTE":
      newState = state.map(quote => {
        if (quote.id === action.quoteId) {
          if (quote.votes === 0) {
            return { ...quote, votes: quote.votes };
          }
          return { ...quote, votes: quote.votes - 1 };
        } else {
          return quote;
        }
      })
      return newState;
    default:
      return state;
  }
}
