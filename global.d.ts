/// <reference types="@astral/ui/declarations" />

declare module '*.woff' {
  const src: string;

  export default src;
}

declare module '*.woff2' {
  const src: string;

  export default src;
}

declare module '*.png' {
  const content: string;
  export default content;
}
declare module '*.jpg' {
  const content: string;
  export default content;
}
declare module '*.jpeg' {
  const content: string;
  export default content;
}
declare module '*.webp' {
  const content: string;
  export default content;
}
declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;

  const src: string;

  export default src;
}
