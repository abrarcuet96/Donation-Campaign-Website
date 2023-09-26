import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";

const HomePage = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className=" max-w-[1300px] mx-auto my-20">
                <Categories categories={categories}></Categories>
            </div>
        </div>
    );
};

export default HomePage;