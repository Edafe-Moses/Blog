const MainSideBar = () => {

    const firstSection = [
        {
            'id': '1',
            'image': "ic_fiber_new_24px 2",
            'title': 'Newest and Recent',
            'content': 'Find the latest update'
        },
        {
            'id': '2',
            'image': "Frame15",
            'title': 'Popular of the day',
            'content': 'Shorts featured by curators'
        },
        {
            'id': '3',
            'image': "Follow",
            'title': 'Following',
            'titleImage': 'Frame16',
            'content': 'Explore from your favorite person'
        }
    ]

    const secondSection = [
        {
            'id': '1',
            'image': "Icon",
            'title': '#javascript',
            'content': '82,645 Posted by this tag'
        },
        {
            'id': '2',
            'image': "Icon1",
            'title': '#bitcoin',
            'content': '65,523 Posted ▪ Trending'
        },
        {
            'id': '3',
            'image': "Icon2",
            'title': '#design',
            'content': '51,354 ▪ Trending in Bangladesh'
        },
        {
            'id': '4',
            'image': "Icon3",
            'title': '#innovation',
            'content': '48,029 Posted by this tag'
        },
        {
            'id': '5',
            'image': "Icon4",
            'title': '#tutorial',
            'content': '51,354 ▪ Trending in Bangladesh'
        },
        {
            'id': '6',
            'image': "Icon5",
            'title': '#bisieness',
            'content': '2,645 Posted by this tag'
        },
    ]

    const thirdSection = [
        {
            'id': '1',
            'image': "Icon",
            'title': '#javascript',
            'content': '82,645 Posted by this tag'
        },
        {
            'id': '2',
            'image': "Icon1",
            'title': '#bitcoin',
            'content': '65,523 Posted ▪ Trending'
        },
        {
            'id': '3',
            'image': "Icon2",
            'title': '#design',
            'content': '51,354 ▪ Trending in Bangladesh'
        },
        {
            'id': '4',
            'image': "Icon3",
            'title': '#innovation',
            'content': '48,029 Posted by this tag'
        },
        {
            'id': '5',
            'image': "Icon4",
            'title': '#tutorial',
            'content': '51,354 ▪ Trending in Bangladesh'
        }
    ]

    return (
        <div className="flex flex-col gap-5">
            <div className="p-[10px] bg-[#262D34] rounded-2xl w-[210px]">
                {firstSection.map(categories => {
                    return (
                        <div className="flex items-center gap-2 p-2 hover:bg-[#2C353D] rounded-md">
                            <img 
                                src={`/Icons/mainIcon/mainSideBar/1/${categories.image}.png`} 
                                alt={categories.id} 
                            />
                            <div>
                                <h4 className="text-white font-semibold text-xs">{categories.title}</h4>
                                <p className="text-[9px] text-[#97989D]">{categories.content}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="p-[10px] bg-[#262D34] rounded-2xl w-[210px]">
                <h3 className="font-semibold text-base text-white p-[10px]">Popular Tags</h3>
                {secondSection.map(categories => {
                    return (
                        <div className="flex items-center gap-2 p-2 hover:bg-[#2C353D] rounded-md">
                            <img 
                                src={`/Icons/mainIcon/mainSideBar/2/${categories.image}.png`} 
                                alt={categories.id} 
                            />
                            <div>
                                <h4 className="text-white font-semibold text-xs">{categories.title}</h4>
                                <p className="text-[9px] text-[#97989D]">{categories.content}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="p-[10px] bg-[#262D34] rounded-2xl w-[210px]">
                <h3 className="font-semibold text-base text-white p-[10px] flex items-center gap-1">
                    <span>Pinned Groups</span>
                    <img 
                        src="/Icons/mainIcon/mainSideBar/3/Vector1.png" 
                        alt="fowardArrow" 
                    />    
                </h3>
                {thirdSection.map(categories => {
                    return (
                        <div className="flex items-center gap-2 p-2 hover:bg-[#2C353D] rounded-md">
                            <img 
                                src={`/Icons/mainIcon/mainSideBar/3/${categories.image}.png`} 
                                alt={categories.id} 
                            />
                            <div>
                                <h4 className="text-white font-semibold text-xs">{categories.title}</h4>
                                <p className="text-[9px] text-[#97989D]">{categories.content}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MainSideBar