/*!
 * Copyright (c) 2025 Digital Bazaar, Inc. All rights reserved.
 */
import * as bedrock from '@bedrock/core';
import {asyncHandler} from '@bedrock/express';
import {createValidateMiddleware as validate} from '@bedrock/validation';
import {example} from '../schemas/bedrock-template.js'

const {util: {BedrockError}} = bedrock;

bedrock.events.on('bedrock-express.configure.routes', app => {
  const {config} = bedrock;
  const {routes} = config[namespace];

  app.post(
    routes.basePath,
    validate({bodySchema: example}), 
    asyncHandler(async (/*req, res*/) => {
      throw new BedrockError(
        'Not implemented.', {
          name: 'NotFoundError',
          details: {httpStatusCode: 501, public: true}
        });
    })
  );
});
