/*!
 * Copyright (c) 2026 Digital Bazaar, Inc.
 */
import {schemas} from '@bedrock/validation';

export const example = {
  title: 'Example',
  type: 'object',
  required: ['id'],
  additionalProperties: false,
  properties: {
    id: schemas.identifier()
  }
};
