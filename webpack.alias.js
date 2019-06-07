/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const path = require('path');

module.exports = {
    // Application
    'webapp/fds.module.js': path.resolve(__dirname, 'webapp/fds.module.js'),
    'webapp/fds.routes.js': path.resolve(__dirname, 'webapp/fds.routes.js'),
    'webapp/fds.js': path.resolve(__dirname, 'webapp/fds.js'),

    'webapp/services/fds.service.js': path.resolve(__dirname, 'webapp/services/fds.service.js'),

    'webapp/components/flow-design-system/fds-demo.js': path.resolve(__dirname, 'webapp/components/flow-design-system/fds-demo.js'),
    'webapp/components/flow-design-system/dialogs/demo/fds-demo-dialog.js': path.resolve(__dirname, 'webapp/components/flow-design-system/dialogs/demo/fds-demo-dialog.js'),

    // create an alias for the demo app to use that simulates how real consumers would use it
    '@nifi-fds/core': path.resolve(__dirname, 'platform/core'),

    // SCSS
    'platform/core': path.resolve(__dirname, 'platform/core')
};
