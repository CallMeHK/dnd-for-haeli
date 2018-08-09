import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editElement } from '../actions/Actions';
import StatComponent from './StatComponent';
import WeaponComponent from './WeaponComponent';


class Stats extends Component {
    constructor(props) {
        super(props);
  
        // this.state = {};
        this.addHp = this.addHp.bind(this);
        this.minusHp = this.minusHp.bind(this);
        this.showInput = this.showInput.bind(this);
      }
      addHp(){

      }
      minusHp(){

      }
      showInput(){

      }
    render() {
    let hpmax = this.props.character.otherstats.hpMax;
  let hpcurrent = this.props.character.otherstats.hpCurrent;
  let background = this.props.character.otherstats.background;
  let name = this.props.character.otherstats.name;
  let level = this.props.character.otherstats.level;
  let character = this.props.character;
  let otherstats = character.otherstats;
        const hpblock = 
        <div>
        <div onClick={this.addHp} className = 'hpButton'>PLUS</div>
        <div onClick={this.minusHp} className ='hpButton'>MINUS</div>
        <div onClick={this.showInput} className='hpBarContainer'>
           <div className='hpBar'>{this.props.character.otherstats.hpCurrent}/{hpmax}</div>
        </div>
         
        </div>
    return (
      <div className = 'characterComponent'>
        {hpblock}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    character: state.sheet.character
  });

export default connect(mapStateToProps, { editElement })(Stats);