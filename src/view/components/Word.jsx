import React from 'react';
import Letter from './Letter'
import '../css/word.css'

export default class Word extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            letters: [],
        };

    }

    componentWillMount(){
        this.createListOfLetters();
    }

    createListOfLetters(){
        let wordLength=this.props.wordToPlayWith.length;
        let listOfLetters=[];
        for(let i=0; i<wordLength;i++){
            listOfLetters.push("_");
        }
        this.setState({letters:listOfLetters});
    }


    updateListOfLettersAfterGussing(letterIndexes,letter){
        let letters=[...this.state.letters];
        letterIndexes.forEach((index)=>{
            letters[index]=letter;
        });
        this.setState({letters:letters});
    }


    render () {
        let listOfletters = this.state.letters.map((singleLetter,i) => {
            return  <Letter key={i} value={singleLetter}/>;
        });
        return (
            <div>
             <div className="guss-zone-header"><sapn>Guss The Word!</sapn><span>Enter a letter</span></div>
            <div className="playword">{listOfletters}</div>
            </div>   
        );
    }
}
