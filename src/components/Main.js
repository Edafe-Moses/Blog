import MainRightBar from "../scenes/MainRightBar"
import MainSection from "../scenes/MainSection"
import MainSideBar from "../scenes/MainSideBar"

const Main = () => {
    return (
        <div className="bg-[#1E252B] w-full h-fit py-5 px-5 flex items-start gap-5">
            <MainSideBar />
            <MainSection />
            <MainRightBar />
        </div>
    )
}

export default Main