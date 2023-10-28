An application for a company that provides car rental services in Ukraine.

The application consists of 3 pages:

1. Home page with a general description of the services provided by the company.
2. Page containing a catalog of cars of various configurations, which the user
   can filter by brand, price per hour of car rental and mileage.
3. Page with ads that have been added by the user to favorites.

The application has the following features:

- Saving the user's favorite cars when reloading the page thanks to the use of
  Redax Persist.
- A modal window with detailed information about the car and its rental
  conditions is used. The modal window is closed by clicking on the button in
  the form of a "cross", by clicking on the backdrop or pressing the Esc key.
- If the user entered by a route that does not exist, he is redirected to the
  home page.
- On the Catalog page, filtering of cars by brand, price per rental hour and
  mileage has been added. It's very user-friendly. The React-Select library was
  used.
- Animations have been used to improve the user experience.

To work with the list of announcements, a personal backend was created for
development using the UI service https://mockapi.io/. The Axios library is used
for queries.
