/*
 * Copyright (c) 2026 Digital Bazaar, Inc.
 */
import {config} from '@bedrock/core';
import path from 'node:path';

config.mocha.tests.push(path.join(import.meta.dirname, 'mocha'));

// allow self-signed certs in test framework
config['https-agent'].rejectUnauthorized = false;
