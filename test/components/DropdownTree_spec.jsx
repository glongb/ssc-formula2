import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import DropdownTree from '../../src/components/DropdownTree';
import treeData from '../../stories/单据字段Data';

describe('DropdownTree', () => {
  describe('#render', () => {
    it('is .dropdown-tree class', () => {
      const wrapper = shallow(
        <DropdownTree
          treeData={treeData}
          onSelect={() => {}}
        />,
      );
      expect(wrapper.is('.dropdown-tree')).to.equal(true);
    });
  });
});