const style = {
    root: {
        'position': 'relative',
        'height': '100vh'
    },
    intro: {
        'position': 'absolute',
        'height': '100px',
        'left': '17%',
        'top': '20%'
    },
    mainInfo: {
        lineHeight: '80px',
        fontSize: 'clamp(44px, 14vw, 65px)',
    },
    myNameIs: {
        'color': '#64ffda',
        display: 'block',
        fontWeight: 'bold',
        fontSize: 'clamp(10px, 1.2vw, 60px)'
    },
    summary: {
        // width: '50%',
        minWidth: '400px',
        maxWidth: '650px',
        color: '#8892b0',
        fontSize: '21px'
    },
    contactMe: {
        width: '200px',
        position: 'inherit',
        display: 'block',
        fontSize: '22px',
        color: '#8892b0',
        cursor: 'pointer',
        // left: '20%',
        marginTop: '3%',
        height: '50px',
        backgroundColor: '#0a192f',
        border: '1px solid #64ffda'
    },
}
export { style };