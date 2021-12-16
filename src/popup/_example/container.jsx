import React from 'react';
import { Button, Popup } from 'tdesign-react';

function Attach() {
  return (
    <div className="tdesign-demo-block-row">
      <Popup
        trigger="click"
        content="触发元素的父元素是组件跟元素，通过 CSSSelector 定义"
        attach=".t-design-popup-attach"
      >
        <Button>点击查看我的父元素(CSSSelector)</Button>
      </Popup>
      <Popup
        trigger="click"
        content="触发元素的父元素是组件跟元素，通过 Function 定义"
        attach={() => document.querySelector('.t-design-popup-attach')}
      >
        <Button>点击查看我的父元素(Function)</Button>
      </Popup>
    </div>
  );
}

export default Attach;