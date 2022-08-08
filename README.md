## Components-library-MUI

This is a components library built on material UI.

The goal is to extend all the features for a component and make sensible overrides and customizations to make it different and unique.

## Usage

```js
import { ThemeProvider, Button } from 'components-library-mui';
```

```js
<ThemeProvider
  primaryColor={'#ff0000'}
  secondaryColor={'#0000ff'}
  tertiaryColor={'#fff'}
  neutralColor={'#fff'}
  font = {
    name: "'Montserrat', sans-serif",
    title: 'Montserrat',
    link: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
  }
>
  <Button> Primary button </Button>
</ThemeProvider>
```

Components documentation coming soon.
