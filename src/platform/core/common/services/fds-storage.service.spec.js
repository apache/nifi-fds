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

var FdsStorageService = require('@fluid-design-system/common/storage-service');

describe('FdsStorageService isolated unit tests', function () {
    var fdsStorage;

    beforeEach(function () {
        fdsStorage = new FdsStorageService();
    });

    it('should set, retrieve, and remove an item from local storage.', function () {
        fdsStorage.init();

        var jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';
        var expiration;
        var item;

        if (!fdsStorage.hasItem('jwt')) {
            fdsStorage.setItem('jwt', jwt);
            item = fdsStorage.getItem('jwt');

            //assertions
            expect(item).toBe('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ');

            var payload = fdsStorage.getItemExpiration('jwt');

            fdsStorage.removeItem('jwt');
            item = fdsStorage.getItem('jwt');

            //assertions
            expect(item).toBe(null);
        }
    });

    it('should get jet payload.', function () {

        var jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';

        var payload = fdsStorage.getJwtPayload(jwt);

        //assertions
        expect(payload).toBeDefined();
        expect(payload.sub).toBe('1234567890');
    });
});
