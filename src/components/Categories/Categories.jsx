import Category from "../Category/Category";

const Categories = ({categories}) => {
    return (
        <div className="grid grid-cols-4 gap-5 rounded-xl">
            {
                categories.map(category=> <Category key={category.id} category={category}></Category>)
            }
        </div>
    );
};

export default Categories;