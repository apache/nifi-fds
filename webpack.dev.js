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

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const LicenseWebpackPlugin = require('license-webpack-plugin').LicenseWebpackPlugin;

const commonConfig = require('./webpack.common');
const loaders = require('./webpack.loader');

module.exports = merge(commonConfig, {
    // Tells webpack to use its built-in optimizations accordingly
    mode: 'development',

    // Source maps
    devtool: 'inline-source-map',

    // "webpack-dev-server" configuration
    devServer: {
        // Open the browser after server had been started
        open: true,

        // The bundled files will be available in the browser under this path.
        publicPath: '/',

        // Tell the server where to serve content from
        contentBase: [
            path.join(__dirname, './')
        ],

        // Enable Hot Module Replacement feature
        hot: true,

        // Enable gzip compression for everything served
        compress: true,

        // The filename that is considered the index file.
        index: path.join(__dirname, 'index.html'),

        // Specify a port number to listen for requests on
        port: 28080
    },

    module: {
        rules: [
            loaders.ts,
            loaders.js,
        ]
    },

    plugins: [
        // Hot Module Replacement
        new webpack.HotModuleReplacementPlugin(),

        // generate a file with all bundled packages licenses' in it. This can be used to add to the LICENSE file
        new LicenseWebpackPlugin({
            outputFilename: './target/thirdPartyLicenses.txt',
            unacceptableLicenseTest: (licenseType) => (licenseType === 'GPL' || licenseType === 'AGPL' || licenseType === 'LGPL' || licenseType === 'NGPL'),
            renderLicenses: (modules) => {
                const licTextArray = modules.map((lic) => {
                    if (lic.licenseText && lic.licenseId) {
                        const license = lic.licenseText.replace(/\n/gm, '\n\t');
                        const licText = `This product bundles '${lic.packageJson.name}' which is available under a(n) ${lic.licenseId} license.\n\n\t${license}`;

                        return licText;
                    } else {
                        console.log('\n**********************\n');
                        console.log(lic.packageJson);
                        if (lic.packageJson.license) {
                            const missingLicenseText = `*** No license text found ***\n`;
                            const licText = `This product bundles '${lic.packageJson.name}' which is available under a(n) ${lic.packageJson.license} license.\n\t${missingLicenseText}`;

                            return licText;
                        } else {
                            return `\n\n!!! No license information found for ${lic.packageJson.name} !!!\n\n`;
                        }

                    }
                });

                return licTextArray.join('\n\n');
            }
        })
    ]
});
