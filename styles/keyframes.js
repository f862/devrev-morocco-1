import { keyframes } from 'styled-components';

export const Move100 = keyframes`
  0% {
     transform: translateX(100%);
    }

  100% {
      transform: translateX(0px);
    }
`;

export const GoogleRipple = keyframes`
  from {transform: scale3d(1, 1, 1);opacity: 0.7;}
  to {transform: scale3d(50, 50, 1);opacity: 0;}
`;

export const ScaleIn = keyframes`
    0% {
      transform: scale(1);
      opacity: 1;
    }

    100% {
      transform: scale(0.8);
      opacity: 0;
    }
`;

export const ScaleOut = keyframes`
    0% {
      transform: scale(0.5);
      opacity: 0;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
`;

export const FadeInTr = keyframes`
0% {
     transform: translateY(20px);
     opacity: 0;
   }

100% {
    transform: translateY(0px);
    opacity: 1;
    }
`;