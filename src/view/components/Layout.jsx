 import React from 'react';
 import Header from './Header';
 import Body from './Body';
 import Footer from './Footer';
 import '../css/layout.css'

 import HangmanCommonService from '../../controller/HangmanCommonService';

 export default class Layout extends  React.Component {
 constructor(props){
 super(props);
   this.hangmanCommonService = new HangmanCommonService();
 }


   userGuessByLetter(letter){
     if(this.hangmanCommonService.isRepeatingGuess(letter)){
      alert("letter was already chosen");
      return null
     }
     let letterIndexes = this.isLetterExists(letter);
     if(letterIndexes.length===0){
      alert("letter doesn't exists in this word");
    }
     else{
       let remainsLetter = this.hangmanCommonService.updateNumberOfRemainLetterToGuess(letterIndexes.length);
        if(remainsLetter===0){
         this._footer. updateMessage("YOU WIN!");
        }
       this._body.updateListOfLettersAfterGussing(letterIndexes,letter)
     }
   }


  isLetterExists(letter){
   if(typeof letter === undefined){
     return [];
   }
   let letterIndexes=[];
   let word = this.hangmanCommonService.wordToPlayWith;
   for(let index in word){
     if(word[index]===letter){
     letterIndexes.push(Number(index));
     }
    }
   return letterIndexes;
  }


  render(){
   return(
       <div className="mainScreen">
        <Header/>
        <div className="secondScreen">
         <div className="start"><div className="startIcon">start</div></div>
        <Body ref={(child) => { this._body = child; }}  userGuessByLetter={this.userGuessByLetter.bind(this)} wordToPlayWith={this.hangmanCommonService.wordToPlayWith} />
        <Footer ref={(child) => { this._footer = child; }} message={this.props.message}/>
        </div>
       </div>
   );
  }



 }
