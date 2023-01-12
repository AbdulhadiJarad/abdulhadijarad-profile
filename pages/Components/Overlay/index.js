const Overlay = ({ children }) => {

    return (
        <div className='imgContainer'>
            {children}
            <div className="overlay"></div>
        </div>
    );
}

export default Overlay
