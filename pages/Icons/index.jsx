const InstagramIcon = ({isActive}) => {
    return <div style={{ marginLeft: '-14px' }}><a href="https://www.instagram.com/abd_alhadi_jarad/" aria-label="Instagram" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><title>Instagram</title>
            <rect stroke={!isActive ? "#ccd6f6" : 'pink'} x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path stroke={!isActive ? "#ccd6f6" : 'pink'} d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line stroke={!isActive ? "#ccd6f6" : 'pink'} x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></div>
}

export default InstagramIcon