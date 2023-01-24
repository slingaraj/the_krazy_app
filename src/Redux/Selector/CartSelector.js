const {createSelector} = require('@reduxjs/toolkit');

const cartSelector = state => state.cart;

export const cartScreenData = createSelector([cartSelector], cart => cart);
