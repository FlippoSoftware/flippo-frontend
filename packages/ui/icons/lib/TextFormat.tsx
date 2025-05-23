import type { SVGProps } from 'react';
import * as React from 'react';

const TextFormat = (props: SVGProps<SVGSVGElement>) => <svg xmlns={ 'http://www.w3.org/2000/svg' } width={ 24 } height={ 24 } fill={ 'none' } viewBox={ '0 0 24 24' } { ...props }><path fill={ 'currentColor' } d={ 'M6 19a.97.97 0 0 1-.712-.288A.97.97 0 0 1 5 18q0-.424.288-.712A.97.97 0 0 1 6 17h12q.425 0 .713.288T19 18q0 .424-.288.713A.96.96 0 0 1 18 19zm1.35-5.2 3.425-9.2a.88.88 0 0 1 .338-.437A.94.94 0 0 1 11.65 4h.7q.3 0 .538.163a.88.88 0 0 1 .337.437l3.425 9.225q.15.425-.1.8a.8.8 0 0 1-.7.375.9.9 0 0 1-.512-.162A.9.9 0 0 1 15 14.4l-.75-2.2H9.8L9 14.425a.84.84 0 0 1-.325.425q-.225.15-.5.15a.84.84 0 0 1-.737-.387.82.82 0 0 1-.088-.813m3-3.2h3.3l-1.6-4.55h-.1z' } /></svg>;
export default TextFormat;
