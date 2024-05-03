import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import keys from './components/key-data';
import notesForKeys from './components/string-data';
import cebulalogo from './assets/cebulalogo.png';

function App() {

  const navRef = useRef(null);
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      if (navRef.current.scrollWidth > navRef.current.clientWidth) {
        setScrollable(true);
      } else {
        setScrollable(false);
      }
    };

    checkScrollable();

    window.addEventListener('resize', checkScrollable);

    return () => {
      window.removeEventListener('resize', checkScrollable);
    };
  }, []);

  const scrollLeft = () => {
    navRef.current.scrollLeft -= 50; 
  };

  const scrollRight = () => {
    navRef.current.scrollLeft += 50; 
  };

  const [keyState, setKeyState] = useState('none');
  const thisKey = notesForKeys.find(notesForKey => notesForKey.key === keyState);

  return (
    <div>
      <div className='w-full pb-5'>
        <h1 className='text-center'>Skala obfitej miłości dla Zosi</h1>
        <div className='w-12 h-px bg-gray-400 mx-auto'></div>
      </div>

      <div className="relative flex justify-center pb-3">
      {scrollable && (
        <button
          className="absolute top-0 left-0 bg-gray-200 shadow-md z-10"
          onClick={scrollLeft}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
      )}
      <div
        ref={navRef}
        className="flex overflow-x-auto whitespace-nowrap"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div>
        {keys.map(key => (
          <button className={`px-2 keyButton ${key.id === keyState ? 'underline decoration-1' : ''}`} key={key.id} onClick={() => setKeyState(key.id)}>{key.displayText}</button>
        ))}
      </div>
      </div>
      {scrollable && (
        <button
          className="absolute top-0 right-0 bg-gray-200 shadow-md z-10"
          onClick={scrollRight}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      )}
    </div>
    <div className="svgcontainer max-xl:hidden pb-5">
      <svg width="100%" height="100%" viewBox="0 0 1340 594" preserveAspectRatio="xMidYMid meet">
      <path className='lg-background' d="m 254,257.33443 v -19 h -1 v 20 l -25,1 -2,-12 1,12 -21,1 v -4 c -6.84753,1.27121 -22.20381,-2.23123 -24,6 l -23,1 v -35 h -1 v 35 l -24,1 -1.85263,-16 -0.14737,-22 h -1 v 25 l -19,-3 c 0,-3.95486 0.94429,-9.42697 -1.60339,-12.77545 -6.35108,-8.34735 -32.111736,-10.61035 -41.248462,-6.62116 -6.709073,2.92926 -0.768547,14.00135 -4.175927,18.96296 -4.280555,6.23309 -17.151783,2.0624 -22.368824,7.94366 C 39.396442,259.4597 41,267.81606 41,272.33443 c -11.818201,0.50751 -28.105987,0.40305 -39,5 l 1.9205248,29 -0.2237656,10.39661 9.3032408,2.3179 28,2.28549 c 0,4.43347 -1.407246,11.83636 1.027779,15.72223 3.48056,5.55432 17.982963,6.78857 23.972221,7.27777 0,5.12677 -2.110229,16.46112 1.742287,20.39661 2.950752,3.01428 10.42337,1.60339 14.257713,1.60339 14.697807,0 30.99806,-2.39218 31,-20 7.87944,-0.62186 23.84326,-0.67899 22,-12 h 20 v -1 h -21 v -3 l 22,1 v 4 h 2 v -4 l 22,1 v 5 h 1 v -5 l 23.39661,2.74228 L 206,355.33443 h 1 v -21 c 6.66324,0 16.4912,-1.17868 22,3 h 1 l 21,-1 v 2 h -21 v 1 c 5.06328,0 21.8022,2.58966 23,-3 l 25,2 v 10 h 1 v -10 l 25,1 v 16 h 1 v -16 l 82,1.00385 123,4.03552 212,7 113,3.96063 c 0.20111,72.8847 42.24451,153.15472 102,193.97144 41.74066,28.51153 91.0259,41.8009 141,43.98919 48.5231,2.12476 94.3464,-19.23138 141,-28.56091 12.4357,-2.48682 25.6691,-1.38757 37,4.72449 7.6874,4.14666 12.4365,14.99084 22,10.60955 3.9467,-1.80798 13.0005,-4.65692 14.7593,-8.94671 1.8193,-4.43756 -4.6073,-13.29358 -5.8388,-17.78705 -3.0985,-11.30627 -0.9579,-23.46362 6.007,-33 7.0509,-9.65424 18.0413,-15.38184 29.0725,-19.30786 5.2111,-1.85465 14.4996,-2.3591 18,-6.69214 -19.9569,4.11914 -45.6406,11.7644 -53.3009,33 -3.0447,8.44031 -3.892,18.26514 -1.5402,27 1.1072,4.11194 6.4285,11.6991 5.3149,15.78705 -1.0953,4.02026 -10.9247,7.14404 -14.4738,8.47455 -6.7711,2.53827 -14.1389,-8.51148 -20,-11.45142 -11.5032,-5.77008 -25.5356,-6.4024 -38,-4.19519 -42.2399,7.47998 -81.6901,25.32965 -125,28.29553 -90.8884,6.224 -184.62622,-44.23572 -225.75232,-125.91052 -10.60687,-21.06482 -18.72888,-42.93488 -23.8233,-66 -3.20307,-14.50208 -4.00507,-29.64447 -7.42438,-44 l 12,1 c 2.58038,125.01941 113.20367,229.42529 238,223.96063 31.1505,-1.36401 62.1633,-9.87524 92,-18.38189 18.89,-5.38575 39.066,-12.8556 59,-11.48926 16.1523,1.10718 25.7793,9.44037 40,14.91052 -2.2316,-8.17914 -5.6281,-16.3136 -4.8295,-25 3.0847,-33.55182 36.3368,-54.42773 67.8295,-57 v -2 c -41.3754,1.80392 -79.0312,36.18604 -67,79 -32.6948,-19.68188 -64.8696,-8.91382 -99,0.57562 -27.9517,7.77155 -56.0795,14.50238 -85,17.25464 -23.5015,2.23651 -49.4811,-2.65594 -72,-9.12115 C 923.19415,542.11177 852.05457,455.87899 850,356.33443 h 2 c 1.00714,121.6839 114.94867,231.54041 238,219.83026 29.9634,-2.85144 59.1033,-10.01471 88,-18.25152 30.9984,-8.83594 60.8976,-18.08863 91,-1.57874 1.6361,-9.83002 -1.5267,-18.7605 1.7462,-29 9.0938,-28.44974 40.539,-45.6546 69.2538,-48 v -2 c -41.2755,3.28479 -76.3953,31.98267 -73,75 -24.5791,-13.0899 -51.723,-6.5611 -77,0.11572 -32.7501,8.65082 -65.1285,18.49115 -99,21.71454 C 969.77954,585.70058 854.33337,477.17067 854,356.33443 l 204,6.96063 275,9.03937 v -150 l -480,16 c 8.99579,-30.15079 9.85034,-60.60745 23.30865,-90 C 911.44049,71.607317 997.49286,13.638384 1084,19.423907 c 35.1138,2.348388 69.2692,11.723205 103,21.338012 25.5375,7.279297 55.3156,14.925476 80,0.57251 -0.5503,6.971802 -1.2681,13.043762 0.2107,20 7.8693,37.01871 40.3635,47.607061 72.7893,56.000001 -2.991,-4.2511 -10.222,-4.29703 -15,-5.72067 -10.0253,-2.98712 -20.087,-6.80072 -29,-12.34491 -15.0095,-9.336521 -26.0615,-26.192417 -27.8295,-43.934421 -0.5761,-5.781555 1.7296,-11.40625 0.8295,-17 -57.0491,23.751831 -114.8569,-15.928772 -173,-19.910522 -57.0842,-3.909241 -121.38599,14.253723 -165,52.19989 -34.2486,29.797883 -57.08301,69.425083 -69.42133,112.710633 -4.95245,17.37424 -9.52862,36.86636 -9.57867,55 h -2 c 0.14001,-16.91412 4.46472,-34.73959 8.84875,-51 C 871.02295,142.18004 893.9881,102.01598 929,70.504961 c 42.63757,-38.374206 110.0352,-59.425842 167,-54.000793 33.3589,3.176941 65.8582,13.32019 98,22.254638 25.8584,7.187806 55.9564,12.146058 79,-5.424377 -1.4213,6.889404 -3.5065,13.893555 -2.8302,21 3.5677,37.490845 37.2087,52.270421 69.8302,59.000001 -2.8682,-4.07657 -9.4142,-4.1189 -14,-5.42749 -9.8242,-2.80344 -19.3856,-6.4653 -28,-12.011541 -14.9785,-9.643734 -26.5436,-27.203426 -25.9568,-45.56097 0.2385,-7.463257 4.3804,-14.781799 3.9568,-22 -7.5299,4.960022 -14.1949,9.965088 -23,12.560913 -28.3956,8.37146 -58.8701,-4.142334 -86,-11.851013 -23.451,-6.66333 -47.7078,-12.228272 -72,-14.540161 C 967.68298,2.3875297 849.05841,110.45699 848,238.33443 h -12 c 8.36084,-35.02228 11.22699,-68.86761 27.25848,-102 C 904.28705,51.540362 993.25073,0.05262975 1087,2.3490775 c 45.9525,1.1256106 87.3391,22.1110835 132,28.8510745 12.3433,1.862793 25.5831,1.466186 37,-4.242249 5.2373,-2.618652 11.6339,-11.689148 17.0393,-12.243835 5.8582,-0.601136 13.3074,5.991821 18.9607,7.620361 -3.3978,11.795044 -8.853,20.130493 -7.9097,33 1.9572,26.699097 31.8467,42.03461 55.9097,44.000001 -4.7253,-3.872311 -12.2554,-4.336911 -18,-6.344911 -12.4746,-4.360412 -25.42,-11.659973 -31.8757,-23.65509 -5.7395,-10.66449 -5.6986,-21.818237 -1.7793,-33 1.8794,-5.362061 8.359,-12.404602 1.5956,-16.481445 -4.3598,-2.627991 -13.7123,-8.533875 -18.926,-6.871949 -7.1118,2.267029 -12.3975,10.908875 -20.0146,13.889649 -10.9795,4.296631 -22.5751,4.103638 -34,2.039368 -40.2307,-7.26886 -77.8883,-23.4906009 -119,-27.4058841 -64.4546,-6.1383667 -139.94263,17.8469241 -186,63.8302611 -31.9375,31.88617 -55.82098,71.004911 -66.87347,115.000001 -3.57373,14.22546 -6.55024,28.4827 -8.69904,43 -0.63281,4.27542 0.13623,13.3403 -4.57562,15.39661 -4.37232,1.90814 -11.16107,0.50311 -15.85187,0.61804 -10.26416,0.25149 -20.71191,0.57419 -31,1.02472 -40.6394,1.77972 -81.34442,2.21957 -122,4 -94.22876,4.12652 -188.70874,7.63556 -283,9.94598 -17.05988,0.41803 -33.94012,-1.38873 -51,-0.9707 -25.02075,0.6131 -49.92645,3.98535 -75,3.98535 m -21,-129 v 1 h 5 l -5,-1 m 12,0 v 1 h 5 l -5,-1 m -37,18 c 7.99675,-6.44693 13.47351,-13.49973 24,-16 -9.00656,-2.65601 -20.03098,9.13434 -24,16 m 43,-17 v 1 l 5,1 v -1 l -5,-1 m 6,2 v 1 c 7.69543,3.65662 13.08478,9.16443 18,16 h 1 c -3.89908,-7.82745 -10.57678,-14.31586 -19,-17 m -125,3 v 1 l 22,-2 c -6.49544,-2.72559 -15.44667,-0.84158 -22,1 m 23,-1 v 1 c 13.24672,3.14639 23.64412,13.22836 28,26 h 1 c -3.16672,-13.32574 -15.34886,-24.95377 -29,-27 m -29,4 v 1 l 5,-2 -5,1 m -2,1 c -6.79691,5.53564 -12.51462,11.38913 -15,20 h 1 l 14,-20 m 110,6 v 1 h 16 l -16,-1 m -13,4 v 1 l 12,-3 -12,2 m 30,-3 v 1 l 9,2 -9,-3 m -44,2 -3,12 -2,6 h 1 c 0.9639,-6.11694 6.20323,-8.73706 11,-12 v -1 l -10,6 3,-11 m -67,1 v 1 h 14 l -14,-1 m 121,0 v 1 l 10,5 v -1 l -10,-5 m -126,1 v 1 h 4 l -4,-1 m 20,0 v 1 c 11.76445,1.73746 20.04555,9.32947 30,15 v -4 h -1 l -1,2 c -7.10001,-7.21912 -17.82234,-13.11139 -28,-14 m 60,2 v 1 l 5,-2 -5,1 m 61,-2 1,1 -1,-1 m -152,4 v 1 l 10,-3 -10,2 m 153,-2 1,4 h 1 l -2,-4 m -155,3 1,1 -1,-1 m 150,0 7,6 1,-4 h -1 v 3 l -7,-5 m -152,1 -13,7 v 4 h 1 l 13,-10 -1,-1 m -11.66666,4.66666 0.33332,0.66668 -0.33332,-0.66668 M 280,160.33443 v 15 h 1 l -1,-15 m -95,6 v 11 h 1 l -1,-11 m -79,2 v 7 h 1 l -1,-7 m 96,2 1,9 h 1 l -2,-9 m 77,6 c -3.33121,14.02478 -15.45035,26.81906 -30,29 v 1 l 8,-2 v 6 h -34 v -7 l 10,3 v -1 c -10.85562,-2.57846 -18.48456,-9.2164 -25,-18 h -1 l 13.96759,16.17285 -1.2392,10.69675 5.72223,9.30017 L 226,240.33443 h 1 v -19 h 27 v 7 h 1 l 6,-15 h -1 c -8.00488,6.06451 -30.01195,2 -40,2 v -4 l 41,1 v -1 c -5.53044,-5.88181 0.40646,-8.51901 5,-12.3287 5.55756,-4.60923 15.36948,-14.63636 13,-22.6713 m -172,1 v 4 h 1 l -1,-4 m 77,1 v 4 h 1 l -1,-4 m 20.33333,2.66666 0.33334,0.66668 -0.33334,-0.66668 m -95.99999,2 0.33332,0.66668 -0.33332,-0.66668 m 74.99999,1 0.33334,0.66668 -0.33334,-0.66668 M 205,183.33443 l 2,3 -2,-3 m -96,2 c 2.83281,10.54428 14.25353,14.40408 17.51852,23.13889 1.76014,4.70886 -6.64199,9.85745 0.48148,11.86111 v -1 l -3,-1 v -2 c 8.14363,-1.93884 36.63545,-4.91507 41,3 h -37 v 1 c 8.66487,0 17.33575,-0.0959 26,0.004 2.94644,0.0339 7.98074,1.46176 10.3773,-0.77082 3.37859,-3.1474 -2.97927,-7.71014 0.23073,-11.62423 6.4131,-7.81995 15.24777,-10.92392 18.39197,-21.60895 h -1 c -4.88826,11.32678 -14.95592,20.13925 -27,23 v 1 l 7,-2 v 6 h -34 v -7 l 9,3 v -1 c -14.48004,-3.43933 -19.33735,-13.55508 -28,-24 m 125,21 v 1 h 14 l -14,-1 m -96,4 v 1 h 7 l -7,-1 m 9,0 v 1 h 7 l -7,-1 m 110,6 c -2.54041,7.65421 -25.88005,4 -33,4 v -4 h 33 m -130,5 1,1 -1,-1 m 34,1 c -6.37024,4.82611 -21.1539,2 -29,2 v 1 c 4.84517,0 29.13908,2.45816 29,-3 m -33,1 3,2 v -1 l -3,-1 m 1204,1 v 23 l -390,8.98535 -334,7.05402 -230,5.96063 v -14 c 68.55521,0 137.53339,-3.96228 206,-6.96063 148.26587,-6.49298 296.7348,-7.58579 445,-14.07874 100.7031,-4.41006 202.1708,-9.96063 303,-9.96063 m -1264,25 c 0,-4.55704 -1.906578,-14.69168 1.027779,-18.39661 2.759582,-3.48425 24.300552,-3.06826 27.368827,0 4.782864,4.78287 0.859185,11.54023 -4.401237,12.81638 -3.651344,0.8858 -7.340584,1.59686 -10.995369,2.46451 -4.34346,1.03113 -8.583344,2.46588 -13,3.11572 m 33,-17 7,2 -8,6 1,-8 m 9,5 -1.02778,24.43597 L 92,266.20327 43,271.33443 c 0,-3.83646 -1.40897,-11.21335 1.027779,-14.41125 3.138172,-4.11844 15.148594,-4.42432 19.972221,-5.38892 16.134277,-3.22644 31.458153,-6.22427 46,-14.19983 m 1222,11 v 31 l -954,8 v -17 l 294,-6.98535 460,-10.0293 200,-4.98535 m -1200,5 c -3.74574,6.00739 -13.4579,7.64609 -20,9 v -12 l 20,3 m 149,0 c 7.45609,-1.77518 15.84381,-1.742 23,1 -1.01535,-4.73834 -20.77698,-4.85837 -23,-1 m -1,1 1,1 -1,-1 m 73,0 5,2 v 14 l -54,16 v -13 h -1 L 301.97223,286.60604 280,289.33443 v -5 h -1 v 5 l -50,2 v -9 h -1 v 8 l -22,1 v -13 h 5 v -1 l -30,1 v 1 l 24,-1 v 14 h -7 c -3.11945,-8.59064 -9.53221,-0.0771 -16,0 v -12 h -1 v 20 l -23,-1 c 0,-4.59845 -2.30197,-16.86386 3,-18 v -1 l -21,1 v 1 h 17 v 17 h -17 v -11 h -1 l -1,26 h 20 v -13 l 23,1 v 4 h 1 v -4 l 46,1 v 7 h 1 v -3 l 23,2 v 10 c -6.67406,-7.3e-4 -17.4651,0.87677 -23,-3 l -1,3 37,1 v -1 h -12 v -9 l 51,6 v 5 l -32,-1 v 1 l 36,1 v -1 h -3 v -4 l 38,4 v 1 h -19 v 1 h 27 v -1 h -2 v -1 h 4 v -1 l -73,-8 v -8 l 23,1 v 4 h 1 v -4 l 54,2 c 0,5.11142 1.69391,11.91064 -3,15 l 3,1 -1,16 -22,1 v -1 h 3 v -1 L 203,332.51577 152.91049,329.57363 135,329.33443 l -2,-1 2.52933,-32 -1.52933,-31 c 15.4456,3.35858 36.1781,-1.01855 52,-2.09491 5.08261,-0.34576 12.84694,0.9888 17,-1.90509 16.57559,3.60431 38.09042,-1.72641 55,-2.91049 18.2269,-1.27634 36.95963,-2.97244 55,-3.05942 12.93152,-0.0623 27.2262,2.01111 40,-1.03009 m -219,1 c -1.24777,15.27646 -3.94266,25.80481 1,41 H 4 v -19 c 16.285143,-0.1348 32.800163,-3.21124 49,-4.83099 27.238312,-2.72345 56.4075,-4.2295 81,-17.16901 m 242,0 v 14 l -17,1 v -15 h 17 m -172,3 c -3.83145,5.42291 -14.94432,2.55826 -21,4 2.21696,-6.6796 15.13626,-4 21,-4 m 119,12 v 1 h 15 l -15,-1 m 53,0 v 17 h -17 v -16 l 17,-1 m -72,1 v 1 h 11 l -11,-1 m -24,2 v 5 h 1 v -4 l 22,-1 h -23 m 78,-1 v 15 l -51,1 v -1 l 51,-15 m -91,1 v 1 h 12 l -12,-1 m -36,3 v 1 l 22,-1 v 4 h 1 l -1,-5 h 9 c -7.08466,-2.97284 -23.66975,-1.16669 -31,1 m -15,0 v 1 h 11 l -11,-1 m 12,1 1,1 -1,-1 m -61,2 v 1 h 11 l -11,-1 m 1165,1 v 34 l -954,-8 v -18 l 954,-8 m -1193,3 1,1 -1,-1 m 237,5 v 18 l -17,-1 v -17 h 17 m -18,1 v 16 l -54,-2 v -13 l 54,-1 m -55,1 v 14 l -23,-1 c 0.0366,-10.34061 13.74478,-12.8898 23,-13 m -24,1 v 12 l -26,-1 v -10 l 26,-1 m 8,0 v 1 l -7,2 c 0.79623,-3.71585 3.6373,-3 7,-3 m -35,1 v 10 h -23 v -10 h 23 m -47,1 v 8 l -23,-1 v -6 l 23,-1 m 23,0 v 8 l -22,-1 v -7 h 22 m -94,5 v 41 c -36.644913,-23.90811 -88.793354,-15.35022 -130,-23 v -18 h 130 m 9,2 c -2.68303,7.67502 5.36758,9.28922 6,1 h 8 v 12 l -17,-1 v -12 h 3 m 94,6 -8,-1 v -2 c 3.51056,0 7.1456,-0.98712 8,3 m 15,2 -8,-1 1,-4 c 4.17587,0.13712 6.27205,0.63809 7,5 m 27,-3 v 6 l -26,-3 v -4 l 26,1 m 97,2 v 15 h -17 v -15 h 17 m 956,8 v 30 l -199,-4.98535 -465,-10.0293 -290,-6.98535 v -16 l 954,8 m -1151,-6 1,1 -1,-1 m -1,4 c 1.32707,6.19293 25.11792,4 31,4 v -1 l -4,-3 h -1 v 3 l -26,-3 m -16,1 v 1 h 13 l -13,-1 m 53,3 v 1 h 11 l -11,-1 m -106,14 -1,25 C 96.754227,347.32259 81.577232,345.7256 66,342.91005 60.353542,341.88945 48.597027,341.27864 44.603397,336.82131 41.65274,333.52803 43,326.44026 43,322.33443 l 68,9 m 265,-7 v 15 h -17 l 1,-16 16,1 m 956,22 v 24 c -67.8743,0 -136.2085,-3.99213 -204,-6.96063 -148.26563,-6.4924 -296.73468,-7.58637 -445,-14.07874 -101.37872,-4.43924 -203.48889,-9.96063 -305,-9.96063 v -15 l 195,4.98535 507,11.0293 252,5.98535 m -1201,-5 -18,3 v -12 c 6.77891,0.9136 14.75839,2.42474 18,9 m 48,1 v 29 h 1 l -1,-29 m -111,3 c 4.446999,0.19342 8.794044,1.04733 13.089508,2.2037 4.471512,1.20377 10.562103,1.20676 14.59259,3.49924 3.13427,1.78269 3.542389,10.02954 0.714508,12.26929 -2.994796,2.37189 -24.015747,2.81103 -26.793212,0.33487 C 66.050644,360.47414 68,349.71486 68,345.33443 m 209.66666,4.33331 0.66668,0.33338 -0.66668,-0.33338 M 101,352.33443 l 7,4 v 2 l -8,3 1,-9 m 176,4 -4,26 h 1 l 1,-5 h 33 v -1 l -2,-11 h -1 v 11 h -27 l -1,-20 m -70,9 -1,5 4,4 c -8.23357,0 -33.03381,-4.02905 -38,3 10.51131,-4.0943 31.62251,-4.39728 42,0 l -7,-12 m -31,5 v 3 h 1 l 1,-3 h -2 m -4,8 c 6.38754,13.30536 -11.2507,19.01019 -15,32 h 1 c 4.17386,-9.97232 10.91243,-16.41205 20,-22 l -2,-7 h 25 v -1 l -29,-2 m 41,0 -3,1 -2,8 c 10.85916,4.55103 19.12202,12.81421 23,24 h 1 c -3.04935,-12.71973 -14.58606,-15.37164 -19.95293,-25.20602 -1.54319,-2.82779 0.0934,-4.81485 1.95293,-6.79398 l -1,-1 m 95,0 -1,3 5,2 -4,-5 m -37,3 c -1.02725,4.39429 3.32074,8.58801 0.96759,12.67517 -5.72134,9.93732 -16.03456,13.42828 -17.96759,26.32483 h 1 c 2.99301,-12.60071 12.23157,-22.07437 24,-27 v -1 l -5,1 v -6 h 34 l -2,6 c 9.89981,4.14896 17.40543,11.2876 22,21 h 1 c -3.80707,-11.94717 -22.73898,-18.02203 -17,-30 -7.92728,3.35907 -37.41769,6.10999 -41,-3 m -81,2 v 1 h 8 l -8,-1 m -5,1 v 1 h 4 l -4,-1 m 15,0 v 1 h 4 l -4,-1 m -21,2 v 1 l 5,-1 h -5 m 26.66667,-0.66669 0.66666,0.33338 -0.66666,-0.33338 M 290,389.33443 v 1 h 5 l -5,-1 m -10,2 v 1 l 8,-1 h -8 m 17,-1 v 1 l 8,1 -8,-2 m -141,21 v 3 h 1 l -1,-3 m 76,1 v 3 h 1 l -1,-3 m -77,3 v 5 h 1 l -1,-5 m 174.33334,0.66669 0.33332,0.66662 -0.33332,-0.66662 M 233,416.33443 v 14 h 1 l -1,-14 m 97,2 v 3 h 1 l -1,-3 m -77,3 v 7 h 1 l -1,-7 m 78,1 c 0,14.85043 -6.14868,20.20261 -20,26 v 1 l 19,-11 c -2.86075,12.0441 -11.67322,22.11172 -23,27 v 1 c 15.8147,-4.65366 30.95935,-27.41498 24,-44 m -176,4 1,9 h 1 v -3 l 11,7 v -1 l -13,-12 m 98,4 1,11 h 1 v -3 l 17,10 v -1 c -8.99661,-3.87671 -15.16879,-8.25488 -19,-17 m -34,9 v 1 l 13,-6 c 2.12166,-5.58719 -11.0822,3.81732 -13,5 m 12.33333,-3.33331 0.33334,0.66662 -0.33334,-0.66662 M 157,436.33443 l 1,4 h 1 l -2,-4 m 73,2 c -3.58891,8.31604 -9.62468,13.96265 -17,19 v 1 c 6.49193,-3.08902 18.35144,-11.7308 17,-20 m -61,1 1,1 -1,-1 m 2,1 1,1 -1,-1 m 46,0 -2,1 v 1 l 2,-2 m -58,1 c 3.78534,8.60608 11.91614,16.32697 21,19 v -1 l -21,-18 m 14,0 v 1 l 4,1 v -1 l -4,-1 m 33,3 v 1 l 8,-2 -8,1 m 49,-2 4,9 h 1 l -5,-9 m -76.33333,1.33331 0.66666,0.33338 -0.66666,-0.33338 M 181,444.33443 v 1 h 3 l -3,-1 m 4,1 v 1 h 5 l -5,-1 m 15,0 v 1 h 5 l -5,-1 m -8,1 v 1 h 6 l -6,-1 m 81,2 v 1 l 14,3 v -1 l -14,-3 m 35.66666,1.33331 0.66668,0.33338 -0.66668,-0.33338 m -3,1 0.66668,0.33338 -0.66668,-0.33338 M 299,451.33443 v 1 h 5 l -5,-1 m -39,1 c 4.35822,6.45264 10.44534,11.77698 18,14 v -1 l -18,-13 m 29,0 v 1 h 9 l -9,-1 m -78,6 1,1 -1,-1 m -10,3 v 1 l 9,-2 -9,1 m -19.33333,-0.66669 0.66666,0.33338 -0.66666,-0.33338 M 184,461.33443 v 1 h 4 l -4,-1 m 5,1 v 1 h 11 l -11,-1 m 90.66666,4.33331 0.66668,0.33338 -0.66668,-0.33338 m 25,0 0.66668,0.33338 -0.66668,-0.33338 M 282,467.33443 v 1 h 3 l -3,-1 m 18,0 v 1 h 3 l -3,-1 m -14,1 v 1 h 13 z"  />
      /*neck */
      <path d="M 358 340 L 358 254 L 1333 223 L 1332 372  Z" className='neck' />
      /* E string */
      <line x1="357" y1="270" x2="1333" y2="248" className='string' />
      /* A string */
      <line x1="357" y1="288" x2="1333" y2="280" className='string' />
      /* D string */
      <line x1="357" y1="307" x2="1333" y2="315" className='string' />
      /* G string */
      <line x1="357" y1="324" x2="1333" y2="346" className='string' />
      /* Open E */
      <rect width="14" height="14" x="370" y="263" className='open-string-square' style={{opacity:`${thisKey.openStringOpacity}`}}/>
      <text className="notetext" x="374" y="274" style={{opacity:`${thisKey.openStringOpacity}`}}>E</text>
      /* F1 on E */
      <circle r="8" cx="404" cy="269"  style={{fill:`${thisKey.f}`, stroke:`${thisKey.fStroke}`, opacity:`${thisKey.fOpacity}`}}/>
      <text className="notetext" x="401" y="273" style={{opacity:`${thisKey.fOpacity}`}}>F</text>
      /* Gflat1 on E */
      <circle r="8" cx="467" cy="268"  style={{fill:`${thisKey.gFlat}`, stroke:`${thisKey.gFlatStroke}`, opacity:`${thisKey.gFlatOpacity}`}}/>
      <text className="notetext" x="460" y="272" style={{opacity:`${thisKey.gFlatOpacity}`}}>G♭</text>
      /* G1 on E */
      <circle r="8" cx="525" cy="266"  style={{fill:`${thisKey.g}`, stroke:`${thisKey.gStroke}`, opacity:`${thisKey.gOpacity}`}}/>
      <text className="notetext" x="521" y="270" style={{opacity:`${thisKey.gOpacity}`}}>G</text>
      /* Aflat1 on E */
      <circle r="8" cx="588" cy="264"  style={{fill:`${thisKey.aFlat}`, stroke:`${thisKey.aFlatStroke}`, opacity:`${thisKey.aFlatOpacity}`}}/>
      <text className="notetext" x="582" y="268" style={{opacity:`${thisKey.aFlatOpacity}`}}>A♭</text>
      /* A1 on E */
      <circle r="8" cx="645" cy="263"  style={{fill:`${thisKey.a}`, stroke:`${thisKey.aStroke}`, opacity:`${thisKey.aOpacity}`}}/>
      <text className="notetext" x="641" y="266" style={{opacity:`${thisKey.aOpacity}`}}>A</text>
      /* Bflat1 on E */
      <circle r="8" cx="694" cy="262"  style={{fill:`${thisKey.bFlat}`, stroke:`${thisKey.bFlatStroke}`, opacity:`${thisKey.bFlatOpacity}`}}/>
      <text className="notetext" x="688" y="266" style={{opacity:`${thisKey.bFlatOpacity}`}}>B♭</text>
      /* B1 on E */
      <circle r="8" cx="746" cy="261"  style={{fill:`${thisKey.b}`, stroke:`${thisKey.bStroke}`, opacity:`${thisKey.bOpacity}`}}/>
      <text className="notetext" x="743" y="265" style={{opacity:`${thisKey.bOpacity}`}}>B</text>
      /* C1 on E */
      <circle r="8" cx="790" cy="260"  style={{fill:`${thisKey.c}`, stroke:`${thisKey.cStroke}`, opacity:`${thisKey.cOpacity}`}}/>
      <text className="notetext" x="786" y="264" style={{opacity:`${thisKey.cOpacity}`}}>C</text>
      /* Dflat1 on E */
      <circle r="8" cx="832" cy="259"  style={{fill:`${thisKey.dFlat}`, stroke:`${thisKey.dFlatStroke}`, opacity:`${thisKey.dFlatOpacity}`}}/>
      <text className="notetext" x="825.5" y="263" style={{opacity:`${thisKey.dFlatOpacity}`}}>D♭</text>
      /* D1 on E */
      <circle r="8" cx="875" cy="258"  style={{fill:`${thisKey.d}`, stroke:`${thisKey.dStroke}`, opacity:`${thisKey.dOpacity}`}}/>
      <text className="notetext" x="871" y="262" style={{opacity:`${thisKey.dOpacity}`}}>D</text>
      /* Eflat1 on E */
      <circle r="8" cx="914" cy="257"  style={{fill:`${thisKey.eFlat}`, stroke:`${thisKey.eFlatStroke}`, opacity:`${thisKey.eFlatOpacity}`}}/>
      <text className="notetext" x="909" y="261" style={{opacity:`${thisKey.eFlatOpacity}`}}>E♭</text>
      /* E1 on E */
      <circle r="8" cx="952" cy="256"  style={{fill:`${thisKey.e}`, stroke:`${thisKey.eStroke}`, opacity:`${thisKey.eOpacity}`}}/>
      <text className="notetext" x="949" y="260" style={{opacity:`${thisKey.eOpacity}`}}>E</text>
      /* F2 on E */
      <circle r="8" cx="987" cy="255"  style={{fill:`${thisKey.f}`, stroke:`${thisKey.fStroke}`, opacity:`${thisKey.fOpacity}`}}/>
      <text className="notetext" x="984" y="259" style={{opacity:`${thisKey.fOpacity}`}}>F</text>
      /* Gflat2 on E */
      <circle r="8" cx="1019" cy="254"  style={{fill:`${thisKey.gFlat}`, stroke:`${thisKey.gFlatStroke}`, opacity:`${thisKey.gFlatOpacity}`}}/>
      <text className="notetext" x="1012" y="258" style={{opacity:`${thisKey.gFlatOpacity}`}}>G♭</text>
      /* Open A */
      <rect width="14" height="14" x="370" y="281" className='open-string-square' style={{opacity:`${thisKey.openStringOpacity}`}} />
      <text className="notetext" x="373" y="292" style={{opacity:`${thisKey.openStringOpacity}`}}>A</text>
      /* Bflat1 on A */
      <circle r="8" cx="404" cy="287"  style={{fill:`${thisKey.bFlat}`, stroke:`${thisKey.bFlatStroke}`, opacity:`${thisKey.bFlatOpacity}`}}/>
      <text className="notetext" x="398" y="291" style={{opacity:`${thisKey.bFlatOpacity}`}}>B♭</text>
      /* B1 on A */
      <circle r="8" cx="467" cy="287"  style={{fill:`${thisKey.b}`, stroke:`${thisKey.bStroke}`, opacity:`${thisKey.bOpacity}`}}/>
      <text className="notetext" x="463" y="291" style={{opacity:`${thisKey.bOpacity}`}}>B</text>
      /* C1 on A */
      <circle r="8" cx="525" cy="286"  style={{fill:`${thisKey.c}`, stroke:`${thisKey.cStroke}`, opacity:`${thisKey.cOpacity}`}}/>
      <text className="notetext" x="520.5" y="290" style={{opacity:`${thisKey.cOpacity}`}}>C</text>
      /* Dflat1 on A */
      <circle r="8" cx="588" cy="286"  style={{fill:`${thisKey.dFlat}`, stroke:`${thisKey.dFlatStroke}`, opacity:`${thisKey.dFlatOpacity}`}}/>
      <text className="notetext" x="581.5" y="290" style={{opacity:`${thisKey.dFlatOpacity}`}}>D♭</text>
      /* D1 on A */
      <circle r="8" cx="645" cy="286"  style={{fill:`${thisKey.d}`, stroke:`${thisKey.dStroke}`, opacity:`${thisKey.dOpacity}`}}/>
      <text className="notetext" x="641" y="290" style={{opacity:`${thisKey.dOpacity}`}}>D</text>
      /* Eflat1 on A */
      <circle r="8" cx="694" cy="285"  style={{fill:`${thisKey.eFlat}`, stroke:`${thisKey.eFlatStroke}`, opacity:`${thisKey.eFlatOpacity}`}}/>
      <text className="notetext" x="689" y="289" style={{opacity:`${thisKey.eFlatOpacity}`}}>E♭</text>
      /* E1 on A */
      <circle r="8" cx="746" cy="284"  style={{fill:`${thisKey.e}`, stroke:`${thisKey.eStroke}`, opacity:`${thisKey.eOpacity}`}}/>
      <text className="notetext" x="743" y="288" style={{opacity:`${thisKey.eOpacity}`}}>E</text>
      /* F1 on A */
      <circle r="8" cx="790" cy="284"  style={{fill:`${thisKey.f}`, stroke:`${thisKey.fStroke}`, opacity:`${thisKey.fOpacity}`}} />
      <text className="notetext" x="787" y="288" style={{opacity:`${thisKey.fOpacity}`}}>F</text>
      /* Gflat1 on A */
      <circle r="8" cx="832" cy="284"  style={{fill:`${thisKey.gFlat}`, stroke:`${thisKey.gFlatStroke}`, opacity:`${thisKey.gFlatOpacity}`}}/>
      <text className="notetext" x="825" y="288" style={{opacity:`${thisKey.gFlatOpacity}`}}>G♭</text>
      /* G1 on A */
      <circle r="8" cx="875" cy="284"  style={{fill:`${thisKey.g}`, stroke:`${thisKey.gStroke}`, opacity:`${thisKey.gOpacity}`}}/>
      <text className="notetext" x="870" y="288" style={{opacity:`${thisKey.gOpacity}`}}>G</text>
      /* Aflat1 on A */
      <circle r="8" cx="914" cy="283"  style={{fill:`${thisKey.aFlat}`, stroke:`${thisKey.aFlatStroke}`, opacity:`${thisKey.aFlatOpacity}`}}/>
      <text className="notetext" x="908" y="286" style={{opacity:`${thisKey.aFlatOpacity}`}}>A♭</text>
      /* A1 on A */
      <circle r="8" cx="952" cy="283"  style={{fill:`${thisKey.a}`, stroke:`${thisKey.aStroke}`, opacity:`${thisKey.aOpacity}`}}/>
      <text className="notetext" x="948" y="286" style={{opacity:`${thisKey.aOpacity}`}}>A</text>
      /* Bflat2 on A */
      <circle r="8" cx="987" cy="282"  style={{fill:`${thisKey.bFlat}`, stroke:`${thisKey.bFlatStroke}`, opacity:`${thisKey.bFlatOpacity}`}}/>
      <text className="notetext" x="981" y="286" style={{opacity:`${thisKey.bFlatOpacity}`}}>B♭</text>
      /* B2 on A */
      <circle r="8" cx="1019" cy="282"  style={{fill:`${thisKey.b}`, stroke:`${thisKey.bStroke}`, opacity:`${thisKey.bOpacity}`}}/>
      <text className="notetext" x="1016" y="286" style={{opacity:`${thisKey.bOpacity}`}}>B</text>
      /* Open D */
      <rect width="14" height="14" x="370" y="300" className='open-string-square' style={{opacity:`${thisKey.openStringOpacity}`}}/>
      <text className="notetext" x="373" y="311" style={{opacity:`${thisKey.openStringOpacity}`}}>D</text>
      /* Eflat1 on D */
      <circle r="8" cx="404" cy="307"  style={{fill:`${thisKey.eFlat}`, stroke:`${thisKey.eFlatStroke}`, opacity:`${thisKey.eFlatOpacity}`}}/>
      <text className="notetext" x="399" y="311" style={{opacity:`${thisKey.eFlatOpacity}`}}>E♭</text>
      /* E1 on D */
      <circle r="8" cx="467" cy="307"  style={{fill:`${thisKey.e}`, stroke:`${thisKey.eStroke}`, opacity:`${thisKey.eOpacity}`}}/>
      <text className="notetext" x="464" y="311" style={{opacity:`${thisKey.eOpacity}`}}>E</text>
      /* F1 on D */
      <circle r="8" cx="525" cy="308"  style={{fill:`${thisKey.f}`, stroke:`${thisKey.fStroke}`, opacity:`${thisKey.fOpacity}`}} />
      <text className="notetext" x="522" y="312" style={{opacity:`${thisKey.fOpacity}`}}>F</text>
      /* Gflat1 on D */
      <circle r="8" cx="588" cy="308"  style={{fill:`${thisKey.gFlat}`, stroke:`${thisKey.gFlatStroke}`, opacity:`${thisKey.gFlatOpacity}`}}/>
      <text className="notetext" x="581" y="312" style={{opacity:`${thisKey.gFlatOpacity}`}}>G♭</text>
      /* G1 on D */
      <circle r="8" cx="645" cy="309"  style={{fill:`${thisKey.g}`, stroke:`${thisKey.gStroke}`, opacity:`${thisKey.gOpacity}`}}/>
      <text className="notetext" x="640" y="313" style={{opacity:`${thisKey.gOpacity}`}}>G</text>
      /* Aflat1 on D */
      <circle r="8" cx="694" cy="309"  style={{fill:`${thisKey.aFlat}`, stroke:`${thisKey.aFlatStroke}`, opacity:`${thisKey.aFlatOpacity}`}}/>
      <text className="notetext" x="688" y="312.5" style={{opacity:`${thisKey.aFlatOpacity}`}}>A♭</text>
      /* A1 on D */
      <circle r="8" cx="746" cy="310"  style={{fill:`${thisKey.a}`, stroke:`${thisKey.aStroke}`, opacity:`${thisKey.aOpacity}`}}/>
      <text className="notetext" x="742" y="313" style={{opacity:`${thisKey.aOpacity}`}}>A</text>
      /* Bflat1 on D */
      <circle r="8" cx="790" cy="310"  style={{fill:`${thisKey.bFlat}`, stroke:`${thisKey.bFlatStroke}`, opacity:`${thisKey.bFlatOpacity}`}}/>
      <text className="notetext" x="784" y="314" style={{opacity:`${thisKey.bFlatOpacity}`}}>B♭</text>
      /* B1 on D */
      <circle r="8" cx="832" cy="310"  style={{fill:`${thisKey.b}`, stroke:`${thisKey.bStroke}`, opacity:`${thisKey.bOpacity}`}}/>
      <text className="notetext" x="829" y="314" style={{opacity:`${thisKey.bOpacity}`}}>B</text>
      /* C1 on D */
      <circle r="8" cx="875" cy="311"  style={{fill:`${thisKey.c}`, stroke:`${thisKey.cStroke}`, opacity:`${thisKey.cOpacity}`}}/>
      <text className="notetext" x="870.5" y="315" style={{opacity:`${thisKey.cOpacity}`}}>C</text>
      /* Dflat1 on D */
      <circle r="8" cx="914" cy="311"  style={{fill:`${thisKey.dFlat}`, stroke:`${thisKey.dFlatStroke}`, opacity:`${thisKey.dFlatOpacity}`}}/>
      <text className="notetext" x="907.5" y="315" style={{opacity:`${thisKey.dFlatOpacity}`}}>D♭</text>
      /* D1 on D */
      <circle r="8" cx="952" cy="311"  style={{fill:`${thisKey.d}`, stroke:`${thisKey.dStroke}`, opacity:`${thisKey.dOpacity}`}}/>
      <text className="notetext" x="948" y="315" style={{opacity:`${thisKey.dOpacity}`}}>D</text>
      /* Eflat2 on D */
      <circle r="8" cx="987" cy="312"  style={{fill:`${thisKey.eFlat}`, stroke:`${thisKey.eFlatStroke}`, opacity:`${thisKey.eFlatOpacity}`}}/>
      <text className="notetext" x="982" y="316" style={{opacity:`${thisKey.eFlatOpacity}`}}>E♭</text>
      /* E2 on D */
      <circle r="8" cx="1019" cy="312"  style={{fill:`${thisKey.e}`, stroke:`${thisKey.eStroke}`, opacity:`${thisKey.eOpacity}`}}/>
      <text className="notetext" x="1015" y="316" style={{opacity:`${thisKey.eOpacity}`}}>E</text>
      /* Open G */
      <rect width="14" height="14" x="370" y="318" className='open-string-square' style={{opacity:`${thisKey.openStringOpacity}`}}/>
      <text className="notetext" x="373" y="329" style={{opacity:`${thisKey.openStringOpacity}`}}>G</text>
      /* Aflat1 on G */
      <circle r="8" cx="404" cy="325"  style={{fill:`${thisKey.aFlat}`, stroke:`${thisKey.aFlatStroke}`, opacity:`${thisKey.aFlatOpacity}`}}/>
      <text className="notetext" x="398" y="328" style={{opacity:`${thisKey.aFlatOpacity}`}}>A♭</text>
      /* A1 on G */
      <circle r="8" cx="467" cy="326"  style={{fill:`${thisKey.a}`, stroke:`${thisKey.aStroke}`, opacity:`${thisKey.aOpacity}`}}/>
      <text className="notetext" x="463.5" y="329" style={{opacity:`${thisKey.aOpacity}`}}>A</text>
      /* Bflat1 on G */
      <circle r="8" cx="525" cy="327"  style={{fill:`${thisKey.bFlat}`, stroke:`${thisKey.bFlatStroke}`, opacity:`${thisKey.bFlatOpacity}`}}/>
      <text className="notetext" x="519" y="331" style={{opacity:`${thisKey.bFlatOpacity}`}}>B♭</text>
      /* B1 on G */
      <circle r="8" cx="588" cy="329"  style={{fill:`${thisKey.b}`, stroke:`${thisKey.bStroke}`, opacity:`${thisKey.bOpacity}`}}/>
      <text className="notetext" x="585" y="333" style={{opacity:`${thisKey.bOpacity}`}}>B</text>
      /* C1 on G */
      <circle r="8" cx="645" cy="330"  style={{fill:`${thisKey.c}`, stroke:`${thisKey.cStroke}`, opacity:`${thisKey.cOpacity}`}}/>
      <text className="notetext" x="640.5" y="334" style={{opacity:`${thisKey.cOpacity}`}}>C</text>
      /* Dflat1 on G */
      <circle r="8" cx="694" cy="331"  style={{fill:`${thisKey.dFlat}`, stroke:`${thisKey.dFlatStroke}`, opacity:`${thisKey.dFlatOpacity}`}}/>
      <text className="notetext" x="687.5" y="335" style={{opacity:`${thisKey.dFlatOpacity}`}}>D♭</text>
      /* D1 on G */
      <circle r="8" cx="746" cy="333"  style={{fill:`${thisKey.d}`, stroke:`${thisKey.dStroke}`, opacity:`${thisKey.dOpacity}`}}/>
      <text className="notetext" x="742" y="337" style={{opacity:`${thisKey.dOpacity}`}}>D</text>
      /* Eflat1 on G */
      <circle r="8" cx="790" cy="333"  style={{fill:`${thisKey.eFlat}`, stroke:`${thisKey.eFlatStroke}`, opacity:`${thisKey.eFlatOpacity}`}}/>
      <text className="notetext" x="785" y="337" style={{opacity:`${thisKey.eFlatOpacity}`}}>E♭</text>
      /* E1 on G */
      <circle r="8" cx="832" cy="334"  style={{fill:`${thisKey.e}`, stroke:`${thisKey.eStroke}`, opacity:`${thisKey.eOpacity}`}}/>
      <text className="notetext" x="829" y="338" style={{opacity:`${thisKey.eOpacity}`}}>E</text>
      /* F1 on G */
      <circle r="8" cx="875" cy="335"  style={{fill:`${thisKey.f}`, stroke:`${thisKey.fStroke}`, opacity:`${thisKey.fOpacity}`}} />
      <text className="notetext" x="872" y="339" style={{opacity:`${thisKey.fOpacity}`}}>F</text>
      /* Gflat1 on G */
      <circle r="8" cx="914" cy="336"  style={{fill:`${thisKey.gFlat}`, stroke:`${thisKey.gFlatStroke}`, opacity:`${thisKey.gFlatOpacity}`}}/>
      <text className="notetext" x="907.5" y="340" style={{opacity:`${thisKey.gFlatOpacity}`}}>G♭</text>
      /* G1 on G */
      <circle r="8" cx="952" cy="337"  style={{fill:`${thisKey.g}`, stroke:`${thisKey.gStroke}`, opacity:`${thisKey.gOpacity}`}}/>
      <text className="notetext" x="947.5" y="341" style={{opacity:`${thisKey.gOpacity}`}}>G</text>
      /* Aflat2 on G */
      <circle r="8" cx="987" cy="338"  style={{fill:`${thisKey.aFlat}`, stroke:`${thisKey.aFlatStroke}`, opacity:`${thisKey.aFlatOpacity}`}}/>
      <text className="notetext" x="981" y="341" style={{opacity:`${thisKey.aFlatOpacity}`}}>A♭</text>
      /* A2 on G */
      <circle r="8" cx="1019" cy="338"  style={{fill:`${thisKey.a}`, stroke:`${thisKey.aStroke}`, opacity:`${thisKey.aOpacity}`}}/>
      <text className="notetext" x="1015" y="342" style={{opacity:`${thisKey.aOpacity}`}}>A</text>
      </svg>
    </div>

    <div className="svgcontainer max-md:hidden xl:hidden relative pb-5">
      <svg width="100%" height="100%" viewBox="0 0 768 136" preserveAspectRatio="xMidYMid meet">
      /*neck */
      <path d="M 1 110 L 1 24 L 768 1 L 768 136  Z" className="neck"/>
      /* E string */
      <line x1="1" y1="40" x2="768" y2="18" className="string"/>
      /* A string */
      <line x1="1" y1="58" x2="768" y2="50" className="string"/>
      /* D string */
      <line x1="1" y1="77" x2="768" y2="85" className="string"/>
      /* G string */
      <line x1="1" y1="94" x2="768" y2="116" className="string"/>
      /* Open E */
      <rect width="14" height="14" x="12" y="33" className='open-string-square' style={{opacity:`${thisKey.openStringOpacity}`}}/>
      <text className="notetext" x="16" y="44" style={{opacity:`${thisKey.openStringOpacity}`}}>E</text>
      /* F1 on E */
      <circle r="8" cx="46" cy="38"  style={{fill:`${thisKey.f}`, stroke:`${thisKey.fStroke}`, opacity:`${thisKey.fOpacity}`}}/>
      <text className="notetext" x="43" y="42" style={{opacity:`${thisKey.fOpacity}`}}>F</text>
      /* Gflat1 on E */
      <circle r="8" cx="109" cy="37"  style={{fill:`${thisKey.gFlat}`, stroke:`${thisKey.gFlatStroke}`, opacity:`${thisKey.gFlatOpacity}`}}/>
      <text className="notetext" x="102" y="41" style={{opacity:`${thisKey.gFlatOpacity}`}}>G♭</text>
      /* G1 on E */
      <circle r="8" cx="167" cy="36"  style={{fill:`${thisKey.g}`, stroke:`${thisKey.gStroke}`, opacity:`${thisKey.gOpacity}`}}/>
      <text className="notetext" x="163" y="40" style={{opacity:`${thisKey.gOpacity}`}}>G</text>
      /* Aflat1 on E */
      <circle r="8" cx="230" cy="34"  style={{fill:`${thisKey.aFlat}`, stroke:`${thisKey.aFlatStroke}`, opacity:`${thisKey.aFlatOpacity}`}}/>
      <text className="notetext" x="224" y="38" style={{opacity:`${thisKey.aFlatOpacity}`}}>A♭</text>
      /* A1 on E */
      <circle r="8" cx="287" cy="32"  style={{fill:`${thisKey.a}`, stroke:`${thisKey.aStroke}`, opacity:`${thisKey.aOpacity}`}}/>
      <text className="notetext" x="283" y="35.5" style={{opacity:`${thisKey.aOpacity}`}}>A</text>
      /* Bflat1 on E */
      <circle r="8" cx="336" cy="30.5"  style={{fill:`${thisKey.bFlat}`, stroke:`${thisKey.bFlatStroke}`, opacity:`${thisKey.bFlatOpacity}`}}/>
      <text className="notetext" x="330" y="34.5" style={{opacity:`${thisKey.bFlatOpacity}`}}>B♭</text>
      /* B1 on E */
      <circle r="8" cx="388" cy="29"  style={{fill:`${thisKey.b}`, stroke:`${thisKey.bStroke}`, opacity:`${thisKey.bOpacity}`}}/>
      <text className="notetext" x="385" y="33" style={{opacity:`${thisKey.bOpacity}`}}>B</text>
      /* C1 on E */
      <circle r="8" cx="432" cy="28"  style={{fill:`${thisKey.c}`, stroke:`${thisKey.cStroke}`, opacity:`${thisKey.cOpacity}`}}/>
      <text className="notetext" x="428" y="32" style={{opacity:`${thisKey.cOpacity}`}}>C</text>
      /* Dflat1 on E */
      <circle r="8" cx="474" cy="27"  style={{fill:`${thisKey.dFlat}`, stroke:`${thisKey.dFlatStroke}`, opacity:`${thisKey.dFlatOpacity}`}}/>
      <text className="notetext" x="467.5" y="31" style={{opacity:`${thisKey.dFlatOpacity}`}}>D♭</text>
      /* D1 on E */
      <circle r="8" cx="517" cy="25"  style={{fill:`${thisKey.d}`, stroke:`${thisKey.dStroke}`, opacity:`${thisKey.dOpacity}`}}/>
      <text className="notetext" x="513" y="29" style={{opacity:`${thisKey.dOpacity}`}}>D</text>
      /* Eflat1 on E */
      <circle r="8" cx="556" cy="24"  style={{fill:`${thisKey.eFlat}`, stroke:`${thisKey.eFlatStroke}`, opacity:`${thisKey.eFlatOpacity}`}}/>
      <text className="notetext" x="551" y="28" style={{opacity:`${thisKey.eFlatOpacity}`}}>E♭</text>
      /* E1 on E */
      <circle r="8" cx="594" cy="23"  style={{fill:`${thisKey.e}`, stroke:`${thisKey.eStroke}`, opacity:`${thisKey.eOpacity}`}}/>
      <text className="notetext" x="591" y="27" style={{opacity:`${thisKey.eOpacity}`}}>E</text>
      /* F2 on E */
      <circle r="8" cx="629" cy="22"  style={{fill:`${thisKey.f}`, stroke:`${thisKey.fStroke}`, opacity:`${thisKey.fOpacity}`}}/>
      <text className="notetext" x="626" y="26" style={{opacity:`${thisKey.fOpacity}`}}>F</text>
      /* Gflat2 on E */
      <circle r="8" cx="661" cy="21"  style={{fill:`${thisKey.gFlat}`, stroke:`${thisKey.gFlatStroke}`, opacity:`${thisKey.gFlatOpacity}`}}/>
      <text className="notetext" x="654" y="25" style={{opacity:`${thisKey.gFlatOpacity}`}}>G♭</text>
      /* Open A */
      <rect width="14" height="14" x="12" y="51" className='open-string-square' style={{opacity:`${thisKey.openStringOpacity}`}} />
      <text className="notetext" x="15" y="62" style={{opacity:`${thisKey.openStringOpacity}`}}>A</text>
      /* Bflat1 on A */
      <circle r="8" cx="46" cy="57"  style={{fill:`${thisKey.bFlat}`, stroke:`${thisKey.bFlatStroke}`, opacity:`${thisKey.bFlatOpacity}`}}/>
      <text className="notetext" x="40" y="61" style={{opacity:`${thisKey.bFlatOpacity}`}}>B♭</text>
      /* B1 on A */
      <circle r="8" cx="109" cy="57"  style={{fill:`${thisKey.b}`, stroke:`${thisKey.bStroke}`, opacity:`${thisKey.bOpacity}`}}/>
      <text className="notetext" x="105" y="61" style={{opacity:`${thisKey.bOpacity}`}}>B</text>
      /* C1 on A */
      <circle r="8" cx="167" cy="56"  style={{fill:`${thisKey.c}`, stroke:`${thisKey.cStroke}`, opacity:`${thisKey.cOpacity}`}}/>
      <text className="notetext" x="162.5" y="60" style={{opacity:`${thisKey.cOpacity}`}}>C</text>
      /* Dflat1 on A */
      <circle r="8" cx="230" cy="56"  style={{fill:`${thisKey.dFlat}`, stroke:`${thisKey.dFlatStroke}`, opacity:`${thisKey.dFlatOpacity}`}}/>
      <text className="notetext" x="223.5" y="60" style={{opacity:`${thisKey.dFlatOpacity}`}}>D♭</text>
      /* D1 on A */
      <circle r="8" cx="287" cy="55"  style={{fill:`${thisKey.d}`, stroke:`${thisKey.dStroke}`, opacity:`${thisKey.dOpacity}`}}/>
      <text className="notetext" x="283" y="59" style={{opacity:`${thisKey.dOpacity}`}}>D</text>
      /* Eflat1 on A */
      <circle r="8" cx="336" cy="55"  style={{fill:`${thisKey.eFlat}`, stroke:`${thisKey.eFlatStroke}`, opacity:`${thisKey.eFlatOpacity}`}}/>
      <text className="notetext" x="331" y="59" style={{opacity:`${thisKey.eFlatOpacity}`}}>E♭</text>
      /* E1 on A */
      <circle r="8" cx="388" cy="54"  style={{fill:`${thisKey.e}`, stroke:`${thisKey.eStroke}`, opacity:`${thisKey.eOpacity}`}}/>
      <text className="notetext" x="385" y="58" style={{opacity:`${thisKey.eOpacity}`}}>E</text>
      /* F1 on A */
      <circle r="8" cx="432" cy="54"  style={{fill:`${thisKey.f}`, stroke:`${thisKey.fStroke}`, opacity:`${thisKey.fOpacity}`}} />
      <text className="notetext" x="429" y="58" style={{opacity:`${thisKey.fOpacity}`}}>F</text>
      /* Gflat1 on A */
      <circle r="8" cx="474" cy="53"  style={{fill:`${thisKey.gFlat}`, stroke:`${thisKey.gFlatStroke}`, opacity:`${thisKey.gFlatOpacity}`}}/>
      <text className="notetext" x="467" y="57" style={{opacity:`${thisKey.gFlatOpacity}`}}>G♭</text>
      /* G1 on A */
      <circle r="8" cx="517" cy="52"  style={{fill:`${thisKey.g}`, stroke:`${thisKey.gStroke}`, opacity:`${thisKey.gOpacity}`}}/>
      <text className="notetext" x="512" y="56" style={{opacity:`${thisKey.gOpacity}`}}>G</text>
      /* Aflat1 on A */
      <circle r="8" cx="556" cy="52"  style={{fill:`${thisKey.aFlat}`, stroke:`${thisKey.aFlatStroke}`, opacity:`${thisKey.aFlatOpacity}`}}/>
      <text className="notetext" x="550" y="55" style={{opacity:`${thisKey.aFlatOpacity}`}}>A♭</text>
      /* A1 on A */
      <circle r="8" cx="594" cy="52"  style={{fill:`${thisKey.a}`, stroke:`${thisKey.aStroke}`, opacity:`${thisKey.aOpacity}`}}/>
      <text className="notetext" x="590" y="55" style={{opacity:`${thisKey.aOpacity}`}}>A</text>
      /* Bflat2 on A */
      <circle r="8" cx="629" cy="51"  style={{fill:`${thisKey.bFlat}`, stroke:`${thisKey.bFlatStroke}`, opacity:`${thisKey.bFlatOpacity}`}}/>
      <text className="notetext" x="623" y="55" style={{opacity:`${thisKey.bFlatOpacity}`}}>B♭</text>
      /* B2 on A */
      <circle r="8" cx="661" cy="51"  style={{fill:`${thisKey.b}`, stroke:`${thisKey.bStroke}`, opacity:`${thisKey.bOpacity}`}}/>
      <text className="notetext" x="658" y="55" style={{opacity:`${thisKey.bOpacity}`}}>B</text>
      /* Open D */
      <rect width="14" height="14" x="12" y="70" className='open-string-square' style={{opacity:`${thisKey.openStringOpacity}`}}/>
      <text className="notetext" x="15" y="81" style={{opacity:`${thisKey.openStringOpacity}`}}>D</text>
      /* Eflat1 on D */
      <circle r="8" cx="46" cy="77"  style={{fill:`${thisKey.eFlat}`, stroke:`${thisKey.eFlatStroke}`, opacity:`${thisKey.eFlatOpacity}`}}/>
      <text className="notetext" x="41" y="81" style={{opacity:`${thisKey.eFlatOpacity}`}}>E♭</text>
      /* E1 on D */
      <circle r="8" cx="109" cy="78"  style={{fill:`${thisKey.e}`, stroke:`${thisKey.eStroke}`, opacity:`${thisKey.eOpacity}`}}/>
      <text className="notetext" x="106" y="82" style={{opacity:`${thisKey.eOpacity}`}}>E</text>
      /* F1 on D */
      <circle r="8" cx="167" cy="78.5"  style={{fill:`${thisKey.f}`, stroke:`${thisKey.fStroke}`, opacity:`${thisKey.fOpacity}`}} />
      <text className="notetext" x="164" y="82.5" style={{opacity:`${thisKey.fOpacity}`}}>F</text>
      /* Gflat1 on D */
      <circle r="8" cx="230" cy="79"  style={{fill:`${thisKey.gFlat}`, stroke:`${thisKey.gFlatStroke}`, opacity:`${thisKey.gFlatOpacity}`}}/>
      <text className="notetext" x="223" y="83" style={{opacity:`${thisKey.gFlatOpacity}`}}>G♭</text>
      /* G1 on D */
      <circle r="8" cx="287" cy="80"  style={{fill:`${thisKey.g}`, stroke:`${thisKey.gStroke}`, opacity:`${thisKey.gOpacity}`}}/>
      <text className="notetext" x="282" y="84" style={{opacity:`${thisKey.gOpacity}`}}>G</text>
      /* Aflat1 on D */
      <circle r="8" cx="336" cy="80"  style={{fill:`${thisKey.aFlat}`, stroke:`${thisKey.aFlatStroke}`, opacity:`${thisKey.aFlatOpacity}`}}/>
      <text className="notetext" x="330" y="83" style={{opacity:`${thisKey.aFlatOpacity}`}}>A♭</text>
      /* A1 on D */
      <circle r="8" cx="388" cy="81"  style={{fill:`${thisKey.a}`, stroke:`${thisKey.aStroke}`, opacity:`${thisKey.aOpacity}`}}/>
      <text className="notetext" x="384" y="85" style={{opacity:`${thisKey.aOpacity}`}}>A</text>
      /* Bflat1 on D */
      <circle r="8" cx="432" cy="81"  style={{fill:`${thisKey.bFlat}`, stroke:`${thisKey.bFlatStroke}`, opacity:`${thisKey.bFlatOpacity}`}}/>
      <text className="notetext" x="426" y="85" style={{opacity:`${thisKey.bFlatOpacity}`}}>B♭</text>
      /* B1 on D */
      <circle r="8" cx="474" cy="82"  style={{fill:`${thisKey.b}`, stroke:`${thisKey.bStroke}`, opacity:`${thisKey.bOpacity}`}}/>
      <text className="notetext" x="471" y="86" style={{opacity:`${thisKey.bOpacity}`}}>B</text>
      /* C1 on D */
      <circle r="8" cx="517" cy="82.5"  style={{fill:`${thisKey.c}`, stroke:`${thisKey.cStroke}`, opacity:`${thisKey.cOpacity}`}}/>
      <text className="notetext" x="512.5" y="86.5" style={{opacity:`${thisKey.cOpacity}`}}>C</text>
      /* Dflat1 on D */
      <circle r="8" cx="556" cy="83"  style={{fill:`${thisKey.dFlat}`, stroke:`${thisKey.dFlatStroke}`, opacity:`${thisKey.dFlatOpacity}`}}/>
      <text className="notetext" x="549.5" y="87" style={{opacity:`${thisKey.dFlatOpacity}`}}>D♭</text>
      /* D1 on D */
      <circle r="8" cx="594" cy="83"  style={{fill:`${thisKey.d}`, stroke:`${thisKey.dStroke}`, opacity:`${thisKey.dOpacity}`}}/>
      <text className="notetext" x="590" y="87.5" style={{opacity:`${thisKey.dOpacity}`}}>D</text>
      /* Eflat2 on D */
      <circle r="8" cx="629" cy="83"  style={{fill:`${thisKey.eFlat}`, stroke:`${thisKey.eFlatStroke}`, opacity:`${thisKey.eFlatOpacity}`}}/>
      <text className="notetext" x="624" y="87" style={{opacity:`${thisKey.eFlatOpacity}`}}>E♭</text>
      /* E2 on D */
      <circle r="8" cx="661" cy="84"  style={{fill:`${thisKey.e}`, stroke:`${thisKey.eStroke}`, opacity:`${thisKey.eOpacity}`}}/>
      <text className="notetext" x="657.5" y="88" style={{opacity:`${thisKey.eOpacity}`}}>E</text>
      /* Open G */
      <rect width="14" height="14" x="12" y="88" className='open-string-square' style={{opacity:`${thisKey.openStringOpacity}`}}/>
      <text className="notetext" x="15" y="99" style={{opacity:`${thisKey.openStringOpacity}`}}>G</text>
      /* Aflat1 on G */
      <circle r="8" cx="46" cy="96"  style={{fill:`${thisKey.aFlat}`, stroke:`${thisKey.aFlatStroke}`, opacity:`${thisKey.aFlatOpacity}`}}/>
      <text className="notetext" x="40" y="99" style={{opacity:`${thisKey.aFlatOpacity}`}}>A♭</text>
      /* A1 on G */
      <circle r="8" cx="109" cy="97"  style={{fill:`${thisKey.a}`, stroke:`${thisKey.aStroke}`, opacity:`${thisKey.aOpacity}`}}/>
      <text className="notetext" x="105" y="100" style={{opacity:`${thisKey.aOpacity}`}}>A</text>
      /* Bflat1 on G */
      <circle r="8" cx="167" cy="99"  style={{fill:`${thisKey.bFlat}`, stroke:`${thisKey.bFlatStroke}`, opacity:`${thisKey.bFlatOpacity}`}}/>
      <text className="notetext" x="161" y="103" style={{opacity:`${thisKey.bFlatOpacity}`}}>B♭</text>
      /* B1 on G */
      <circle r="8" cx="230" cy="101"  style={{fill:`${thisKey.b}`, stroke:`${thisKey.bStroke}`, opacity:`${thisKey.bOpacity}`}}/>
      <text className="notetext" x="227" y="105" style={{opacity:`${thisKey.bOpacity}`}}>B</text>
      /* C1 on G */
      <circle r="8" cx="287" cy="102"  style={{fill:`${thisKey.c}`, stroke:`${thisKey.cStroke}`, opacity:`${thisKey.cOpacity}`}}/>
      <text className="notetext" x="282.5" y="106" style={{opacity:`${thisKey.cOpacity}`}}>C</text>
      /* Dflat1 on G */
      <circle r="8" cx="336" cy="104"  style={{fill:`${thisKey.dFlat}`, stroke:`${thisKey.dFlatStroke}`, opacity:`${thisKey.dFlatOpacity}`}}/>
      <text className="notetext" x="329.5" y="108" style={{opacity:`${thisKey.dFlatOpacity}`}}>D♭</text>
      /* D1 on G */
      <circle r="8" cx="388" cy="105"  style={{fill:`${thisKey.d}`, stroke:`${thisKey.dStroke}`, opacity:`${thisKey.dOpacity}`}}/>
      <text className="notetext" x="384" y="109" style={{opacity:`${thisKey.dOpacity}`}}>D</text>
      /* Eflat1 on G */
      <circle r="8" cx="432" cy="106"  style={{fill:`${thisKey.eFlat}`, stroke:`${thisKey.eFlatStroke}`, opacity:`${thisKey.eFlatOpacity}`}}/>
      <text className="notetext" x="427" y="110" style={{opacity:`${thisKey.eFlatOpacity}`}}>E♭</text>
      /* E1 on G */
      <circle r="8" cx="474" cy="107"  style={{fill:`${thisKey.e}`, stroke:`${thisKey.eStroke}`, opacity:`${thisKey.eOpacity}`}}/>
      <text className="notetext" x="471" y="111.5" style={{opacity:`${thisKey.eOpacity}`}}>E</text>
      /* F1 on G */
      <circle r="8" cx="517" cy="108"  style={{fill:`${thisKey.f}`, stroke:`${thisKey.fStroke}`, opacity:`${thisKey.fOpacity}`}} />
      <text className="notetext" x="514" y="112.5" style={{opacity:`${thisKey.fOpacity}`}}>F</text>
      /* Gflat1 on G */
      <circle r="8" cx="556" cy="110"  style={{fill:`${thisKey.gFlat}`, stroke:`${thisKey.gFlatStroke}`, opacity:`${thisKey.gFlatOpacity}`}}/>
      <text className="notetext" x="549.5" y="113.5" style={{opacity:`${thisKey.gFlatOpacity}`}}>G♭</text>
      /* G1 on G */
      <circle r="8" cx="594" cy="111"  style={{fill:`${thisKey.g}`, stroke:`${thisKey.gStroke}`, opacity:`${thisKey.gOpacity}`}}/>
      <text className="notetext" x="589.5" y="115" style={{opacity:`${thisKey.gOpacity}`}}>G</text>
      /* Aflat2 on G */
      <circle r="8" cx="629" cy="112"  style={{fill:`${thisKey.aFlat}`, stroke:`${thisKey.aFlatStroke}`, opacity:`${thisKey.aFlatOpacity}`}}/>
      <text className="notetext" x="623" y="115" style={{opacity:`${thisKey.aFlatOpacity}`}}>A♭</text>
      /* A2 on G */
      <circle r="8" cx="661" cy="113"  style={{fill:`${thisKey.a}`, stroke:`${thisKey.aStroke}`, opacity:`${thisKey.aOpacity}`}}/>
      <text className="notetext" x="657" y="116" style={{opacity:`${thisKey.aOpacity}`}}>A</text>
      </svg>
      <div className='absolute top-0 right-0 heightFillAvail w-32 bg-gradient-to-r from-transparent to-white '></div>
    </div>
    
    <div className="svgcontainer md:hidden relative pt-5 pb-5">
      <svg width="100%" height="100%" viewBox="0 0 150 768" preserveAspectRatio="xMidYMid meet" >
        /*neck */
        <path d="M 117 1 L 31 1 L 7 768 L 142 768 Z" className="neck"></path>
        /* E string */
        <line x1="25" y1="768" x2="47" y2="1" className='string' />
        /* A string */
        <line x1="57" y1="768" x2="65" y2="1" className='string' />
        /* D string */
        <line x1="92" y1="768" x2="84" className='string' />
        /* G string */
        <line x1="123" y1="768" x2="101" className='string' />
        /* Open E */
        <rect width="14" height="14" x="95" y="12" className='open-string-square' style={{opacity:`${thisKey.openStringOpacity}`}}/>
        <text className="notetext" x="99" y="23" style={{opacity:`${thisKey.openStringOpacity}`}}>E</text>
        /* F1 on E */
        <circle r="8" cx="102" cy="46" style={{fill:`${thisKey.f}`, stroke:`${thisKey.fStroke}`, opacity:`${thisKey.fOpacity}`}}/>
        <text className="notetext" x="99" y="50.5" style={{opacity:`${thisKey.fOpacity}`}}>F</text>
        /* Gflat1 on E */
        <circle r="8" cx="104" cy="109"  style={{fill:`${thisKey.gFlat}`, stroke:`${thisKey.gFlatStroke}`, opacity:`${thisKey.gFlatOpacity}`}}/>
        <text className="notetext" x="97" y="113" style={{opacity:`${thisKey.gFlatOpacity}`}}>G♭</text>
        /* G1 on E */
        <circle r="8" cx="106" cy="167"  style={{fill:`${thisKey.g}`, stroke:`${thisKey.gStroke}`, opacity:`${thisKey.gOpacity}`}}/>
        <text className="notetext" x="101.5" y="171" style={{opacity:`${thisKey.gOpacity}`}}>G</text>
        /* Aflat1 on E */
        <circle r="8" cx="108" cy="230"   style={{fill:`${thisKey.aFlat}`, stroke:`${thisKey.aFlatStroke}`, opacity:`${thisKey.aFlatOpacity}`}}/>
        <text className="notetext" x="102" y="234" style={{opacity:`${thisKey.aFlatOpacity}`}}>A♭</text>
        /* A1 on E */
        <circle r="8" cx="109" cy="287"  style={{fill:`${thisKey.a}`, stroke:`${thisKey.aStroke}`, opacity:`${thisKey.aOpacity}`}}/>
        <text className="notetext" x="105.5" y="291" style={{opacity:`${thisKey.aOpacity}`}}>A</text>
        /* Bflat1 on E */
        <circle r="8"  cx="110.5" cy="336" style={{fill:`${thisKey.bFlat}`, stroke:`${thisKey.bFlatStroke}`, opacity:`${thisKey.bFlatOpacity}`}}/>
        <text className="notetext" x="104" y="340" style={{opacity:`${thisKey.bFlatOpacity}`}}>B♭</text>
        /* B1 on E */
        <circle r="8" cx="112" cy="388"  style={{fill:`${thisKey.b}`, stroke:`${thisKey.bStroke}`, opacity:`${thisKey.bOpacity}`}}/>
        <text className="notetext" x="109" y="392" style={{opacity:`${thisKey.bOpacity}`}}>B</text>
        /* C1 on E */
        <circle r="8" cx="113" cy="432"  style={{fill:`${thisKey.c}`, stroke:`${thisKey.cStroke}`, opacity:`${thisKey.cOpacity}`}}/>
        <text className="notetext" x="108.5" y="436" style={{opacity:`${thisKey.cOpacity}`}}>C</text>
        /* Dflat1 on E */
        <circle r="8" cx="115" cy="474"  style={{fill:`${thisKey.dFlat}`, stroke:`${thisKey.dFlatStroke}`, opacity:`${thisKey.dFlatOpacity}`}}/>
        <text className="notetext" x="108.5" y="478" style={{opacity:`${thisKey.dFlatOpacity}`}}>D♭</text>
        /* D1 on E */
        <circle r="8" cx="115.5" cy="517"  style={{fill:`${thisKey.d}`, stroke:`${thisKey.dStroke}`, opacity:`${thisKey.dOpacity}`}}/>
        <text className="notetext" x="112" y="521" style={{opacity:`${thisKey.dOpacity}`}}>D</text>
        /* Eflat1 on E */
        <circle r="8" cx="117" cy="556"  style={{fill:`${thisKey.eFlat}`, stroke:`${thisKey.eFlatStroke}`, opacity:`${thisKey.eFlatOpacity}`}}/>
        <text className="notetext" x="112" y="560" style={{opacity:`${thisKey.eFlatOpacity}`}}>E♭</text>
        /* E1 on E */
        <circle r="8" cx="118" cy="594"  style={{fill:`${thisKey.e}`, stroke:`${thisKey.eStroke}`, opacity:`${thisKey.eOpacity}`}}/>
        <text className="notetext" x="115" y="598" style={{opacity:`${thisKey.eOpacity}`}}>E</text>
        /* F2 on E */
        <circle r="8" cx="119" cy="629"  style={{fill:`${thisKey.f}`, stroke:`${thisKey.fStroke}`, opacity:`${thisKey.fOpacity}`}}/>
        <text className="notetext" x="116" y="633" style={{opacity:`${thisKey.fOpacity}`}}>F</text>
        /* Gflat2 on E */
        <circle r="8" cx="120" cy="661"  style={{fill:`${thisKey.gFlat}`, stroke:`${thisKey.gFlatStroke}`, opacity:`${thisKey.gFlatOpacity}`}}/>
        <text className="notetext" x="113.5" y="665" style={{opacity:`${thisKey.gFlatOpacity}`}}>G♭</text>
        /* Open A */
        <rect width="14" height="14"  x="77" y="12" className='open-string-square' style={{opacity:`${thisKey.openStringOpacity}`}} />
        <text className="notetext"  x="80.5" y="23" style={{opacity:`${thisKey.openStringOpacity}`}}>A</text>
        /* Bflat1 on A */
        <circle r="8" cx="84" cy="46"  style={{fill:`${thisKey.bFlat}`, stroke:`${thisKey.bFlatStroke}`, opacity:`${thisKey.bFlatOpacity}`}}/>
        <text className="notetext" x="78" y="50" style={{opacity:`${thisKey.bFlatOpacity}`}}>B♭</text>
        /* B1 on A */
        <circle r="8" cx="85" cy="109"  style={{fill:`${thisKey.b}`, stroke:`${thisKey.bStroke}`, opacity:`${thisKey.bOpacity}`}}/>
        <text className="notetext" x="82" y="113" style={{opacity:`${thisKey.bOpacity}`}}>B</text>
        /* C1 on A */
        <circle r="8" cx="86" cy="167"  style={{fill:`${thisKey.c}`, stroke:`${thisKey.cStroke}`, opacity:`${thisKey.cOpacity}`}}/>
        <text className="notetext" x="82" y="171" style={{opacity:`${thisKey.cOpacity}`}}>C</text>
        /* Dflat1 on A */
        <circle r="8" cx="86.5" cy="230"  style={{fill:`${thisKey.dFlat}`, stroke:`${thisKey.dFlatStroke}`, opacity:`${thisKey.dFlatOpacity}`}}/>
        <text className="notetext" x="80" y="234" style={{opacity:`${thisKey.dFlatOpacity}`}}>D♭</text>
        /* D1 on A */
        <circle r="8" cx="87" cy="287"  style={{fill:`${thisKey.d}`, stroke:`${thisKey.dStroke}`, opacity:`${thisKey.dOpacity}`}}/>
        <text className="notetext" x="83" y="291" style={{opacity:`${thisKey.dOpacity}`}}>D</text>
        /* Eflat1 on A */
        <circle r="8"  cx="87.5" cy="336" style={{fill:`${thisKey.eFlat}`, stroke:`${thisKey.eFlatStroke}`, opacity:`${thisKey.eFlatOpacity}`}}/>
        <text className="notetext" x="82.5" y="340" style={{opacity:`${thisKey.eFlatOpacity}`}}>E♭</text>
        /* E1 on A */
        <circle r="8" cx="88" cy="388"  style={{fill:`${thisKey.e}`, stroke:`${thisKey.eStroke}`, opacity:`${thisKey.eOpacity}`}}/>
        <text className="notetext" x="85" y="392" style={{opacity:`${thisKey.eOpacity}`}}>E</text>
        /* F1 on A */
        <circle r="8" cx="88.5" cy="432"   style={{fill:`${thisKey.f}`, stroke:`${thisKey.fStroke}`, opacity:`${thisKey.fOpacity}`}} />
        <text className="notetext" x="85.5" y="436" style={{opacity:`${thisKey.fOpacity}`}}>F</text>
        /* Gflat1 on A */
        <circle r="8" cx="89" cy="474"  style={{fill:`${thisKey.gFlat}`, stroke:`${thisKey.gFlatStroke}`, opacity:`${thisKey.gFlatOpacity}`}}/>
        <text className="notetext" x="82" y="478" style={{opacity:`${thisKey.gFlatOpacity}`}}>G♭</text>
        /* G1 on A */
        <circle r="8" cx="89.5" cy="517"  style={{fill:`${thisKey.g}`, stroke:`${thisKey.gStroke}`, opacity:`${thisKey.gOpacity}`}}/>
        <text className="notetext"  x="85" y="521" style={{opacity:`${thisKey.gOpacity}`}}>G</text>
        /* Aflat1 on A */
        <circle r="8" cx="90" cy="556" style={{fill:`${thisKey.aFlat}`, stroke:`${thisKey.aFlatStroke}`, opacity:`${thisKey.aFlatOpacity}`}}/>
        <text className="notetext" x="84" y="560" style={{opacity:`${thisKey.aFlatOpacity}`}}>A♭</text>
        /* A1 on A */
        <circle r="8" cx="90" cy="594"  style={{fill:`${thisKey.a}`, stroke:`${thisKey.aStroke}`, opacity:`${thisKey.aOpacity}`}}/>
        <text className="notetext" x="86.5" y="598" style={{opacity:`${thisKey.aOpacity}`}}>A</text>
        /* Bflat2 on A */
        <circle r="8" cx="90.5" cy="629"  style={{fill:`${thisKey.bFlat}`, stroke:`${thisKey.bFlatStroke}`, opacity:`${thisKey.bFlatOpacity}`}}/>
        <text className="notetext" x="84.5" y="633" style={{opacity:`${thisKey.bFlatOpacity}`}}>B♭</text>
        /* B2 on A */
        <circle r="8" cx="91" cy="661"  style={{fill:`${thisKey.b}`, stroke:`${thisKey.bStroke}`, opacity:`${thisKey.bOpacity}`}}/>
        <text className="notetext" x="88" y="665" style={{opacity:`${thisKey.bOpacity}`}}>B</text>
        /* Open D */
        <rect width="14" height="14" x="58" y="12" className='open-string-square' style={{opacity:`${thisKey.openStringOpacity}`}}/>
        <text className="notetext" x="61" y="23" style={{opacity:`${thisKey.openStringOpacity}`}}>D</text>
        /* Eflat1 on D */
        <circle r="8" cx="64" cy="46"  style={{fill:`${thisKey.eFlat}`, stroke:`${thisKey.eFlatStroke}`, opacity:`${thisKey.eFlatOpacity}`}}/>
        <text className="notetext" x="59" y="50" style={{opacity:`${thisKey.eFlatOpacity}`}}>E♭</text>
        /* E1 on D */
        <circle r="8" cx="64" cy="109"  style={{fill:`${thisKey.e}`, stroke:`${thisKey.eStroke}`, opacity:`${thisKey.eOpacity}`}}/>
        <text className="notetext" x="61" y="113" style={{opacity:`${thisKey.eOpacity}`}}>E</text>
        /* F1 on D */
        <circle r="8" cx="63" cy="167"  style={{fill:`${thisKey.f}`, stroke:`${thisKey.fStroke}`, opacity:`${thisKey.fOpacity}`}} />
        <text className="notetext" x="60.5" y="171" style={{opacity:`${thisKey.fOpacity}`}}>F</text>
        /* Gflat1 on D */
        <circle r="8" cx="62.5" cy="230"  style={{fill:`${thisKey.gFlat}`, stroke:`${thisKey.gFlatStroke}`, opacity:`${thisKey.gFlatOpacity}`}}/>
        <text className="notetext" x="56" y="234" style={{opacity:`${thisKey.gFlatOpacity}`}}>G♭</text>
        /* G1 on D */
        <circle r="8" cx="62" cy="287"  style={{fill:`${thisKey.g}`, stroke:`${thisKey.gStroke}`, opacity:`${thisKey.gOpacity}`}}/>
        <text className="notetext" x="57.5" y="291" style={{opacity:`${thisKey.gOpacity}`}}>G</text>
        /* Aflat1 on D */
        <circle r="8" cx="61.5" cy="336"  style={{fill:`${thisKey.aFlat}`, stroke:`${thisKey.aFlatStroke}`, opacity:`${thisKey.aFlatOpacity}`}}/>
        <text className="notetext" x="55.5" y="340" style={{opacity:`${thisKey.aFlatOpacity}`}}>A♭</text>
        /* A1 on D */
        <circle r="8" cx="61" cy="388"  style={{fill:`${thisKey.a}`, stroke:`${thisKey.aStroke}`, opacity:`${thisKey.aOpacity}`}}/>
        <text className="notetext" x="57.5" y="392" style={{opacity:`${thisKey.aOpacity}`}}>A</text>
        /* Bflat1 on D */
        <circle r="8" cx="60" cy="432"  style={{fill:`${thisKey.bFlat}`, stroke:`${thisKey.bFlatStroke}`, opacity:`${thisKey.bFlatOpacity}`}}/>
        <text className="notetext" x="54" y="436" style={{opacity:`${thisKey.bFlatOpacity}`}}>B♭</text>
        /* B1 on D */
        <circle r="8" cx="60" cy="474"   style={{fill:`${thisKey.b}`, stroke:`${thisKey.bStroke}`, opacity:`${thisKey.bOpacity}`}}/>
        <text className="notetext" x="57" y="478" style={{opacity:`${thisKey.bOpacity}`}}>B</text>
        /* C1 on D */
        <circle r="8" cx="60" cy="517"  style={{fill:`${thisKey.c}`, stroke:`${thisKey.cStroke}`, opacity:`${thisKey.cOpacity}`}}/>
        <text className="notetext" x="56" y="521" style={{opacity:`${thisKey.cOpacity}`}}>C</text>
        /* Dflat1 on D */
        <circle r="8" cx="59" cy="556"   style={{fill:`${thisKey.dFlat}`, stroke:`${thisKey.dFlatStroke}`, opacity:`${thisKey.dFlatOpacity}`}}/>
        <text className="notetext" x="52.5" y="560" style={{opacity:`${thisKey.dFlatOpacity}`}}>D♭</text>
        /* D1 on D */
        <circle r="8" cx="59" cy="594"  style={{fill:`${thisKey.d}`, stroke:`${thisKey.dStroke}`, opacity:`${thisKey.dOpacity}`}}/>
        <text className="notetext" x="55" y="598" style={{opacity:`${thisKey.dOpacity}`}}>D</text>
        /* Eflat2 on D */
        <circle r="8" cx="58.5" cy="629"  style={{fill:`${thisKey.eFlat}`, stroke:`${thisKey.eFlatStroke}`, opacity:`${thisKey.eFlatOpacity}`}}/>
        <text className="notetext" x="53" y="633" style={{opacity:`${thisKey.eFlatOpacity}`}}>E♭</text>
        /* E2 on D */
        <circle r="8" cx="58" cy="661"  style={{fill:`${thisKey.e}`, stroke:`${thisKey.eStroke}`, opacity:`${thisKey.eOpacity}`}}/>
        <text className="notetext" x="55" y="665" style={{opacity:`${thisKey.eOpacity}`}}>E</text>
        /* Open G */
        <rect width="14" height="14" x="40" y="12" className='open-string-square' style={{opacity:`${thisKey.openStringOpacity}`}}/>
        <text className="notetext" x="43" y="23" style={{opacity:`${thisKey.openStringOpacity}`}}>G</text>
        /* Aflat1 on G */
        <circle r="8" cx="46" cy="46"  style={{fill:`${thisKey.aFlat}`, stroke:`${thisKey.aFlatStroke}`, opacity:`${thisKey.aFlatOpacity}`}}/>
        <text className="notetext" x="40" y="50" style={{opacity:`${thisKey.aFlatOpacity}`}}>A♭</text>
        /* A1 on G */
        <circle r="8" cx="44" cy="109"  style={{fill:`${thisKey.a}`, stroke:`${thisKey.aStroke}`, opacity:`${thisKey.aOpacity}`}}/>
        <text className="notetext" x="40.5" y="113" style={{opacity:`${thisKey.aOpacity}`}}>A</text>
        /* Bflat1 on G */
        <circle r="8" cx="42" cy="167"  style={{fill:`${thisKey.bFlat}`, stroke:`${thisKey.bFlatStroke}`, opacity:`${thisKey.bFlatOpacity}`}}/>
        <text className="notetext" x="36.5" y="171" style={{opacity:`${thisKey.bFlatOpacity}`}}>B♭</text>
        /* B1 on G */
        <circle r="8" cx="40.5" cy="230" style={{fill:`${thisKey.b}`, stroke:`${thisKey.bStroke}`, opacity:`${thisKey.bOpacity}`}}/>
        <text className="notetext" x="37.5" y="234" style={{opacity:`${thisKey.bOpacity}`}}>B</text>
        /* C1 on G */
        <circle r="8" cx="39" cy="287"  style={{fill:`${thisKey.c}`, stroke:`${thisKey.cStroke}`, opacity:`${thisKey.cOpacity}`}}/>
        <text className="notetext" x="35" y="291" style={{opacity:`${thisKey.cOpacity}`}}>C</text>
        /* Dflat1 on G */
        <circle r="8" cx="37" cy="336"  style={{fill:`${thisKey.dFlat}`, stroke:`${thisKey.dFlatStroke}`, opacity:`${thisKey.dFlatOpacity}`}}/>
        <text className="notetext" x="30.5" y="340" style={{opacity:`${thisKey.dFlatOpacity}`}}>D♭</text>
        /* D1 on G */
        <circle r="8" cx="36" cy="388"  style={{fill:`${thisKey.d}`, stroke:`${thisKey.dStroke}`, opacity:`${thisKey.dOpacity}`}}/>
        <text className="notetext" x="32" y="392" style={{opacity:`${thisKey.dOpacity}`}}>D</text>
        /* Eflat1 on G */
        <circle r="8" cx="35" cy="432"  style={{fill:`${thisKey.eFlat}`, stroke:`${thisKey.eFlatStroke}`, opacity:`${thisKey.eFlatOpacity}`}}/>
        <text className="notetext" x="30" y="436" style={{opacity:`${thisKey.eFlatOpacity}`}}>E♭</text>
        /* E1 on G */
        <circle r="8" cx="34" cy="474"  style={{fill:`${thisKey.e}`, stroke:`${thisKey.eStroke}`, opacity:`${thisKey.eOpacity}`}}/>
        <text className="notetext"  x="31" y="478" style={{opacity:`${thisKey.eOpacity}`}}>E</text>
        /* F1 on G */
        <circle r="8" cx="33" cy="517"  style={{fill:`${thisKey.f}`, stroke:`${thisKey.fStroke}`, opacity:`${thisKey.fOpacity}`}} />
        <text className="notetext" x="30" y="521" style={{opacity:`${thisKey.fOpacity}`}}>F</text>
        /* Gflat1 on G */
        <circle r="8" cx="31" cy="556"  style={{fill:`${thisKey.gFlat}`, stroke:`${thisKey.gFlatStroke}`, opacity:`${thisKey.gFlatOpacity}`}}/>
        <text className="notetext" x="24.5" y="560" style={{opacity:`${thisKey.gFlatOpacity}`}}>G♭</text>
        /* G1 on G */
        <circle r="8" cx="30" cy="594" style={{fill:`${thisKey.g}`, stroke:`${thisKey.gStroke}`, opacity:`${thisKey.gOpacity}`}}/>
        <text className="notetext" x="25.5" y="598" style={{opacity:`${thisKey.gOpacity}`}}>G</text>
        /* Aflat2 on G */
        <circle r="8" cx="29" cy="629"  style={{fill:`${thisKey.aFlat}`, stroke:`${thisKey.aFlatStroke}`, opacity:`${thisKey.aFlatOpacity}`}}/>
        <text className="notetext" x="23" y="633" style={{opacity:`${thisKey.aFlatOpacity}`}}>A♭</text>
        /* A2 on G */
        <circle r="8" cx="28" cy="661"  style={{fill:`${thisKey.a}`, stroke:`${thisKey.aStroke}`, opacity:`${thisKey.aOpacity}`}}/>
        <text className="notetext" x="24.5" y="665" style={{opacity:`${thisKey.aOpacity}`}}>A</text>
      </svg> 
      <div className='absolute bottom-0 right-0 h-96 w-full bg-gradient-to-b from-transparent to-white '></div> 
    </div>

    <div className='w-full px-3'>
      <h2 className='text-lg font-semibold pb-3'>Ale o co chodzi?</h2>
      <p className='pb-2'>To jest diagram gryfu skrzypiec na którym zaznaczone sa miejsca poszczególnych dzwięków. Do wyboru masz widok wszystkich dzwięków albo widoki dzwięków w poszczególnych tonacjach. Wybierz tonację, w której chcesz grać.</p>
      <div className='flex flex-row pb-2'>
        <div className='basis-5 shrink-0'>
          <svg width="18" height="18" className='my-1 mr-2'>
            <circle r="8" cx="9" cy="9" style={{fill:`#706fd3`,stroke:`#474787`}} />
          </svg>
        </div>
        <div>
          <p>To są nuty bazowe albo korzenie skali dla danej tonacji. Grając w danej tonacji, od nich chcesz zaczynać i do nich wracać.</p>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='basis-5 shrink-0'>
          <svg width="18" height="18" className='float-left my-1 mr-2'>
            <circle r="8" cx="9" cy="9" style={{fill:`#ffb142`,stroke:`#cc8e35`}} />
          </svg>
        </div>
        <div>
          <p>To są nuty należące do skali dla danej tonacji. Po nich chcesz spacerować.</p>
        </div>
      </div>
    </div>


    <div className='mt-32 flex flex row justify-end place-items-end'>
      <div>
        <p className='cebulaLogo'>Cebula Kot</p>
      </div>
      <div>
        <img className='border border-slate-400 rounded-full' src={cebulalogo} alt='Cebula Kot logo'/>
      </div>
    </div>

  </div>
  )
}

export default App
