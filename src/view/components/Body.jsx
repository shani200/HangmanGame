import React from 'react';

import RemainGuessing from './RemainGuessing';
import Guessing from './Guessing';
import Word from './Word';
import '../css/body.css';


export default class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    updateListOfLettersAfterGussing(letterIndexes,letter){
        this._child.updateListOfLettersAfterGussing(letterIndexes,letter);

    }

    render() {
        return (
        <div className="body-content">
          <RemainGuessing />
            <Word ref={(child=>{this._child=child})} wordToPlayWith={this.props.wordToPlayWith}/>
            <Guessing onClick={this.props.userGuessByLetter}/>
       </div>
        );
    }
}