import { Link } from "react-router-dom";

const Category = ({ category }) => {
    const { id, picture, category_name, category_bg_color, card_bg_color, text_color, button_bg_color, title } = category;
    return (
        <Link to={`/categories/${id}`} state={id}>
        <div className="shadow-xl" style={{backgroundColor: `${card_bg_color}`}}>
            <img className="w-full" src={picture} alt="" />
            <div className="w-fit py-1 px-2 m-3 rounded-sm" style={{backgroundColor: `${category_bg_color}`}}>
                <p className="font-semibold" style={{color: `${text_color}`}}>{category_name}</p>
            </div>
            <h2 className="m-3 px-1 py-2 font-bold text-lg" style={{color: `${text_color}`}}>{title}</h2>
        </div>
        </Link>
    );
};

export default Category;