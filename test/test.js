'use strict';

const expect = require('chai').expect;
const simsim = require('../index');

describe('simsim', function () {
  it('should add a hammer to the inventory', function () {
    let player = {
      inventory: []
    }

    let hammer = {
      name: 'hammer',
      effect: function(target) {
        console.log('whacked the ' + target.name);
      }
    }
    const result = simsim.collectItem(player, hammer);
    expect(player.inventory[0].name).to.equal('hammer');
  });
});
