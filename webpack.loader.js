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
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cacheCoverageDir = '.cache-loader-coverage';

module.exports = {
    ts: {
        test: /\.tsx?$/,
        include: [
            path.resolve(__dirname, 'webapp'),
            path.resolve(__dirname, 'platform')
        ],
        use: [
            {
                loader: 'cache-loader'
            },
            {
                loader: path.resolve(__dirname, 'angular-url-loader')
            },
            {
                loader: 'ts-loader'
            }
        ]
    },

    tsCoverage: {
        test: /\.tsx?$/,
        include: [
            path.resolve(__dirname, 'webapp'),
            path.resolve(__dirname, 'platform')
        ],
        // prevent these files/patterns from being included in the coverage report
        exclude: [
            /\.spec\.tsx?$/
        ],
        use: [
            {
                loader: 'cache-loader'
            },
            {
                loader: path.resolve(__dirname, 'angular-url-loader')
            },
            {
                // Instrument TS files with istanbul-lib-instrument for subsequent code coverage reporting
                loader: 'istanbul-instrumenter-loader',
                options: { esModules: true }
            },
            {
                loader: 'ts-loader'
            }
        ]
    },

    js: {
        test: /\.js$/,
        include: [
            path.resolve(__dirname, 'webapp'),
            path.resolve(__dirname, 'platform')
        ],
        use: [
            {
                loader: 'cache-loader',
                options: {
                    cacheDirectory: cacheCoverageDir
                }
            },
            {
                loader: path.resolve(__dirname, 'angular-url-loader')
            },
            {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },

    jsCoverage: {
        test: /\.js$/,
        include: [
            path.resolve(__dirname, 'webapp'),
            path.resolve(__dirname, 'platform')
        ],
        enforce: 'post',
        // prevent these files/patterns from being included in the coverage report
        exclude: [
            /\.spec\.js$/,
            path.resolve(__dirname, 'platform/core/core.testbed-factory.js')
        ],
        use: [
            {
                loader: 'cache-loader',
                options: {
                    cacheDirectory: cacheCoverageDir
                }
            },
            {
                loader: path.resolve(__dirname, 'angular-url-loader')
            },
            {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['babel-plugin-istanbul']
                }
            }
        ]
    },

    html: {
        test: /\.(html)$/,
        use: ['cache-loader', 'html-loader']
    },

    scss: {
        test: /\.scss$/,
        use: [
            {
                // Create CSS files separately
                loader: MiniCssExtractPlugin.loader
            },
            {
                // Translate CSS into CommonJS
                loader: 'css-loader',
                options: {
                    url: false
                }
            },
            {
                // Compile Sass to CSS
                loader: 'sass-loader',
                options: {
                    // Prefer `dart-sass`
                    implementation: require("sass"),
                },
            }
        ]
    },
    ignoreScss: {
        test: /\.scss$/,
        use: 'null-loader'
    }
};
