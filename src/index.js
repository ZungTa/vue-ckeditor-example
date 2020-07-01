console.log('index.js')
import Vue from 'vue';
import App from './App.vue';
import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.use(CKEditor);

const app = new Vue({
    el: '#app',
    render: h => h(App),
});