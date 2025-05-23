import type { SVGProps } from 'react';
import * as React from 'react';

const Favorite = (props: SVGProps<SVGSVGElement>) => <svg xmlns={ 'http://www.w3.org/2000/svg' } width={ 24 } height={ 24 } fill={ 'none' } viewBox={ '0 0 24 24' } { ...props }><path fill={ 'currentColor' } d={ 'M12 20.325a2.2 2.2 0 0 1-.712-.125 1.7 1.7 0 0 1-.638-.4l-1.725-1.575a69 69 0 0 1-4.788-4.812Q1.999 11.026 2 8.15 2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538a5.95 5.95 0 0 1 2-1.537 5.7 5.7 0 0 1 2.5-.563q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275a60 60 0 0 1-4.825 4.825l-1.7 1.55a1.65 1.65 0 0 1-.637.4 2.2 2.2 0 0 1-.713.125M11.05 6.75q-.725-1.024-1.55-1.563t-2-.537q-1.5 0-2.5 1t-1 2.5q0 1.3.925 2.763a19 19 0 0 0 2.213 2.837 39 39 0 0 0 2.65 2.575Q11.15 17.525 12 18.3q.85-.775 2.213-1.975t2.65-2.575a19 19 0 0 0 2.212-2.837Q20 9.45 20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2 .538-.825.539-1.55 1.562a1.14 1.14 0 0 1-.95.5 1.14 1.14 0 0 1-.95-.5' } /></svg>;
export default Favorite;
