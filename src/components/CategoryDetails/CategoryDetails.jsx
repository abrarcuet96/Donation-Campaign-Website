import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryDetailsPage from "../CategoryDetailsPage/CategoryDetailsPage";

const CategoryDetails = () => {
    const [category, setCategory] = useState({});

    const { id } = useParams();
    const categories = useLoaderData();
    useEffect(() => {
        const findCategory = categories?.find((category) => category.id == id);
        setCategory(findCategory);
    }, [id, categories]);
    return (
        <div>
            <CategoryDetailsPage category={category}></CategoryDetailsPage>
        </div>
    );
};

export default CategoryDetails;