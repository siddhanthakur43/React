import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./context/UserContext";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        //api call for userData
        const data = {
            name: "Siddhant",
        };
        setUserName(data.name);
    }, []);

    return (
        <div className="app">
            <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                {
                    // can provide separate userContext to header as well it is perfectly fine
                }
                {/* <UserContext.Provider value={{loggedInUser: 'Elon Musk'}}> */}
                    <Header />
                {/* </UserContext.Provider> */}
                <Outlet />
                </UserContext.Provider>
                </Provider>
        </div>)
}

//lazy Loading
const Grocerry = lazy(() => import('./components/Grocerry'));

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/grocerry',
                element: <Suspense fallback={<h1>Loading..... </h1>}>
                    <Grocerry />
                </Suspense>
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);