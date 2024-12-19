import type { IIconProps } from './types/IIconProps';

interface VKIconProps extends IIconProps {
  type?: 'negative' | 'origin';
}

function VKIcon(props: VKIconProps) {
  const { type = 'origin', ...otherProps } = props;

  return (
    <svg
      fill={type === 'origin' ? '#0077FF' : 'white'}
      viewBox={'0 0 48 48'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...otherProps}
    >
      <path
        clipRule={'evenodd'}
        d={
          'M3.37413 3.37413C0 6.74826 0 12.1788 0 23.04V24.96C0 35.8212 0 41.2517 3.37413 44.6259C6.74826 48 12.1788 48 23.04 48H24.96C35.8212 48 41.2517 48 44.6259 44.6259C48 41.2517 48 35.8212 48 24.96V23.04C48 12.1788 48 6.74826 44.6259 3.37413C41.2517 0 35.8212 0 24.96 0H23.04C12.1788 0 6.74826 0 3.37413 3.37413ZM8.10012 14.6001C8.36012 27.0801 14.6001 34.5801 25.5401 34.5801H26.1602V27.4401C30.1802 27.8401 33.22 30.7801 34.44 34.5801H40.1201C38.5601 28.9001 34.4599 25.7601 31.8999 24.5601C34.4599 23.0801 38.0599 19.4801 38.9199 14.6001H33.7598C32.6398 18.5601 29.3202 22.1601 26.1602 22.5001V14.6001H21V28.4401C17.8 27.6401 13.7601 23.7601 13.5801 14.6001H8.10012Z'
        }
        fill={'#0077FF'}
        fillRule={'evenodd'}
      />
    </svg>
  );
}

export { VKIcon };
