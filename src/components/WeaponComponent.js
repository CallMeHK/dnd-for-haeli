import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editElement } from '../actions/Actions';

class WeaponComponent extends Component {
  render() {

    let weapons = this.props.character.weapons;
//     let featType = this.props.type;
//     const filteredFeats = feats.filter(function(feat) 
//     { 
//     return (feat.type === featType)
//     }
//   );
  const weaponblock = weapons.map((elt,i) => 
    <div
    id = {elt.name}
    className = 'featElement'
    key = {elt.name}
    >
    <div><strong>{elt.name}</strong></div>
    <div>To hit: +{this.props.character.otherstats.profBonus + 
        Math.floor((this.props.character.stats[elt.attribute]-10)/2)}</div>
    <div>Damage: {elt.damageDie}+{Math.floor((this.props.character.stats[elt.attribute]-10)/2)}</div>
    <div>{elt.effect}</div>

    </div>
);
    return (
      <div className = 'mainComponent'>
          <div className = 'compTitle'>
            WEAPONS
          </div>
          {weaponblock}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    character: state.sheet.character
  });

export default connect(mapStateToProps, { editElement })(WeaponComponent);