import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';

const propTypes = forbidExtraProps({
  text: PropTypes.string,
});

export const defaultProps = {
  text: '',
};

export default class DetailBox extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
  }

  /**
   *
   *
   * @param {any} nextProps
   *
   * @memberof DetailBox
   */
  componentWillReceiveProps() {
  }

  /**
   *
   *
   * @param {any} nextProps
   * @param {any} nextState
   *
   * @memberof DetailBox
   */
  // shouldComponentUpdate() {
  // }

  /**
   *
   *
   * @param {any} prevProps
   * @param {any} prevState
   *
   * @memberof DetailBox
   */
  componentDidUpdate() {
  }

  render() {
    return (
      <div>
        <hr />
        <p>{this.props.text}</p>
      </div>
    );
  }
}

DetailBox.propTypes = propTypes;
DetailBox.defaultProps = defaultProps;