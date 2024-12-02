const MainSection = () => {

    const posts = [
        {
            "image": "Rectangle",
            "title": "Blockchain developer best practices on innovation chain",
            "lovepost": "Like",
            "aboutpost": ["finance", "bitcoin", "crypto"],
            "aboutPostOwner": {"photo": "MemojiBoys","name": "Pavel Gvay ▪","date": "3 weeks ago"},
            "Others": {"Views": "651,324 Views", "Likes": "36,6546 Likes", "Comments": "56 comments"}
        },
        {
            "image": "Rectangle1",
            "title": "The 4-step SEO framework that led to a 1000% increase in traffic. Let's talk about blogging and SEO...",
            "lovepost": "Heart",
            "aboutpost": ["seo", "blogging", "traffic"],
            "aboutPostOwner": {"photo": "MemojiBoys1","name": "AR Jakir ▪","date": "3 days ago"},
            "Others": {"Views": "244,564 Views", "Likes": "10,920 Likes", "Comments": "184 comments"}
        },
        {
            "image": "Rectangle2",
            "title": "OnePay - Online Payment Processing Web App - Download from uihut.com",
            "lovepost": "Heart",
            "aboutpost": ["payment", "webapp", "uikit"],
            "aboutPostOwner": {"photo": "MemojiBoys2","name": "Mansurul Haque ▪","date": "1 weeks ago"},
            "Others": {"Views": "601,066 Views", "Likes": "24,753 Likes", "Comments": "209 comments"}
        },
        {
            "image": "Rectangle3",
            "title": "Designing User Interfaces - how I sold 1800 copies in a few months by Michal Malewicz",
            "lovepost": "Like",
            "aboutpost": ["design", "user interface", "designing"],
            "aboutPostOwner": {"photo": "MemojiBoys3","name": "Michal Malewicz ▪","date": "2 weeks ago"},
            "Others": {"Views": "964,258 Views", "Likes": "64,755 Likes", "Comments": "44 comments"}
        }
    ]

    return (
        <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center p-5 bg-[#262D34] rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-[#F9DFC0] flex items-center justify-center">
                    <img 
                        src="/Icons/mainIcon/mainSection/MaskGroup.png" 
                        alt="UserImage" 
                    />
                </div>

                <input 
                    type="text" 
                    placeholder="Let's share what going on your mind..."
                    className="w-[453px] py-3 bg-[#2C353D] text-[#858EAD] border-none rounded-lg pl-5 pr-10"
                />

                <a 
                    href="/"
                    className="bg-[#FF6934] px-4 py-3 text-white rounded-md"
                >
                    Create Post
                </a>
            </div>

            <div className="flex flex-col gap-5">
                {posts.map(post => {
                    return (
                        <div className="p-5 rounded-2xl bg-[#262D34] w-[700px] flex gap-5 items-start relative">
                            <img 
                                src={`/Icons/mainIcon/mainSection/${post.image}.png`} 
                                alt="PostImage" 
                            />

                            <img 
                                src={`/Icons/mainIcon/mainSection/${post.lovepost}.png`} 
                                alt="Love/Heart"
                                className="absolute right-0 mr-5"
                            />

                            <div className="flex flex-col gap-[30px] w-[519px]">
                                <div className="flex flex-col gap-[10px]">
                                    <h3 className="font-semibold text-lg text-slate-200 mr-5">{post.title}</h3>
                                    <div className="flex gap-[10px]">
                                        {post.aboutpost.map((ab) => (
                                            <p className="px-[10px] py-1 bg-[#2C353D] rounded-2xl text-[#C5D0E6] font-semibold text-[10px] w-fit">{ab}</p>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex gap-[10px] items-center">
                                        <div className="w-10 h-10 rounded-full bg-[#F9DFC0] flex items-center justify-center">
                                            <img 
                                                src={`/Icons/mainIcon/mainSection/${post.aboutPostOwner.photo}.png`}  
                                                alt="PostOwner" 
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <h4 className="font-semibold text-sm text-slate-200">{post.aboutPostOwner.name}</h4>
                                            <p className="text-[10px] text-[#C5D0E6]">{post.aboutPostOwner.date}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-10 items-center text-[#C5D0E6] text-sm">
                                        <p>{post.Others.Views}</p>
                                        <p>{post.Others.Likes}</p>
                                        <p>{post.Others.Comments}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MainSection