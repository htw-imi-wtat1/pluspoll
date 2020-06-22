
# Testing the React App

Documentation:

* [Testing React with Jest](https://jestjs.io/docs/en/tutorial-react)
* to understand how to test you need to get an idea of the [Testing Library](https://testing-library.com/), more specifically
  its [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

Tests need to be started with 

    yarn test
    
(calling jest directly does not work, as the JSX is not compiled)


Followed the tutorial in [https://jestjs.io/docs/en/tutorial-react](https://jestjs.io/docs/en/tutorial-react)

## Snapshots
The first examples uses a snapshot renderer which needs to be installed:
 
    yarn add --dev react-test-renderer

A simple, straightforward Snapshot test can be found in 
[PollCreator.test.js](../src/test/PollCreator.test.js)

## Interacting with and Querying the HTMLElements 
The second example uses the "[Testing Library](https://testing-library.com/docs/dom-testing-library/intro)" 
which is already included in create-react-app.

It takes a bit time  to get the queries, but there is a debug
function that outputs the generated HTML:

    const { debug, queryByText  } = render(<PollCreator poll =  {poll} />);
    debug()

Together with the [Queries API](https://testing-library.com/docs/dom-testing-library/api-queries)
it's quite powerful as it's possible to manually send events to the components/elements.
I've created some examples in [Question.test.js](../src/test/Question.test.js) and 
[PollCreator.test.js](../src/test/PollCreator.test.js)




