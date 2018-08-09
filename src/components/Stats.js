import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editElement } from '../actions/Actions';
import StatComponent from './StatComponent';
import WeaponComponent from './WeaponComponent';


class Stats extends Component {
  render() {
    return (
      <div className = 'mainComponent'>
        
        <div className = 'compTitle'>
          STATS  
        </div>

        <StatComponent 
        category = 'str'
        />
        <StatComponent 
        category = 'dex'
        />
        <StatComponent 
        category = 'con'
        />
        <StatComponent 
        category = 'int'
        />
        <StatComponent 
        category = 'wis'
        />
        <StatComponent 
        category = 'cha'
        />

        <WeaponComponent />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    character: state.sheet.character
  });

export default connect(mapStateToProps, { editElement })(Stats);