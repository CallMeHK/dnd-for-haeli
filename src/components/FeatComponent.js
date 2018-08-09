import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editElement } from '../actions/Actions';

class FeatComponent extends Component {
  render() {

    let feats = this.props.character.feats;
    let featType = this.props.type;

    const filteredFeats = feats.filter(function(feat) 
    { 
    return (feat.type === featType)
    }
  );
  const featblock = filteredFeats.map((elt,i) => 
    <div
    id = {elt.name}
    className = 'featElement'
    key = {elt.name}
    >
    <div><strong>{elt.name}</strong></div>
    <div>{elt.typeDisplay}</div>
    <div>{elt.description}</div>

    </div>
);
    return (
      <div className = 'mainComponent'>
          <div className = 'compTitle'>
            {this.props.name.toUpperCase()}
          </div>
          {featblock}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    character: state.sheet.character
  });

export default connect(mapStateToProps, { editElement })(FeatComponent);