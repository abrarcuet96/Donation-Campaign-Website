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
    const myDonationtFloat = parseFloat(myDonation);
    const donationLeft = 100 - myDonationtFloat;
    const data = [
        { value: myDonationtFloat },
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
        <div className="h-[100vh] md:w-full flex items-start justify-center">

            <div>
                <PieChart width={800} height={800}>
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

        </div>

    );
};

export default StatisticsPage;