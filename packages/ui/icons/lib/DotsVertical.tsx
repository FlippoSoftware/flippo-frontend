import type { SVGProps } from 'react';
import * as React from 'react';

const DotsVertical = (props: SVGProps<SVGSVGElement>) => <svg xmlns={ 'http://www.w3.org/2000/svg' } width={ 24 } height={ 24 } fill={ 'none' } viewBox={ '0 0 24 24' } { ...props }><path fill={ 'currentColor' } d={ 'M12 20q-.825 0-1.412-.587A1.93 1.93 0 0 1 10 18q0-.825.588-1.412.589-.586 1.412-.588a1.92 1.92 0 0 1 1.413.588q.59.59.587 1.412a1.95 1.95 0 0 1-.587 1.413A1.9 1.9 0 0 1 12 20m0-6q-.825 0-1.412-.587A1.93 1.93 0 0 1 10 12q0-.825.588-1.412.589-.586 1.412-.588a1.92 1.92 0 0 1 1.413.588q.59.59.587 1.412a1.95 1.95 0 0 1-.587 1.413A1.9 1.9 0 0 1 12 14m0-6q-.825 0-1.412-.587A1.93 1.93 0 0 1 10 6q0-.825.588-1.412Q11.177 4.002 12 4a1.92 1.92 0 0 1 1.413.588q.59.59.587 1.412a1.95 1.95 0 0 1-.587 1.413A1.9 1.9 0 0 1 12 8' } /></svg>;
export default DotsVertical;
