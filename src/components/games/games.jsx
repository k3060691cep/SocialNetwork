import React from "react";
import game from "./games.module.css"

class Games extends React.Component {
    state = {
        num: '',
        number: '',
        firstNum: '',
        sumNum: '',
        average: [],
        sum : 0 ,
    };

    onAddNumber = (e) => {
        if(e.target.value === '+'){
         this.setState({firstNum: +this.state.number , number: ''});
        }else if(e.target.value === '='){
            this.setState({sumNum: +this.state.number + +this.state.firstNum});
        }
        else {
            this.setState({number: this.state.number + e.target.value });}


    };
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '=', 'c'];
    numbersItems = this.numbers.map(i => (
        <button key={i.id} onClick={this.onAddNumber} value={i} className={game.number}>{i}</button>));

    average(){
        let i = 0;
        let sum = 0;
        for(i; i < arguments.length; i++){
            sum = sum + arguments[i]
        }
        return sum/arguments.length;
    }
    handleChange = (e) => {
        this.setState( {num: e.target.value});
    }

    handleNum = (e) => {
        this.state.average.push(+ this.state.num);
        this.setState({num: ''})

    }
    handleAverage = () => {
        debugger
        let sum = 0;

          for(let i = 0; i < this.state.average.length; i++){
             sum = sum +  this.state.average[i]
          }
          return this.setState({sum:  sum / this.state.average.length })

    };








     findMissingLetter = (array) => {
         var string = array.join();
         for (var i = 0; i < string.length; i++) {

             if (string.charCodeAt(i + 1) - string.charCodeAt(i) != 1) {

                 return String.fromCharCode(string.charCodeAt(i) + 1);
             }
         }
    };

     digital_root = (n) => {
         let sum = 4567 % 9
         console.log(sum);
         return (n - 1) % 9 + 1;

     }



    render() {
console.log(this.digital_root(4567));
        return (
            <div className={game.game}>
                <div className={game.container}>
                    <input className={game.input} type="0" onChange={''} value={this.state.number}/>
                    <hr/>
                    <input className={game.input} type="0" onChange={''} value={this.state.sumNum}/>
                    <div className={game.numbers}>

                    </div>
                    <textarea onChange={this.handleChange} value={this.state.num} name="input number" id="" cols="30" rows="10"></textarea>
                    <button onClick={this.handleNum}>add num</button>
                    <button onClick={this.handleAverage}>average</button>
                    <div >{this.state.sum}</div>
                </div>
            </div>
        )
    }

}

export default  Games;






// const Games = (props) => {
//
//     let someNumber = props.numbers1
//
//     let onAddNumber = (e) => {
//
//         let newNumbers = someNumber + e.target.value;
//
//         console.log(newNumbers);
//
//         props.updateNumber1(newNumbers)
//     };
//     let onChangeNumber1 = (e) => {
//
//         let newNumbers = e.target.value;
//         props.updateNumber1(newNumbers)
//         console.log(props.value)
//
//     };
//     const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-' , '=', 'c'];
//     let numbersItems = numbers.map(i => (<button key={i.id} onClick={onAddNumber} value={i} className={game.number}>{i}</button>))
//
//     return(
//         <div className={game.game}>
//             <div className={game.container}>
//                 <input className={game.input} type="0" onChange={onChangeNumber1}  value={someNumber}/>
//                 <hr/>
//                 <input className={game.input} type="0" onChange={onChangeNumber1}  value={props.numbers2}/>
//                 <div className={game.numbers}>
//                     {numbersItems}
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default  Games;