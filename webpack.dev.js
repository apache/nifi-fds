/*
 * (c) 2018-2019 Cloudera, Inc. All rights reserved.
 *
 *  This code is provided to you pursuant to your written agreement with Cloudera, which may be the terms of the
 *  Affero General Public License version 3 (AGPLv3), or pursuant to a written agreement with a third party authorized
 *  to distribute this code.  If you do not have a written agreement with Cloudera or with an authorized and
 *  properly licensed third party, you do not have any rights to this code.
 *
 *  If this code is provided to you under the terms of the AGPLv3:
 *   (A) CLOUDERA PROVIDES THIS CODE TO YOU WITHOUT WARRANTIES OF ANY KIND;
 *   (B) CLOUDERA DISCLAIMS ANY AND ALL EXPRESS AND IMPLIED WARRANTIES WITH RESPECT TO THIS CODE, INCLUDING BUT NOT
 *       LIMITED TO IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE;
 *   (C) CLOUDERA IS NOT LIABLE TO YOU, AND WILL NOT DEFEND, INDEMNIFY, OR HOLD YOU HARMLESS FOR ANY CLAIMS ARISING
 *       FROM OR RELATED TO THE CODE; AND
 *   (D) WITH RESPECT TO YOUR EXERCISE OF ANY RIGHTS GRANTED TO YOU FOR THE CODE, CLOUDERA IS NOT LIABLE FOR ANY
 *       DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE OR CONSEQUENTIAL DAMAGES INCLUDING, BUT NOT LIMITED
 *       TO, DAMAGES RELATED TO LOST REVENUE, LOST PROFITS, LOSS OF INCOME, LOSS OF BUSINESS ADVANTAGE OR
 *       UNAVAILABILITY, OR LOSS OR CORRUPTION OF DATA.
 */

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const LicenseWebpackPlugin = require('license-webpack-plugin').LicenseWebpackPlugin;

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    // Tells webpack to use its built-in optimizations accordingly
    mode: 'development',

    // Source maps
    devtool: 'eval-source-map',

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

        // The filename that is considered the index file.
        index: path.join(__dirname, 'index.html'),

        // Specify a port number to listen for requests on
        port: 28080
    },

    plugins: [
        // Hot Module Replacement
        new webpack.HotModuleReplacementPlugin(),

        // Source map generation
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        }),

        // generate a file with all bundled packages licenses' in it. This can be used to add to the LICENSE file
        new LicenseWebpackPlugin({
            outputFilename: '../../target/thirdPartyLicenses.txt',
            unacceptableLicenseTest: (licenseType) => (licenseType === 'GPL' || licenseType === 'AGPL' || licenseType === 'LGPL' || licenseType === 'NGPL'),
            renderLicenses: (modules) => {
                const licTextArray = modules.map((lic) => {
                    if (lic.licenseText && lic.licenseId) {
                        const license = lic.licenseText.replace(/\n/gm, '\n\t');
                        const licText =`This product bundles '${lic.packageJson.name}' which is available under a(n) ${lic.licenseId} license.\n\n\t${license}`;

                        return licText;
                    } else {
                        console.log('\n**********************\n');
                        console.log(lic.packageJson);
                        if (lic.packageJson.license) {
                            const missingLicenseText = `*** No license text found ***\n`
                            const licText =`This product bundles '${lic.packageJson.name}' which is available under a(n) ${lic.packageJson.license} license.\n\t${missingLicenseText}`;

                            return licText
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
