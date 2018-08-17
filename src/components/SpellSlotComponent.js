import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editElement, changeImage } from '../actions/Actions';

class SpellSlotComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
        available:true
    };


  }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    async animateElt(){
      this.setState({
        available:!this.state.available
      })
      // const runAnimation = this.props.character.spellSlots[this.props.index].available;
      this.props.editElement(['spellSlots',this.props.index,'available'],!this.props.character.spellSlots[this.props.index].available,'two-elt-index')
      
      if(this.state.available){
        this.props.changeImage('spell');
        await this.sleep(1400);
        this.props.changeImage('');
      }
      
    }
  render() {

    return (
      <div onClick = {this.animateElt.bind(this)}className='spellSlotComponent'>
        <div className='spellSlotType'>
          <div>{this.props.character.spellSlots[this.props.index].available ? 'Available' : 'Used'}</div>
          <div>{this.props.type}</div>
          <div>Spell Slot</div>
        </div>
        <div className='spellSlotLevel'>
          {this.props.level}
        </div>
        
        <div className={this.props.character.spellSlots[this.props.index].available ? 'spellBar' : 'spellBar spellUnavailable'}>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    character: state.sheet.character,
    animation: state.sheet.animation
  });

export default connect(mapStateToProps, { editElement, changeImage })(SpellSlotComponent);