const MobileHeader = () => {
    return <>
        <input type="checkbox" id="active" />
        <label for="active" className="menu-btn"><i className="fas fa-bars"></i></label>
        <div className="wrapper">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Feedback</a></li>
            </ul>
        </div>
        <div className="content">
            <div className="title">
                Fullscreen Overlay Navigation Bar</div>
            <p>
                with HTML & CSS Neon Effect</p>
        </div>
    </>
}

export default MobileHeader;