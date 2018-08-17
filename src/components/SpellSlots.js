import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editElement } from '../actions/Actions';
import SpellSlotComponent from './SpellSlotComponent';

class SpellSlots extends Component {
  render() {

    const spellslotsblock = this.props.character.spellSlots.map((elt,i)=>
    <div key={i}>
      <SpellSlotComponent
        type={elt.type} 
        level={elt.level} 
        refresh={elt.refresh}
        available={elt.available}
        index={i}
      />
    </div>
  )
    return (
      <div className='spellSlots'>
        {spellslotsblock}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    character: state.sheet.character
  });

export default connect(mapStateToProps, { editElement })(SpellSlots);