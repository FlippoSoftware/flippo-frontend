import type { SVGProps } from 'react';
import * as React from 'react';

const FormatBold = (props: SVGProps<SVGSVGElement>) => <svg xmlns={ 'http://www.w3.org/2000/svg' } width={ 24 } height={ 24 } fill={ 'none' } viewBox={ '0 0 24 24' } { ...props }><path fill={ 'currentColor' } d={ 'M8.8 19q-.825 0-1.412-.587A1.93 1.93 0 0 1 6.8 17V7q0-.824.588-1.412A1.93 1.93 0 0 1 8.8 5h3.525q1.624 0 3 1T16.7 8.775q0 1.275-.575 1.963t-1.075.987q.626.275 1.388 1.025.764.75.762 2.25 0 2.225-1.625 3.113t-3.05.887zm1.025-2.8h2.6q1.2 0 1.463-.612t.262-.888-.262-.887-1.538-.613H9.825zm0-5.7h2.325q.825 0 1.2-.425a1.4 1.4 0 0 0 .375-.95q0-.6-.425-.975t-1.1-.375H9.825z' } /></svg>;
export default FormatBold;
