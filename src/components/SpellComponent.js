import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editElement } from '../actions/Actions';

class SpellComponent extends Component {
  render() {
    let spells = this.props.character[this.props.type];
    const spellblock = spells.map((elt,i) =>
      <div 
       id = {i}
       className = {'compBlock ' + elt.name}
       key = {elt.name}
       >
        <div> <strong>{elt.name}</strong> </div>
        <div>Spell Level: {elt.level}    Cast time: {elt.action}
            <a href = {elt.link} target = 'blank'>Link Here</a></div>
        <div> {elt.effect} </div>
       
       </div>

  );
    return (

        <div className = 'mainComponent'>
          <div className = 'compTitle'>
            {this.props.name.toUpperCase()}
          </div>
          {spellblock}
        </div>
    )
  }
}

const mapStateToProps = state => ({
    character: state.sheet.character
  });

export default connect(mapStateToProps, { editElement })(SpellComponent);