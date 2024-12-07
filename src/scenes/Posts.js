import { useDispatch, useSelector } from "react-redux"
import { loveActions } from "../store/LoveSlice"

const Posts = ({id, image, title, lovepost, aboutpost, aboutPostOwner, Others}) => {

    
    const lPostLocation = useSelector((state) => state.love.loc)
    const dispatch = useDispatch()
    
    dispatch(
        loveActions.addItem({
            id,
            image,
            title,
            lovepost,
            aboutpost,
            aboutPostOwner,
            Others
        })
    )

    const lovePost = () => {
        dispatch(loveActions.reset())
    }

    return (
        <div className="p-5 rounded-2xl bg-[#262D34] w-[700px] flex gap-5 items-start relative">
            <img
                src={`/Icons/mainIcon/mainSection/${image}.png`} 
                alt="PostImage" 
            />
                
            <img 
                src={lPostLocation} 
                alt={lPostLocation}
                onClick={lovePost}
                className="absolute right-0 mr-5 cursor-pointer"
            />

            <div className="flex flex-col gap-[30px] w-[519px]">
                <div className="flex flex-col gap-[10px]">
                    <h3 className="font-semibold text-lg text-slate-200 mr-5">{title}</h3>
                    <div className="flex gap-[10px]">
                        {aboutpost.map((ab) => (
                            <p className="px-[10px] py-1 bg-[#2C353D] rounded-2xl text-[#C5D0E6] font-semibold text-[10px] w-fit">{ab}</p>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex gap-[10px] items-center">
                        <div className="w-10 h-10 rounded-full bg-[#F9DFC0] flex items-center justify-center">
                            <img 
                                src={`/Icons/mainIcon/mainSection/${aboutPostOwner.photo}.png`}  
                                alt="PostOwner" 
                            />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="font-semibold text-sm text-slate-200">{aboutPostOwner.name}</h4>
                            <p className="text-[10px] text-[#C5D0E6]">{aboutPostOwner.date}</p>
                        </div>
                    </div>

                    <div className="flex gap-10 items-center text-[#C5D0E6] text-sm">
                        <p>{Others.Views}</p>
                        <p>{Others.Likes}</p>
                        <p>{Others.Comments}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts