/**
 * @file datapos-engine-support/src/viewTemplate.ts
 * @license ISC Licensed under the ISC license, Version 2.0. See the LICENSE.md file for details.
 * @author Jonathan Terrell <terrell.jm@gmail.com>
 * @copyright 2023 Jonathan Terrell
 */

// Dependencies - Engine
import type { Component, ComponentConfig } from './component';

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// View Template
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export interface ViewTemplate extends Component {
    placeholder?: string;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// View Template - Config
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export interface ViewTemplateConfig extends ComponentConfig {
    placeholder?: string;
}
