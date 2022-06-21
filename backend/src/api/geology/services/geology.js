'use strict';

/**
 * geology service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::geology.geology');
