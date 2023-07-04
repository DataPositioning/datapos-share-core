/**
 * @file datapos-engine-support/src/entity.ts
 * @license ISC Licensed under the ISC license, Version 2.0. See the LICENSE.md file for details.
 * @author Jonathan Terrell <terrell.jm@gmail.com>
 * @copyright 2023 Jonathan Terrell
 */

// Dependencies - Engine - Support
import type { Component, ComponentConfig } from './component';

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Entity
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export interface Entity extends Component {
    placeholder?: string;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Entity - Config
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export interface EntityConfig extends ComponentConfig {
    placeholder?: string;
}
