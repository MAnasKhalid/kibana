/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import moment from 'moment';
import { IBucketAggConfig } from '../_bucket_agg_type';
import { DateRangeKey } from '../date_range';
import { esFilters, RangeFilterParams } from '../../../../../../../../plugins/data/public';

export const createFilterDateRange = (agg: IBucketAggConfig, { from, to }: DateRangeKey) => {
  const filter: RangeFilterParams = {};
  if (from) filter.gte = moment(from).toISOString();
  if (to) filter.lt = moment(to).toISOString();
  if (to && from) filter.format = 'strict_date_optional_time';

  return esFilters.buildRangeFilter(agg.params.field, filter, agg.getIndexPattern());
};
