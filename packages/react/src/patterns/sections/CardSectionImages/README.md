# CardSectionImages

> The CardSection Images pattern is to be utilized within IBM.com.

## Getting started

Here's a quick example to get you started.

```scss
// yourapplication.scss
@import '@carbon/type/scss/font-face/mono';
@import '@carbon/type/scss/font-face/sans';
@include carbon--font-face-mono();
@include carbon--font-face-sans();

@import '@carbon/ibmdotcom-styles/scss/patterns/sections/card-section/index';
```

> 💡 Only import fonts once per usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { CardSectionImages } from '@carbon/ibmdotcom-react';
import 'yourapplication.scss';

function App() {
  return <CardSectionImages cards={cards} heading="Read more about it" />;
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

> 💡 Don't forget to import the card-section styles from
> [@carbon/ibmdotcom-styles](https://github.com/carbon-design-system/ibm-dotcom-library/blob/master/packages/styles).

## Props

| Name      | Required | Data Type | Default Value | Description                                                                                                                                                                   |
| --------- | -------- | --------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `heading` | YES      | String    | null          | Cards with or without images heading.                                                                                                                                         |
| `cards`   | YES      | Array     | null          | Array of card objects. See [CardSection](https://github.com/carbon-design-system/ibm-dotcom-library/tree/master/packages/react/src/patterns/sections/CardSection/README.md)👀 |

### theme (optional)

| Name    | Description                |
| ------- | -------------------------- |
| `white` | Carbon white theme         |
| `g10`   | Carbon Gray 10 (g10) theme |

### cardType

| Name                | Description                                                                            |
| ------------------- | -------------------------------------------------------------------------------------- |
| `CardSectionImages` | Array of objects with image object, eyebrow, heading and link properties of each card. |

## 🙌 Contributing

We're always looking for contributors to help us fix bugs, build new features,
or help us improve the project documentation. If you're interested, definitely
check out our
[Contributing Guide](https://github.com/carbon-design-system/ibm-dotcom-library/blob/master/.github/CONTRIBUTING.md)!
👀

## 📝 License

Licensed under the
[Apache 2.0 License](https://github.com/carbon-design-system/ibm-dotcom-library/blob/master/LICENSE).
