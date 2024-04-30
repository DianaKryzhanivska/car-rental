# <p align="center">CarRental</p>

![image](https://github.com/DianaKryzhanivska/car-rental/blob/main/assets/home.png)

![image](https://github.com/DianaKryzhanivska/car-rental/blob/main/assets/catalog.png)

![image](https://github.com/DianaKryzhanivska/car-rental/blob/main/assets/modal.png)

An application for a company that provides car rental services in Ukraine. The
website is designed with a desktop-first approach. Adaptive design with
breakpoints 320px, 375px, 768px, 1440px. Modal windows.

The application consists of 3 pages:

1. Home page - / | Page with a general description of the services provided by
   the company.
2. Catalog page - /catalog | Page containing a catalog of cars of various
   configurations, which the user can filter by brand, price per hour of car
   rental and mileage.
3. Favorites page - /favorites | Page with ads that have been added by the user
   to favorites.

## The application has the following features:

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

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [styled-components](https://styled-components.com)

Additionally libraries used: axios, react-toastify, react-responsive,
react-select.
