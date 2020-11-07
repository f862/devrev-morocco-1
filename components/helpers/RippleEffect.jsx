import React, { useCallback, useState, memo } from 'react';
import PropTypes from 'prop-types';
import {
  GoogleRippleEffect,
  GoogleRippleEffect_wrapper,
  GoogleRippleEffect_circle
} from './styles';

const RippleEffect = ({ children, onClick = () => void 0 }) => {
  const [{ y, x, show }, setRipple] = useState({
    y: 0,
    x: 0,
    show: false
  });

  const HandleRipple = useCallback((e) => {
    var rect = e.target.getBoundingClientRect();

    var offset = {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX
    };

    setRipple({
      y: e.pageY - offset.top,
      x: e.pageX - offset.left,
      show: true
    });

    setTimeout(() => {
      setRipple({
        y: 0,
        x: 0,
        show: false
      });
    }, 400);
  }, []);

  return (
    <GoogleRippleEffect onMouseDown={HandleRipple} onClick={onClick}>
      <GoogleRippleEffect_wrapper>
        {show && <GoogleRippleEffect_circle x={x} y={y} />}
      </GoogleRippleEffect_wrapper>
      {React.Children.map(children, (child) => React.cloneElement(child))}
    </GoogleRippleEffect>
  );
};

RippleEffect.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.element.isRequired
};

export default memo(RippleEffect);