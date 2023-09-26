const Category = ({ category }) => {
    const { id, picture, category_name, category_bg_color, card_bg_color, text_color, button_bg_color, description } = category;
    console.log(category_name);
    return (
        <div className="shadow-xl" style={{backgroundColor: `${card_bg_color}`}}>
            <img src={picture} alt="" />
            <div className="w-fit py-1 px-2 m-3 rounded-sm" style={{backgroundColor: `${category_bg_color}`}}>
                <p className="font-semibold" style={{color: `${text_color}`}}>{category_name}</p>
            </div>
            <h2 className="m-3 font-bold text-lg" style={{color: `${text_color}`}}>{description}</h2>
        </div>
    );
};

export default Category;