
# Testing the React App

Tests need to be started with 

    yarn test
    
(calling jest directly does not work, as the JSX is not compiled)


Followed the tutorial in [https://jestjs.io/docs/en/tutorial-react](https://jestjs.io/docs/en/tutorial-react)

The first examples uses a snapshot renderer which needs to be installed:

   yarn add --dev react-test-renderer

A simple, straightforward Snapshot test can be found in 
[](../src/test/PollCreator.test.js)

The second example uses the "[Testing Library](https://testing-library.com/docs/dom-testing-library/intro)" 
which is already included in create-react-app.

It takes a bit to get the queries, but there is a debug
function that outputs the generated HTML:

    const { debug, queryByText  } = render(<PollCreator poll =  {poll} />);
    debug()

Together with the [Queries API](https://testing-library.com/docs/dom-testing-library/api-queries)
it's quite powerful.




