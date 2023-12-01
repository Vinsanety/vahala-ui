---
description: A ThemeProvider component.
labels: ['vahala-ui', 'Theme Provider']
---

import { ThemeProvider } from '@vahalawebdesign/vahala-ui.themes.theme-provider';
import { Button } from '@vahalawebdesign/vahala-ui.button';

The `<ThemeProvider />` component is a wrapper to be applied to components or entire apps and extends the [MUI ThemeProvider](https://mui.com/material-ui/customization/theming/) and utilizes `createTheme`.

By default vahala-ui sets a `defaultTheme`. Themes are overridable via the `theme` prop.

> When overriding the `defaultTheme`, you must import `createTheme` from `@mui/material` and declare the createTheme object.

### Component usage

```js
<ThemeProvider>
  <ChildComponent></ChildComponent>
</ThemeProvider>
```

### Render theme

```js live
<ThemeProvider>
  <Button>Themed Button</Button>
</ThemeProvider>
```
