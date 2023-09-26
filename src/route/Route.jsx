import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import DonationPage from "../pages/DonationPage/DonationPage";
import StatisticsPage from "../pages/StatisticsPage/StatisticsPage";

const myCreatedRoute= createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
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
            }
        ]
    }
])
export default myCreatedRoute;