/*!
 * Copyright (c) 2025 Digital Bazaar, Inc. All rights reserved.
 */
import * as bedrock from '@bedrock/core';
const {config} = bedrock;

export const namespace = 'module-template-http';
const cfg = config[namespace] = {};

cfg.routes = {
  basePath: '/foo'
};
