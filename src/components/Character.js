import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editElement, changeImage } from '../actions/Actions';
import SpellSlots from './SpellSlots';
// import StatComponent from './StatComponent';
// import WeaponComponent from './WeaponComponent';

function DisplayStat(props) {
    const background = {background:props.color}
    return(
    <h3 
    style={background} 
    className = 'displayStatContainer'
    >   

    {props.text}
    <br/>
    {props.value}

    </h3>);
}
function DisplayImage(props) {
    return(
    <div  
    className = {'displayImageContainer ' + props.animation}
    >
    </div>);
}

// const flacaImage = 'https://i.imgur.com/DRbKUiA.jpg';
// const flacaBackground = "url(" + flacaImage + ")";
class Stats extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            show: false,
            render:false
        };

        this.addHp = this.addHp.bind(this);
        this.minusHp = this.minusHp.bind(this);
        this.resetHp = this.resetHp.bind(this);
        this.showInput = this.showInput.bind(this);
        this.shakeElt = this.shakeElt.bind(this);
        this.pulseElt = this.pulseElt.bind(this);
        this.resetElt = this.resetElt.bind(this);
        this.sleep = this.sleep.bind(this);
      }

      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    async shakeElt(){
        this.props.changeImage('');
        await this.sleep(100);
        this.props.changeImage('shake');
        await this.sleep(600);
        this.props.changeImage('');
    }

    async pulseElt(){
        this.props.changeImage('');
        await this.sleep(50);
        this.props.changeImage('heal');
        await this.sleep(1000);
        this.props.changeImage('');
    }
    async resetElt(){
        this.props.changeImage('');
        await this.sleep(50);
        this.props.changeImage('reset');
        await this.sleep(2000);
        this.props.changeImage('');
    }
      addHp(val){

        this.props.editElement(['otherstats','hpCurrent'],this.props.character.otherstats.hpCurrent+val,'two-elt');
        this.setState({render:true});
        this.pulseElt();
      }
      minusHp(val){
        this.props.editElement(['otherstats','hpCurrent'],this.props.character.otherstats.hpCurrent-val,'two-elt');
        this.setState({render:true});
        this.shakeElt();
      }
      resetHp(){
        this.props.editElement(['otherstats','hpCurrent'],this.props.character.otherstats.hpMax,'two-elt');
        this.setState({render:true});
        this.resetElt();
      }
      showInput(){
          this.setState({
              show: !this.state.show
          })
      }


    render() {
        
        
        //Create hpBar component here
        
        let hpWidth = 100*this.props.character.otherstats.hpCurrent/this.props.character.otherstats.hpMax;
        let backgroundColor = 'red';
        if(hpWidth>20)
            {
                backgroundColor='green'
            };
        let hpBarStyle = {
            width: hpWidth + '%',
            background: backgroundColor
        }
      const hpblock = 
        <div className = 'characterComponent'>
        
        <div onClick={this.showInput} className='hpBarContainer'>
            <div style={hpBarStyle} className='hpBar'>
                {this.props.character.otherstats.hpCurrent}/{this.props.character.otherstats.hpMax}
            </div>    
        </div>
            {this.state.show && 
            <div className = 'hpButtonContainer'>
                <div onClick={() => this.addHp(1)} className = 'hpButton'>+1</div>
                <div onClick={() => this.minusHp(1)} className ='hpButton'>-1</div>
                <div onClick={() => this.addHp(5)} className = 'hpButton'>+5</div>
                <div onClick={() => this.minusHp(5)} className ='hpButton'>-5</div>
                <div onClick={() => this.minusHp(10)} className = 'hpButton'>-10</div>
                <div onClick={() => this.resetHp()} className ='hpButton'>RESET</div>
            </div>}
        </div>
    
    
        
    
    
    
    
    
    
    
    return (
      <div>
        {hpblock}
        <div className='displayStatBlock'>
        <DisplayStat
          color='rgb(31, 56, 80)'
          animation={this.props.animation}
          text = 'AC: '
          value = {this.props.character.otherstats.armorClass}/>
        <DisplayStat
          color='rgb(31, 56, 80)'
          animation={this.props.animation}
          text = 'INIT:'
          value = {'+' + Math.floor((this.props.character.stats.dex-10)/2)}/>
        <DisplayStat
          color='rgb(31, 56, 80)'
          animation={this.props.animation}
          text = 'SPD: '
          value = {this.props.character.otherstats.speed}/>
        <DisplayStat
          color='rgb(31, 56, 80)'
          animation={this.props.animation}
          text = 'SAVE: '
          value = {8+this.props.character.otherstats.profBonus + Math.floor((this.props.character.stats.cha-10)/2)}/>
        <DisplayImage animation={this.props.animation}/>
        
        <SpellSlots />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    character: state.sheet.character,
    animation: state.sheet.animation
  });

export default connect(mapStateToProps, { editElement, changeImage })(Stats);