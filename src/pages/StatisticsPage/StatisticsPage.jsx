import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

const StatisticsPage = () => {
    const [totalDonation, setTotalDonation] = useState(0);
    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem("donated"));
        if (donatedItems) {
            const total = donatedItems.length;
            setTotalDonation(total);
        }
    }, []);
    const categories = useLoaderData();
    const totalDonationItems = categories.length;
    const myDonation = (totalDonation / totalDonationItems) * 100;
    const myDonationFloat = parseFloat(myDonation);
    const donationLeft = 100 - myDonationFloat;
    const data = [
        { value: myDonationFloat },
        { value: donationLeft },

    ];
    const COLORS = ["#00C49F", "#FF444A"];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className="flex items-start justify-center">

            <div className="flex flex-col items-center">
                <div>
                    <PieChart width={800} height={600}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={false}
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={200}
                            fill="#8884d8"
                            label={renderCustomizedLabel}
                            labelLine={false}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </div>
                <div className="flex gap-5 border-2">
                    <div className="flex items-center gap-2">
                        <p>Your Donation</p>
                        <div className="w-[100px] h-[20px] bg-[#00C49F]"></div>

                    </div>
                    <div className="flex items-center gap-2">
                        <p>Total Donation</p>
                        <div className="w-[100px] h-[20px] bg-[#FF444A]">></div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default StatisticsPage;