import React from "react"

const Navbar = () => {

    const NavImages = [
        {
          "id": 1,
          "name": "Home"
        },
        {
          "id": 2,
          "name": "calendar"
        },
        {
          "id": 3,
          "name": "group"
        },
        {
          "id": 4,
          "name": "audio"
        },
        {
          "id": 5,
          "name": "microphone"
        },
    ]

    return (
        <div className="flex justify-between px-5 py-5 items-center bg-[#262D34]">
            <div className="flex gap-[10px] items-center">
                <img 
                    src={`/Icons/NavIcons/Logo.png`}
                    alt={`company logo`}
                    className="w-[30px] h-[30px]"
                />
                <h2 className="text-[#FF571A] text-2xl font-bold">Knowledgechain</h2>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex gap-5 items-center justify-center">
                    {NavImages.map((navImage, index) => {
                        return (
                            <div className={`${index === 0 && 'p-[10px] bg-[#FF4401] rounded-lg'}`}>
                                <img 
                                    src={`/Icons/NavIcons/${navImage.name}.png`} 
                                    alt={`${navImage.id}`}
                                    className="w-5 h-5"
                                />
                            </div>
                        )
                    })}
                </div>

                <div className="flex gap-14 items-center">
                    <div className="w-[440px] h-10 mk relative">
                        <input 
                            type="text" 
                            placeholder='Type here to search...'
                            className="w-full h-full bg-[#2C353D] text-[#858EAD] border-none rounded-lg pl-5 pr-10"
                        />
                        <img 
                            src={`/Icons/NavIcons/SearchIcon.png`} 
                            alt={`Search`} 
                            className="absolute right-0 top-1/4 mr-5"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <img 
                            src={`/Icons/NavIcons/Message.png`} 
                            alt={`message`}
                             className="w-5 h-5"
                        />

                        <img 
                            src={`/Icons/NavIcons/Notification.png`} 
                            alt={`Notification`}
                             className="w-5 h-5"
                        />

                        <div className="flex gap-4 items-center">
                            <img 
                                src={`/Icons/NavIcons/ProfileImage.png`} 
                                alt={`ProfileImage`}
                                className=""
                            />
                            <span className="text-[#e6e7e7]">AR. Jakir</span>
                            <img 
                                src={`/Icons/NavIcons/Vector.png`} 
                                alt={`Dropdown`}
                                 className="w-5 h-5"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar