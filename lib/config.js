/*!
 * Copyright (c) 2026 Digital Bazaar, Inc.
 */
import * as bedrock from '@bedrock/core';
const {config} = bedrock;

export const namespace = 'module-template-http';
const cfg = config[namespace] = {};

cfg.routes = {
  basePath: '/foo'
};
