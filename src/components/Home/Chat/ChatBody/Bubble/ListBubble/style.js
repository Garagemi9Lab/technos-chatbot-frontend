export default theme => ({
    bubble: {
        marginTop: 15,
        maxWidth: '60%',
        minWidth: '10%',
        padding: 5,
        wordWrap: 'break-word',
        display: 'flex',
        flexDirection: 'column'
    },
    applicationBubble: {
        marginLeft: 5,
        backgroundColor: '#d9d9d9',
        color: '#000',
        textAlign: 'left',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
    clientBubble: {
        marginRight: 5,
        backgroundColor: '#000',
        textAlign: 'left',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    list: {

    },
    listItem: {
        padding: 0
    },
    listItemText: {
        color: "#000",
        fontSize: '11pt',
        padding: '5px 5px',
        "&::before": {
            content: '" "',
            display: 'inline-block',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            border: '1px solid #000',
            backgroundColor: 'transparent',
            marginRight: 5
        }
    }
})