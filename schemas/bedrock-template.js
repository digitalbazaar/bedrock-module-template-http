/*!
 * Copyright (c) 2025 Digital Bazaar, Inc. All rights reserved.
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
}