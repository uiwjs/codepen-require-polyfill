[![](https://data.jsdelivr.com/v1/package/npm/@uiw/codepen-require-polyfill/badge)](https://www.jsdelivr.com/package/npm/@uiw/codepen-require-polyfill)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue?label=@uiw/codepen-require-polyfill)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/codepen-require-polyfill/file/README.md)

```bash
# unpkg cdn
https://unpkg.com/@uiw/codepen-require-polyfill/index.js
# jsdelivr cdn
https://cdn.jsdelivr.net/npm/@uiw/codepen-require-polyfill/index.js
```

- Codepen Example: https://codepen.io/jaywcjlove/pen/wvzPgqm?editors=0010
- UNPKG: https://unpkg.com/browse/@uiw/codepen-require-polyfill/
- jsDelivr: https://cdn.jsdelivr.net/npm/@uiw/codepen-require-polyfill/


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://unpkg.com/@babel/standalone@7.17.x/babel.min.js" crossorigin></script>
    <script src="https://unpkg.com/react@16.x/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16.x/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@uiw/codepen-require-polyfill/index.js"></script>
    <script src="https://unpkg.com/uiw@4.x/dist/uiw.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/uiw@4.x/dist/uiw.min.css">
  </head>
  <body>
    <div id="container" style="padding: 24px"></div>
    <script type="text/babel">
      import { Button } from 'uiw';

      const Demo = () => {
        return (
          <div>
            <Button type="primary">主要按钮</Button>
            <Button type="success">成功按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">错误按钮</Button>
            <Button type="light">亮按钮</Button>
            <Button type="dark">暗按钮</Button>
          </div>
        );
      };

      ReactDOM.render(<Demo />, document.getElementById('container'));
    </script>
  </body>
</html>
```

## License

Licensed under the MIT License.
