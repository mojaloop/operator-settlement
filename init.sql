/*
 * (C)2018 ModusBox Inc.
 * =====================
 * Project: Casablanca
 * Original Author: Matt Kingston
 * Description: This script creates database entities required by the scheduled window closure
 */

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
