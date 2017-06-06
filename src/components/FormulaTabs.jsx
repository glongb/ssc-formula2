/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Tabs, Tab } from 'react-bootstrap';

import DanJuZiDuan from './DanJuZiDuan';
import 固定值Tab from './固定值Tab';
import 档案转换Tab from './档案转换Tab';
import treeDataShape from '../shapes/treeDataShape';

const propTypes = forbidExtraProps({
  /**
   * 单据字段标签页中的树的数据
   */
  danJuZiDuanTreeData: treeDataShape.isRequired,
  /**
   * 档案转换标签页中的树的数据
   */
  档案转换TreeData: treeDataShape.isRequired,
});

export const defaultProps = {
};


export default class FormulaTabs extends React.Component {
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
   * @memberof FormulaTabs
   */
  componentWillReceiveProps() {
  }

  /**
   *
   *
   * @param {any} nextProps
   * @param {any} nextState
   *
   * @memberof FormulaTabs
   */
  // shouldComponentUpdate() {
  // }

  /**
   *
   *
   * @param {any} prevProps
   * @param {any} prevState
   *
   * @memberof FormulaTabs
   */
  componentDidUpdate() {
  }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey={'单据字段'} id="ssc-formula2">
          {/* <Tab eventKey={'函数'} title="函数">Tab 1 content</Tab>*/}
          <Tab eventKey={'单据字段'} title="单据字段">
            <DanJuZiDuan
              treeData={this.props.danJuZiDuanTreeData}
            />
          </Tab>
          <Tab eventKey={'固定值'} title="固定值">
            <固定值Tab />
          </Tab>
          <Tab eventKey={'档案转换'} title="档案转换">
            <档案转换Tab
              treeData={this.props.档案转换TreeData}
            />
          </Tab>
          {/* <Tab eventKey={'环境变量'} title="环境变量">Tab 3 content</Tab>*/}
        </Tabs>
      </div>
    );
  }
}

FormulaTabs.propTypes = propTypes;
FormulaTabs.defaultProps = defaultProps;
