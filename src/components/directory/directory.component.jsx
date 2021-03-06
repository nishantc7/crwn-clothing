import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import {selectDirectorySections} from '../../redux/directory/directory.selector'
import {createStructuredSelector} from 'reselect'
import './directory.styles.scss';

import {connect} from 'react-redux';
const Directory = ({sections}) => (
      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );

const mapStateToProps = state => createStructuredSelector({
  sections: selectDirectorySections
  
})

export default connect(mapStateToProps)(Directory);