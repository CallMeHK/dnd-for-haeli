import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editElement } from '../actions/Actions';
import SpellComponent from './SpellComponent';

class Spells extends Component {
  render() {
    return (
      <div>
        <SpellComponent type = 'spells' name = 'Class spells'/>
        <SpellComponent type = 'featSpells' name = 'Feat spells'/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    character: state.sheet.character
  });

export default connect(mapStateToProps, { editElement })(Spells);