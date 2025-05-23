import type { SVGProps } from 'react';
import * as React from 'react';

const Delete = (props: SVGProps<SVGSVGElement>) => <svg xmlns={ 'http://www.w3.org/2000/svg' } width={ 24 } height={ 24 } fill={ 'none' } viewBox={ '0 0 24 24' } { ...props }><path fill={ 'currentColor' } d={ 'M7 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 19V6a.97.97 0 0 1-.712-.288A.97.97 0 0 1 4 5q0-.424.288-.712A.97.97 0 0 1 5 4h4q0-.424.288-.712A.97.97 0 0 1 10 3h4q.425 0 .713.288.288.289.287.712h4q.425 0 .713.288.288.289.287.712 0 .424-.288.713A.96.96 0 0 1 19 6v13q0 .825-.587 1.413A1.92 1.92 0 0 1 17 21zM17 6H7v13h10zm-7 11a.97.97 0 0 0 .713-.288A.96.96 0 0 0 11 16V9a.97.97 0 0 0-.288-.712A.97.97 0 0 0 10 8a.96.96 0 0 0-.712.288A.97.97 0 0 0 9 9v7q0 .425.288.713T10 17m4 0a.97.97 0 0 0 .713-.288A.96.96 0 0 0 15 16V9a.97.97 0 0 0-.288-.712A.97.97 0 0 0 14 8a.96.96 0 0 0-.712.288A.97.97 0 0 0 13 9v7q0 .425.288.713T14 17' } /></svg>;
export default Delete;
