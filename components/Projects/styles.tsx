const style: { [key: string]: React.CSSProperties } = {
    root: {
        // width: '50%'
        margin: '0px auto',
        marginBottom: '100px'
    },
    intro: {

    },
    headingDivider: {
        width: '30%',
        marginLeft: '20px',
        border: 'solid 1px #233554',
        background: '#23355'
    },
    mainInfo: {
        fontSize: 'clamp(40px, 8vw, 80px)'
    },
    myNameIs: {
        'color': '#ccd6f6',
        display: 'block',
        fontSize: '4vmin',
        fontWeight: 'bold',
        // width: '100%',
    },
    summary: {
        width: '90%',
        color: 'rgb(136, 146, 176)',
        fontSize: '18px',
        margin: '0px auto !important'
    },
    avatar: {
        borderRadius: '20px'
    }
}
export { style };