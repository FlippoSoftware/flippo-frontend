import type { SVGProps } from 'react';
import * as React from 'react';

const AddRowBelow = (props: SVGProps<SVGSVGElement>) => <svg xmlns={ 'http://www.w3.org/2000/svg' } width={ 24 } height={ 24 } fill={ 'none' } viewBox={ '0 0 24 24' } { ...props }><path fill={ 'currentColor' } d={ 'M19 10V4H5v6zM5 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 18V4q0-.824.588-1.412A1.93 1.93 0 0 1 5 2h14q.825 0 1.413.588T21 4v14q0 .825-.587 1.413A1.92 1.92 0 0 1 19 20h-1a.97.97 0 0 1-.712-.288A.97.97 0 0 1 17 19q0-.424.288-.712A.97.97 0 0 1 18 18h1v-6H5v6h1q.425 0 .713.288T7 19q0 .424-.288.713A.96.96 0 0 1 6 20zm7 2a.97.97 0 0 1-.712-.288A.97.97 0 0 1 11 21v-1h-1a.97.97 0 0 1-.712-.288A.97.97 0 0 1 9 19q0-.424.288-.712A.97.97 0 0 1 10 18h1v-1q0-.424.288-.712A.97.97 0 0 1 12 16q.424 0 .713.288A.96.96 0 0 1 13 17v1h1q.425 0 .713.288T15 19t-.288.713A.96.96 0 0 1 14 20h-1v1a.97.97 0 0 1-.288.713A.96.96 0 0 1 12 22' } /></svg>;
export default AddRowBelow;
