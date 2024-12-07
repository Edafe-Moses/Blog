import { useSelector, useDispatch } from "react-redux"
import Login from "../scenes/Login/Login"
import MainRightBar from "../scenes/MainRightBar"
import MainSection from "../scenes/MainSection"
import MainSideBar from "../scenes/MainSideBar"
import Modal from "./Modal"
import { loginAction } from "../store/loginSlice"

const Main = () => {

    const openLoginModal = useSelector((state) => state.loginModal)
    const dispatch = useDispatch()

    return (
        <div className="bg-[#1E252B] w-full h-fit py-5 px-5 flex items-start gap-5">
            <MainSideBar />
            <MainSection />
            <MainRightBar />
            <Modal
                isOpen={openLoginModal}
                children={<Login close={() => dispatch(loginAction.show())}/>}
            />
        </div>
    )
}

export default Main