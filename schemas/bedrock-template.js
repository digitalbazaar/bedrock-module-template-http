/*!
 * Copyright (c) 2026 Digital Bazaar, Inc.
 */
import {schemas} from '@bedrock/validation';

export function postExample() {
  return {
    title: 'Post Example',
    type: 'object',
    required: ['id'],
    additionalProperties: false,
    properties: {
      id: schemas.identifier()
    }
  };
}
