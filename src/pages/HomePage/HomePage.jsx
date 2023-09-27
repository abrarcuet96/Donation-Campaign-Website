import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import { useState } from "react";

const HomePage = () => {
    const [inputText, setInputText] = useState("");

    const handleChange = (e) => {
        setInputText(e.target.value);
    };
    const categories = useLoaderData();
    const [isInput, setIsInput] = useState('');
    const [newCategory, setNewCategory] = useState([]);
    const handleSearch = () => {
        if (inputText) {
            const isInput = inputText.toLowerCase();
            setIsInput(isInput);
            const newCat = categories.filter(category => category.category_name.toLowerCase() == isInput);
            console.log(newCat);
            setNewCategory(newCat);
        }
    };
    console.log(newCategory);

    return (
        <div>
            <Banner handleSearch={handleSearch} handleChange={handleChange} inputText={inputText}></Banner>
            <div className=" max-w-[1300px] mx-auto my-20">
                { isInput?
                    <Categories inputText={inputText} categories={newCategory}></Categories>:<Categories categories={categories}></Categories>}
            </div>
        </div>
    );
};

export default HomePage;