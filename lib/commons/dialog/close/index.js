'use strict';

import Classlist from 'classlist';
import { show } from '../aria';

const debug = require('debug')('dqpl:commons:close');

module.exports = (el) => {
  const trigger = document.querySelector(`[data-dialog-id="${el.id}"]`);

  Classlist(el).remove('dqpl-dialog-show');
  Classlist(document.body).remove('dqpl-open');

  show();

  if (trigger) {
    trigger.focus();
  } else {
    debug('Unable to find trigger for el: ', el);
  }
};