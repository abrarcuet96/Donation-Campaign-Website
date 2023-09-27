import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationAdded = ({ category }) => {
    const { id, picture, category_name, category_bg_color, card_bg_color, text_color, button_bg_color, title, price } = category;
    return (
        <div className="flex flex-col md:flex-row shadow-xl gap-5" style={{ backgroundColor: `${card_bg_color}` }}>
            <div><img className='w-full' src={picture} alt="" /></div>
            <div className='flex items-center'>
                <div>
                    <div className="w-fit rounded-sm py-1 px-2" style={{ backgroundColor: `${category_bg_color}` }}>
                        <p className="font-semibold" style={{ color: `${text_color}` }}>{category_name}</p>
                    </div>
                    <h2 className="font-bold text-lg" style={{ color: `${text_color}` }}>{title}</h2>
                    <p style={{ color: `${text_color}` }} >${price}</p>
                    <Link to={`/categories/${id}`} state={id}>
                        <button style={{ backgroundColor: `${button_bg_color}` }} className="p-2 bg-[#FF444A] text-white rounded-sm text-sm">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
DonationAdded.propTypes={
    category: PropTypes.object
}
export default DonationAdded;