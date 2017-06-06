import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

const propTypes = forbidExtraProps({
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
});

export const defaultProps = {
  onChange: () => {},
  placeholder: '',
};


export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
  }

  /**
   *
   *
   * @param {any} nextProps
   *
   * @memberof SearchBox
   */
  componentWillReceiveProps() {
  }

  /**
   *
   *
   * @param {any} nextProps
   * @param {any} nextState
   *
   * @memberof SearchBox
   */
  // shouldComponentUpdate() {
  // }

  /**
   *
   *
   * @param {any} prevProps
   * @param {any} prevState
   *
   * @memberof SearchBox
   */
  componentDidUpdate() {
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
    this.props.onChange(event);
  }

  render() {
    return (
      <div>


        <Form inline>
          <span>定位</span>
          {' '}
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder={this.props.placeholder}
              onChange={this.handleChange}
            />
          </FormGroup>
          {' '}
          <Button type="submit">
            搜索
          </Button>
        </Form>
      </div>
    );
  }
}

SearchBox.propTypes = propTypes;
SearchBox.defaultProps = defaultProps;