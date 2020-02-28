import Vue from 'vue';
import App from './App.vue';
import Eagle, { Options, CodeBlock } from 'eagle.js';
import hljs from 'highlight.js';
import 'animate.css';
import '@/assets/css/tailwind.css';

Vue.config.productionTip = false;
Vue.use(Eagle);
Eagle.use(CodeBlock);
Options.hljs = hljs;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
