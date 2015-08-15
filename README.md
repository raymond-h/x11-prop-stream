# x11-prop-stream
Read X window props via streaming

For use with [`node-x11`](https://github.com/sidorares/node-x11), though theoretically compatible with whatever exposes an `X.GetProperty` method that can be used the exact same way as the one in `node-x11`.

## Installing
`npm install x11-prop-stream`

## Example usage
```js
var x11 = require('x11');
var x11PropStream = require('x11-prop-stream');

// assuming 'windowId' is the ID of a currently open window.
var windowId = /* ... */;

x11.createClient(function(err, display) {
    var X = display.client;

    var opts = {}; // optional, passed straight to stream.Readable

    // aside from 'opts', the parameters are
    // the same as passed to 'X.GetProperty'
    var stream = new x11PropStream.Readable(
        X, windowId, X.atoms.WM_NAME, X.atoms.STRING, opts
    );

    stream.pipe(process.stdout);
});
```

## License
The MIT License (MIT)

Copyright (c) 2015 Raymond Hammarling

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
