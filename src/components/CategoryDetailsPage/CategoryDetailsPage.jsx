
import { ToastContainer, toast } from 'react-toastify';
import swal from 'sweetalert';
const CategoryDetailsPage = ({ category }) => {
    const { id, picture, button_bg_color, title, description, price } = category || {};
    const handleDonationDetails = () => {
        console.log(category);
        const addedCategory = [];
        const addedItems = JSON.parse(localStorage.getItem("donated"));
        if (!addedItems) {
            addedCategory.push(category);
            localStorage.setItem("donated", JSON.stringify(addedCategory));
            ("Good job!", "Donation added successfully!", "success");
        }
        else {
            const isExists = addedItems.find((category) => category.id == id);
            if (!isExists) {
                addedCategory.push(...addedItems, category);
                localStorage.setItem("donated", JSON.stringify(addedCategory));
                swal("You have done a great job!", "Thanks For Your Donation", "success");
            }
            else {
                swal("Sorry!", "You have already donated", "error");
            }
        }
    };

    return (
        <div className="flex flex-col">
            <div className="flex justify-center h-[70vh] ">
                <div className="mt-40">
                    <div className="relative">
                        <img className="w-[600px] rounded-lg" src={picture} alt="" />
                        <div className="absolute top-[310px]">
                            <div className="relative">
                                <div className="p-2 rounded-lg w-[600px] bg-black bg-opacity-60">

                                    <button
                                        onClick={handleDonationDetails}
                                        style={{ backgroundColor: `${button_bg_color}` }} className="p-3 bg-[#FF444A] text-white rounded-sm text-sm">Donate ${price}</button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="h-[30vh] max-w-[1300px] mx-auto mt-20">
                <h1 className="text-2xl font-bold my-5">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CategoryDetailsPage;