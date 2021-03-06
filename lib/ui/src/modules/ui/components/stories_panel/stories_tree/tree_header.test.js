import React from 'react';
import { mount } from 'enzyme';
import TreeHeader from './tree_header';

describe('manager.ui.components.stories_panel.stories_tree.tree_header', () => {
  test('should render tree header content', () => {
    const content = 'abcd';
    const wrap = mount(<TreeHeader>{content}</TreeHeader>);

    expect(wrap.text()).toEqual(content);
  });
});
