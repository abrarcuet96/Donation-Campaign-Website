import { useState } from "react";
import Category from "../Category/Category";

const Categories = ({categories}) => {
    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 m-2 gap-5 rounded-xl">
            {
                categories.map(category=> <Category key={category.id} category={category}></Category>)
            }
        </div>
    );
};

export default Categories;