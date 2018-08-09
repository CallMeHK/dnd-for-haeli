import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editElement } from '../actions/Actions';
import FeatComponent from './FeatComponent';

class Feats extends Component {
  render() {
    return (
      <div>
        
        <FeatComponent type = 'racial' name = 'RACIAL FEATS'/>
        
        <FeatComponent type = 'other' name = 'OTHER FEATS'/>
        
        <FeatComponent type = 'class' name = 'CLASS FEATS'/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    character: state.sheet.character
  });

export default connect(mapStateToProps, { editElement })(Feats);