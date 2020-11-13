/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import BXModalHeading from 'carbon-web-components/es/components/modal/modal-heading.js';
import styles from './expressive-modal.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Expressive modal heading.
 *
 * @element dds-expressive-modal-heading
 */
@customElement(`${ddsPrefix}-expressive-modal-heading`)
class DDSExpressiveModalHeading extends BXModalHeading {
  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSExpressiveModalHeading;