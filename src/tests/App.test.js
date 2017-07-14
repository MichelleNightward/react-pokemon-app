import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App';

describe("App component -> ", () => {

    // const mockResponse = (status, statusText, response) => {
    //     return new window.Response(response, {
    //         status: status,
    //         statusText: statusText,
    //         headers: {
    //             'Content-type': 'application/json'
    //         }
    //     });
    // };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });


  // it('calls request and success actions if the fetch response was successful', () => {
  //   window.fetch = jest.fn().mockImplementation(() =>
  //       Promise.resolve(mockResponse(200, null, '{"ids":{"provider":' + id + '}}')));
  //
  //   return store.dispatch(fetchData(id))
  //       .then(() => {
  //         const expectedActions = store.getActions();
  //         expect(expectedActions.length).toBe(2);
  //         expect(expectedActions).toContainEqual({type: types.FETCH_DATA_REQUEST});
  //         expect(expectedActions).toContainEqual({type: types.FETCH_DATA_SUCCESS, data });
  //       })
  // });
  //
  // it('calls request and failure actions if the fetch response was not successful', () => {
  //
  //   window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponse(400, 'Test' +
  //       ' Error', '{"status":400, "statusText": Test Error!}')));
  //
  //   return store.dispatch(fetchData(id))
  //       .then(() => {
  //         const expectedActions = store.getActions();
  //         expect(expectedActions.length).toBe(2);
  //         expect(expectedActions).toContainEqual({"type": types.FETCH_DATA_REQUEST});
  //         expect(expectedActions).toContainEqual({type: types.FETCH_DATA_FAILURE,
  //           error: {status: 400, statusText: 'Test Error'}});
  //       })
  // });
});