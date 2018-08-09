import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editElement, changeFilter } from '../actions/Actions';
import Stats from './Stats';
import Spells from './Spells';
import Feats from './Feats';
import Character from './Character';


class Main extends Component {
  
  render() {
    return (
      <div>
        <div className='header'>
          <Character />

        </div>

          <div className = 'headerButtons'>
            <div className = 'catButton' onClick={() => this.props.changeFilter('stats')}>STATS</div>
            <div className = 'catButton' onClick={() => this.props.changeFilter('feats')}>FEATS</div>
            <div className = 'catButton' onClick={() => this.props.changeFilter('spells')}>SPELLS</div>
          </div>

        {this.props.show === 'stats' &&
        <Stats />}
       
        {this.props.show === 'feats' &&
        <Feats />}
       
        {this.props.show === 'spells' &&
        <Spells />}
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
    character: state.sheet.character,
    show: state.sheet.show
  });

export default connect(mapStateToProps, { editElement, changeFilter })(Main);