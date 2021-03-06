/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { select, text, boolean } from '@storybook/addon-knobs';
import ContentBlockSimple from '../ContentBlockSimple';
import { LinkList } from '../../../components/LinkList';
import React from 'react';
import readme from '../README.stories.mdx';

const ctaStyles = {
  text: 'text',
  card: 'card',
};

const ctaTypes = {
  local: 'local',
  jump: 'jump',
  external: 'external',
};

const image = {
  heading: 'Mauris iaculis eget dolor nec hendrerit.',
  image: {
    sources: [
      {
        src:
          'https://fpoimg.com/672x672?text=16:9&bg_color=ee5396&text_color=161616',
        breakpoint: 320,
      },
      {
        src:
          'https://fpoimg.com/400x225?text=16:9&bg_color=ee5396&text_color=161616',
        breakpoint: 400,
      },
      {
        src:
          'https://fpoimg.com/672x378?text=16:9&bg_color=ee5396&text_color=161616',
        breakpoint: 672,
      },
    ],
    alt: 'Image alt text',
    defaultSrc:
      'https://fpoimg.com/672x378?text=16:9&bg_color=ee5396&text_color=161616',
  },
};

const video = {
  videoId: '1_9h94wo6b',
  showCaption: true,
};

const copy = `Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est.
  Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales
  nulla quis, *consequat* libero. Here are
  some common categories:

  Lorem ipsum dolor sit amet, [consectetur adipiscing](https://www.ibm.com) elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.

  - [list item](https://www.ibm.com)
    1. list item 1a
  1. list item 2
    - list item 2a
`;

/**
 * @param {object} options The options.
 * @param {string} options.groupId The knob group ID.
 * @returns {object} The knobs data.
 */
const getBaseKnobs = ({ groupId }) => {
  return {
    copy,
    heading: text(
      'Heading (required)',
      'Curabitur malesuada varius mi eu posuere',
      groupId
    ),
    cta: {
      cta: {
        href: 'https://www.ibm.com',
      },
      style: select('CTA style', ctaStyles, ctaStyles.card, groupId),
      type: select('CTA type', ctaTypes, ctaTypes.local, groupId),
      copy: 'Lorem ipsum dolor sit ametttt',
    },
  };
};

export default {
  title: 'Components|ContentBlockSimple',

  parameters: {
    ...readme.parameters,
  },
};

export const Default = ({ parameters }) => {
  const { copy, heading, cta } = parameters?.props?.ContentBlockSimple ?? {};
  return (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-sm-4 bx--col-lg-8 bx--offset-lg-4 content-block-story">
          <ContentBlockSimple copy={copy} heading={heading} cta={cta} />
        </div>
      </div>
    </div>
  );
};

Default.story = {
  parameters: {
    knobs: {
      ContentBlockSimple: ({ groupId }) => {
        const knobs = getBaseKnobs({ groupId });
        return {
          ...knobs,
        };
      },
    },
  },
};

export const WithImage = ({ parameters }) => {
  const { copy, heading, cta } = parameters?.props?.ContentBlockSimple ?? {};
  return (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-sm-4 bx--col-lg-8 bx--offset-lg-4 content-block-story">
          <ContentBlockSimple
            copy={copy}
            heading={heading}
            mediaType="image"
            mediaData={image}
            cta={cta}
          />
        </div>
      </div>
    </div>
  );
};

WithImage.story = {
  parameters: {
    knobs: {
      ContentBlockSimple: ({ groupId }) => {
        const knobs = getBaseKnobs({ groupId });
        return {
          ...knobs,
        };
      },
    },
  },
};

export const WithVideo = ({ parameters }) => {
  const { copy, heading, cta } = parameters?.props?.ContentBlockSimple ?? {};
  return (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-sm-4 bx--col-lg-8 bx--offset-lg-4 content-block-story">
          <ContentBlockSimple
            copy={copy}
            heading={heading}
            mediaType="video"
            mediaData={video}
            cta={cta}
          />
        </div>
      </div>
    </div>
  );
};

WithVideo.story = {
  parameters: {
    percy: {
      skip: true,
    },
    knobs: {
      ContentBlockSimple: ({ groupId }) => {
        const knobs = getBaseKnobs({ groupId });
        return {
          ...knobs,
        };
      },
    },
  },
};

export const WithAsideElements = ({ parameters }) => {
  const { copy, heading, cta, aside } =
    parameters?.props?.ContentBlockSimple ?? {};
  return (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-sm-4 bx--col-lg-12 bx--offset-lg-4 content-block-story">
          <ContentBlockSimple
            copy={copy}
            heading={heading}
            mediaType="image"
            mediaData={image}
            cta={cta}
            aside={aside}
          />
        </div>
      </div>
    </div>
  );
};

WithAsideElements.story = {
  name: 'With aside elements',
  parameters: {
    knobs: {
      ContentBlockSimple: ({ groupId }) => {
        const linkListProps = {
          heading: text('Link list heading (heading):', 'Tutorials', groupId),
          items: [
            {
              type: 'local',
              copy: 'Containerization A Complete Guide',
              cta: {
                href: 'https://ibm.com',
              },
            },
            {
              type: 'external',
              copy: 'Why should you use microservices and containers',
              cta: {
                href: 'https://ibm.com',
              },
            },
          ],
        };
        const knobs = getBaseKnobs({ groupId });
        return {
          ...knobs,
          aside: {
            items: <LinkList style="card" {...linkListProps} />,
            border: boolean('border', false, groupId),
          },
        };
      },
    },
  },
};
