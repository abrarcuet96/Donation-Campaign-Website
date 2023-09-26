import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import DonationPage from "../pages/DonationPage/DonationPage";
import StatisticsPage from "../pages/StatisticsPage/StatisticsPage";
import CategoryDetails from "../components/CategoryDetails/CategoryDetails";

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