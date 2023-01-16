const style: { [key: string]: React.CSSProperties } = {
    root: {
        // 'position': 'relative',
        'height': 'auto',
        width: '100%',
        marginBottom: '100px'

    },
    intro: {
        
    },
    mainInfo: {
        fontSize: 'clamp(40px, 8vw, 80px)'
    },
    coursesWrapper: { width: '100%', height: '100%', alignItems: 'center', backgroundColor: 'rgb(17, 34, 64)', borderRadius: '12px' },
    myNameIs: {
        'color': '#ccd6f6',
        display: 'block',
        fontSize: '4vmin',
        fontWeight: 'bold'
    },
    wrapper: { padding: '20px', },
    description: { marginTop: '10px' },
    owner: { color: 'rgb(100, 255, 218)', marginTop: '5px' },
    summary: {
        maxWidth: '100%',
        color: 'rgb(136, 146, 176)',
        fontSize: '18px',
        width: '90%',
        margin: '0px auto'
    },
    avatar: {
        borderRadius: '20px'
    }
}
export { style };