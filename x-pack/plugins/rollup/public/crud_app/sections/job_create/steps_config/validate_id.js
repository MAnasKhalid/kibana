/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';
import { FormattedMessage } from '@kbn/i18n/react';

export function validateId(id) {
  if (!id || !id.trim()) {
    return [(
      <FormattedMessage
        id="xpack.rollupJobs.create.errors.idMissing"
        defaultMessage="Name is required."
      />
    )];
  }

  return undefined;
}