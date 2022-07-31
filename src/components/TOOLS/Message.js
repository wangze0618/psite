import { createVNode, render } from "vue";
import myMessage from "./my-message.vue";

const div = document.createElement("div");
div.setAttribute("class", "my-message");
document.body.appendChild(div);

export default ({ title }) => {
  return new Promise((resolve, reject) => {
    // 点击按钮取消
    const close = () => {
      render(null, div);
      reject();
    };

    const vnode = createVNode(myMessage, { title, close });
    render(vnode, div);
    let timer = null;
    clearTimeout(timer);
    timer = setTimeout(() => {
      render(null, div);
    }, 5000);
  });
};
