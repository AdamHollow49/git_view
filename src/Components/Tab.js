import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Tab Component found at: https://codesandbox.io/s/7mjxpo9k7x
// Used in project to allow orgs and repos to be separated by Tabs.

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const { 
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'tab-list-item btn btn-dark';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <li 
        className={className}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }
}


export default Tab;