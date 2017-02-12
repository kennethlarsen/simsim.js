'use strict'; // eslint-disable-line

module.exports = {
  collectItem(player, item) {
    return player.inventory.push(item);
  },
};
