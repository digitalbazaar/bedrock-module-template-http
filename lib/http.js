/*!
 * Copyright (c) 2026 Digital Bazaar, Inc.
 */
import * as bedrock from '@bedrock/core';
import {asyncHandler} from '@bedrock/express';
import {namespace} from './config.js';
import {postExample} from '../schemas/bedrock-template.js';
import {createValidateMiddleware as validate} from '@bedrock/validation';

const {util: {BedrockError}} = bedrock;

bedrock.events.on('bedrock-express.configure.routes', app => {
  const {config} = bedrock;
  const {routes} = config[namespace];

  app.post(
    routes.basePath,
    validate({bodySchema: postExample()}),
    asyncHandler(async (/*req, res*/) => {
      throw new BedrockError(
        'Not implemented.', {
          name: 'NotFoundError',
          details: {httpStatusCode: 501, public: true}
        });
    })
  );
});
