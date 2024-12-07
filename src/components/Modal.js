const Modal = ({isOpen, children}) => {
    
    if (!isOpen) {
        return null
    }

    return (
        <div className="fixed inset-11 top-[15%]">
            {children}
        </div>
    )
}

export default Modal