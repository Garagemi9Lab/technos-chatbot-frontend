import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import style from './style'
import logo from '../../../../assets/images/bot.png'

class Header extends Component {

    render() {

        const { classes } = this.props

        return (
            <div className={classes.header}>
                <img className={classes.logo} src={logo} alt="logo" />
                Technos
            </div>
        )
    }
}

export default withStyles(style)(Header)