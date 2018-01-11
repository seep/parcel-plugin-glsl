# parcel-plugin-glsl

Import `.glsl` files as strings with [parcel](https://github.com/parcel-bundler/parcel). The shader
contents are available as the default export of the file.

#### Example

```js
import { ShaderMaterial } from 'three';
import vertexShader from './vert-shader.glsl';
import fragmentShader from './frag-shader.glsl';

export function CustomShaderMaterial() {
  
  return new ShaderMaterial({
    uniforms: { ... },
    vertexShader,
    fragmentShader,
  });
  
}
```

