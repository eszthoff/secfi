# Running the application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run it locally, first install dependencies

`npm install`

Then start local server

`npm start`

# Q/A

## How much time did you end up spending on it?

About 5h.

Mostly worked on the initial design for component logic. Secondly on making it work feature by feature. Lastly added a bit of more styling, but had spent really little on that (that part is one needs most attention still).

I also run out of time and missed the following important UX features:

-   handle loading state
-   handle clearing input fields (should reset data in stores)

## What are some of the design decisions you made?

You can look at the first commit in the project. It is a sort of technical design that includes 3rd party library selection, folder structure, component structure, type definitions, store structure etc.

I decided to use a state management library (`MobX`) even though it is a bit of an overkill for such a small project. I thought it will help if the project would need to be scaled up and more pages, features added.

For UI components I choose `MaterialUI`, even though I'm not really familiar with.

For charting I used `Recharts` as it is simple and easy. It is possible that `GoogleCharts` would fit better with `MaterialUI`.

You asked to pay attention to minimal number of API calls. I didn't find a way to reduce it from the 2 calls you mention in the assignment. There is a lot that can be done in terms of debouncing calls, handling race conditions, retrying failing calls and so on. However I had no time to work on these. I would normally create a wrapper around `fetch` that handles these and use it for each call in tha application.

In addition, data caching could be implemented, depending on business requirements. A few simple things that could be added:

-   cache trends for as long as session lasts. Only refetch them the next day
-   similar caching could be implemented for exchange rate, with a lot smaller refresh interval.

## What do you like about your implementation?

-   It works after a few hours of work already :-)
-   I think the code is easy to read and the project is scalable.

## What would you improve next time?

-   ADD TESTS!!!
-   more work on UI design! Including responsive layout
-   more error handling and input clearing before processing user input (now calls are attempted also with missing data; some combination of currencies give error from the API;)
-   a better store setup where data is automatically loaded whenever the UI changes. I would link the `UIStore` to the data stores and use `reaction` from MobX to trigger data loading whenever the UI changes.

Possible UX features I would like to add if time allowed:

-   add default values when page is first loaded. Note this can be controversial. This would mean we also need to fetch data at the start that the user doesn't need. If the API calls cost money for example, this can be problematic
-   button to switch conversion direction (`(from, to) => {setFrom(to); setTo(From)}`)
-   add toggle to trend chart so that the user can choose to show base exchange rate (as now) or based on input amount (`current * amount`)
-   add toggle/checkbox to what data trend to show (`'open' | 'close' | 'high' | 'low'`)
