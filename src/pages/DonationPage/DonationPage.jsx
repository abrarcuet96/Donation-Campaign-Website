import { useEffect, useState } from "react";
import DonationAdded from "../../components/DonationAdded/DonationAdded";
import StatisticsPage from "../StatisticsPage/StatisticsPage";

const DonationPage = () => {
    const [donations, setDonations] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [totalDonation, setTotalDonation]=useState(0);
    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem("donated"));
        if (donatedItems) {
            setDonations(donatedItems);
            const total=donatedItems.reduce((preVal, currVal)=> preVal+currVal.price,0);
            setTotalDonation(total);
        }
        else {
            setNotFound('No Donations');
        }
    }, []);
    const handleRemove = () => {
        localStorage.clear();
        setDonations([]);
        setNotFound('No Donations')
    }
    return (
        <div>
            {
                notFound ? (
                    <p className="h-[80vh] flex justify-center items-center">{notFound}</p>
                ) : (
                    <div>

                        {
                            donations.length > 0 && (
                                <div className="md:h-[40vh] h-[40vh] flex items-end mb-4 ">
                                    <button
                                        onClick={handleRemove}
                                        className="text-white bg-red-600 btn px-5 bg-green-200 block mx-auto"
                                    >
                                        Delete All Donations
                                    </button>
                                </div>
                            )
                        }
                        <div className="max-w-[1300px] mx-5 xl:mx-auto grid grid-cols-1 lg:grid-cols-2 rounded-lg gap-5">
                            {isShow ? donations.map((category) => (
                                <DonationAdded key={category.id} category={category}></DonationAdded>
                            ))
                                : donations.slice(0, 4).map((category) => (
                                    <DonationAdded key={category.id} category={category}></DonationAdded>
                                ))
                            }
                        </div>
                        {
                            donations.length > 2 &&
                            (
                                <div className="my-20">
                                    <button  onClick={() => setIsShow(!isShow)} className="text-white btn px-5 bg-blue-600 block mx-auto">
                                        {isShow ? "See Less" : "See More"}

                                    </button>
                                </div>
                            )
                        }

                    </div>
                )
            }
        </div>
    );
};

export default DonationPage;