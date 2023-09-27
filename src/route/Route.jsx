import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import DonationPage from "../pages/DonationPage/DonationPage";
import StatisticsPage from "../pages/StatisticsPage/StatisticsPage";
import CategoryDetails from "../components/CategoryDetails/CategoryDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const myCreatedRoute= createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <HomePage></HomePage>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: '/donation',
                element: <DonationPage></DonationPage>,
            },
            {
                path: '/statistics',
                element: <StatisticsPage></StatisticsPage>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: '/categories/:id',
                element: <CategoryDetails></CategoryDetails>,
                loader: ()=> fetch('/data.json')
            }
        ]
    }
])
export default myCreatedRoute;