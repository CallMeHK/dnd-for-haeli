import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editElement } from '../actions/Actions';
import statcats from '../data/stat-cats';

class StatComponent extends Component {
  constructor(props) {
    super(props);
        this.state = {
           rerender:false
        };
        this.addPlusSign = this.addPlusSign.bind(this);
    }
  addPlusSign(elt){
        if(elt>0){
          let newString =  '+' + elt.toString();
          return newString;
        } else {
          return elt;
        }
      }
    render() {

    let modifier = Math.floor((this.props.character.stats[this.props.category]-10)/2);
    const statblock = statcats[this.props.category].map((elt,i) =>(
        <div
         id={elt}
         key={elt} 
         className='statElement'
         >
         {elt}: <span className='number'>{this.props.character.otherstats.proficiencies.includes(elt) ? 
          this.addPlusSign(modifier+this.props.character.otherstats.profBonus)
          : this.addPlusSign(modifier)}</span>
         </div>
      )
    );
    return (
      <div className = 'compBlock'>
        <h3>{this.props.category.toUpperCase()}: {this.props.character.stats[this.props.category]} ({this.addPlusSign(modifier)}) </h3>
        {statblock}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    character: state.sheet.character
  });

export default connect(mapStateToProps, { editElement })(StatComponent);