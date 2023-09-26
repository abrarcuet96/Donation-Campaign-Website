
const Banner = () => {
    const myStyle = {
        backgroundImage: 'url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR1c7kE79FHqWgsj6y9piQ3nthcJUEnmOGfhumbGfw1zJAhY-zlund52zcE)',
        color: 'white'
    }
    return (
        <div className="min-h-[80vh] " style={myStyle}>
            {/* <div className="hero-overlay bg-white opacity-90"></div> */}

            <div className="bg-white bg-opacity-90">

                <div className="min-h-[80vh] flex items-center justify-center">
                    <div className="flex flex-col items-center">
                        <p className="mb-5 text-4xl text-black font-bold">I Grow By Helping People In Need</p>
                        <div className="flex items-center">
                            <input type="text" placeholder="Search here…" className="w-[300px] p-3 rounded-l-lg" />
                            <button className="p-3 rounded-r-lg bg-[#FF444A] text-white">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;