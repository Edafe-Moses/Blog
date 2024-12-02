const MainRightBar = () => {

    const firstSection = [
        {
            "id": 1,
            "month": "FEB",
            "day": "7",
            "title": "UIHUT - Crunchbase Company...",
            "logo":"Rectangle3",
            "companynameLocation": "UIHUT ▪ sythet, bangladesh", 
            "about": ["remote", "part-time", "worldwide"]
        },
        {
            "id": 2,
            "month": "FEB",
            "day": "3",
            "title": "Design Meetups USA | Dribbble",
            "logo":"Rectangle1",
            "companynameLocation": "Dribbble ▪ austin, texas, USA", 
            "about": ["remote", "part-time"]
        },
        {
            "id": 3,
            "month": "FEB",
            "day": "5",
            "title": "Meetup Brand identity design...",
            "logo":"Rectangle2",
            "companynameLocation": "Behance ▪ sab jose, Califonia, USA", 
            "about": ["remote", "part-time", "worldwide"]
        },
    ]

    return (
        <div className="bg-[#262D34] rounded-2xl p-5 flex flex-col gap-5">
            <h3 className="font-semibold text-base text-white p-[10px] flex items-center gap-1">
                <span>Meetups</span>
                <img 
                    src="/Icons/mainIcon/mainSideBar/3/Vector1.png" 
                    alt="fowardArrow" 
                />    
            </h3>
            {firstSection.map(categories => (
                <div className="flex gap-[14px] items-center">
                    <div className="h-full px-[10px] flex flex-col items-center bg-[#2C353D] rounded-md">
                        <p className="text-white text-sm font-semibold">{categories.month}</p>
                        <p className="font-bold text-[26px] text-[#5D95E8] leading-10">{categories.day}</p>
                    </div>

                    <div className="flex flex-col gap-[10px]">
                        <div>
                            <h4 className="font-semibold text-sm capitalize text-slate-200 mb-1">{categories.title}</h4>
                            <div className="flex items-center gap-2 font-semibold text-[10px] text-[#97989D]">
                                <img 
                                    src={`/Icons/mainIcon/secondSideBar/${categories.logo}.png`} 
                                    alt={``} 
                                />
                                <p>{categories.companynameLocation}</p>
                            </div>
                        </div>

                        <div className="flex gap-[10px] font-semibold text-[9px] text-[#858EAD]">
                            {categories.about.map(destination => (
                                <p className="bg-[#2C353D] px-2 py-[2px] rounded-2xl">{destination}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MainRightBar