import fetch from 'isomorphic-fetch';

const REFRESH_TODO = 'REFRESH_TODO';
const REQUEST_LIST = 'REQUEST_LIST';

const todoRefresh = (data) => ({ type: REFRESH_TODO, data });
const requestList = () => ({ type: REQUEST_LIST });

const refreshTodo = () => {
  return (
    dispatch => {
      dispatch(requestList());
      return fetch('./getAllItems',{
        "dataType": "json"
      })
      .then(res => res.json())
      .then(data => {
        dispatch(todoRefresh(data));
      })
    }
  )
}

const addTodo = (text) =>
   dispatch =>　{
     return fetch('./addItem', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(text)
     })
     .then(res => res.json())
     .then(data => {
       dispatch(todoRefresh(data));
     })
   }

 const deleteItem = (id) =>
    dispatch =>　{
      return fetch('./deleteItem', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
      })
      .then(res => res.json())
      .then(data => {
        dispatch(todoRefresh(data));
      })
    }

const todoState = (state = [], action) =>　{
  switch (action.type) {
    case REQUEST_LIST:
      console.log('loading');
      return [
        ...state,
      ];
    case REFRESH_TODO:
      return [
        ...action.data
      ]
    default:
      return state;
  }
}

export { todoState, refreshTodo, addTodo, deleteItem };
