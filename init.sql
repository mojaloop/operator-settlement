/*****
 License
 --------------
 Copyright © 2020-2025 Mojaloop Foundation
 The Mojaloop files are made available by the Mojaloop Foundation under the Apache License, Version 2.0 (the "License") and you may not use these files except in compliance with the License. You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, the Mojaloop files are distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

 Contributors
 --------------
 This is the official list of the Mojaloop project contributors for this file.
 Names of the original copyright holders (individuals or organizations)
 should be listed with a '*' in the first column. People who have
 contributed from an organization can be listed under the organization
 that actually holds the copyright for their contributions (see the
 Mojaloop Foundation for an example). Those individuals should have
 their names indented and be marked with a '-'. Email address can be added
 optionally within square brackets <email>.

 * Mojaloop Foundation
 - Name Surname <name.surname@mojaloop.io>

*
* * Matt Kingston <matt.kingston@modusbox.com>
*
* Description
* --------------
* This script creates database entities required by the scheduled window closure
*****/

CREATE TABLE IF NOT EXISTS settlementFile (
    `settlementFileId` bigint(20) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Surrogate PK',
    `settlementId` bigint(20) unsigned NOT NULL COMMENT 'Settlement to which this file corresponds',
    `createdDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Datetime at which this file was created',
    `sentDate` datetime COMMENT 'Datetime at which this file was sent to the settlement bank',
    -- Default size of TEXT is 64kb. This should be enough. Additionally, TEXT should be stored on
    -- disk for larger values. This is favourable- there's no point in storing it in memory due to
    -- very infrequent access patterns.
    `settlementFile` TEXT NOT NULL COMMENT 'Contains (hopefully small) XML settlement files in CITI-restricted urn:iso:std:iso:20022:tech:xsd:pain.001.001.03 format',
    `source` TEXT NULL COMMENT 'Contains simplified JSON representation of the paymentFile',
    `state` TEXT NULL COMMENT 'Contains simplified JSON representation of the paymentFile that remains to be processed, initially it will same as "source" and after being processed fully it will be null',
    CONSTRAINT `settlementfile_settlementid_foreign` FOREIGN KEY (`settlementId`) REFERENCES `settlement` (`settlementid`)
);
