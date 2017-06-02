import React, { Component } from 'react';

export default class Announcement extends Component{
    render(){
        return(
            <div className={this.props.winner ? 'visible' : 'hidden'}>
                     <h2>Oyun Bitti - Kazanan: {this.props.winner}</h2>
            </div>
        );
    }
}
