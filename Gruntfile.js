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

module.exports = function (grunt) {
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                outputStyle: 'compressed',
                sourceMap: true
            },
            minifyFds: {
                files: [{
                    './platform/core/common/styles/css/fluid-design-system.min.css': ['./platform/core/common/styles/fluid-design-system.scss']
                }]
            }
        },
        compress: {
            options: {
                mode: 'gzip'
            },
            fdsStyles: {
                files: [{
                    expand: true,
                    src: ['./platform/core/common/styles/css/fluid-design-system.min.css'],
                    dest: './',
                    ext: '.min.css.gz'
                }]
            }
        },
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: [],
                commit: true,
                commitMessage: 'Release FDS-%VERSION%',
                commitFiles: ['-a'],
                createTag: true,
                tagName: 'FDS-%VERSION%',
                tagMessage: 'Version FDS-%VERSION%',
                push: true,
                pushTo: 'origin',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                globalReplace: false,
                prereleaseName: 'RC',
                metadata: '',
                regExp: false
            }
        }
    });
    grunt.registerTask('compile-fds-styles', ['sass:minifyFds', 'compress:fdsStyles']);
};
