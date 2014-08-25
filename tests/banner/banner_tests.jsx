/** @jsx React.DOM */

'use strict';

var ReactTestUtils;

describe('Banner test', function(){
  beforeEach(function(){
    ReactTestUtils = React.addons.TestUtils;
  });

  it('Check text assignment', function(){
    var banner = <Banner />;
    debugger;
    ReactTestUtils.renderIntoDocument(banner);
    //expect(banner.refs.header).toBeDefined();
    expect(banner.props.text).toEqual("test");
  });
});
