export default theme => ({
    holder: {
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'hidden',
        height: '100%',
        borderLeft: '1px solid #fff'
    },
    messagesHolder: {
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
        width: '100%',
        flex: '1 0'
    },
    footer: {
    },
    footerHolder: {
        display: 'flex'
    },
    inputHolder: {
        flexGrow: 1,
    },

    inputTextField: {
        paddingLeft: 5,
        color: 'black'
    },
    cssOutlinedInput: {
        '&$cssFocused': {
            borderColor: `red !important`,
        }
    },
    focusedInput: {
    },
    btn: {
        color: '#c92e2e'
    }
})