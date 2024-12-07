import { useDispatch, useSelector } from "react-redux"
import { loveActions } from "../store/mainSectionSlice"

const MainSection = () => {

    const posts = useSelector((state) => state.mainSection.posts)
    const dispatch = useDispatch()

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
                                src={post.lovepost} 
                                alt={post.id}
                                onClick={() => dispatch(loveActions.reset(post.id - 1))}
                                className="absolute right-0 mr-5 cursor-pointer"
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

                                    <div className="flex gap-10 items-center text-[#C5D0E6] text-sm select-none">
                                        <p>{post.Others.Views}</p>
                                        <p className="cursor-pointer flex items-center gap-1 text-md" onClick={() => dispatch(loveActions.incrementUpvote(post.id -1))}>
                                            {post.Others.Upvote}
                                            <img 
                                                src={`/Icons/mainIcon/mainSection/upvote.png`}  
                                                alt="UpVote" 
                                                className=" w-5 h-5"
                                            />
                                        </p>
                                        <p className="cursor-pointer flex items-center gap-1 text-md" onClick={() => dispatch(loveActions.incrementDownvote(post.id -1))}>
                                            {post.Others.Downvote}
                                            <img 
                                                src={`/Icons/mainIcon/mainSection/downvote.png`}  
                                                alt="Downvote"
                                                className=" w-5 h-5" 
                                            />
                                        </p>
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