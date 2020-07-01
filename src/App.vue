<template>
    <div class="vue-container">
        <h1>Hello App.vue</h1>
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
        <button @click="emptyEditor">Empty the editor</button>
        <button @click="sendPost">Send</button>
    </div>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
// import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
// import Image from "@ckeditor/ckeditor5-image/src/image";
// import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
// import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock";
// import MyCKEditor from "./modules/myCkEditor.js";

// import EssentialsPlugin from "@ckeditor/ckeditor5-essentials/src/essentials";
// import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
// import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
// import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
// import ParagraphPlugin from "@ckeditor/ckeditor5-paragraph/src/paragraph";

export default {
    data() {
        return {
            editor: ClassicEditor,
            editorData: "<p>Hello</p>",
            editorConfig: {
                // plugins: [
                //     EssentialsPlugin,
                //     BoldPlugin,
                //     ItalicPlugin
                //     // LinkPlugin,
                //     // ParagraphPlugin
                // ],
                extraPlugins: [
                    function(editor) {
                        console.log("ewqeqw ediotr", editor.plugins);
                        editor.plugins.get(
                            "FileRepository"
                        ).createUploadAdapter = loader => {
                            return new MyUploadAdapter(loader);
                        };
                    }
                ],
                toolbar: {
                    items: [
                        "heading",
                        "|",
                        "bold",
                        "italic",
                        "link",
                        "bulletedList",
                        "numberedList",
                        "|",
                        "blockQuote",
                        "insertTable",
                        "imageUpload",
                        "mediaEmbed",
                        "undo",
                        "redo",
                        "alignment",
                        "codeBlock"
                    ]
                },
                // codeBlock: {
                //     languages: [
                //         { language: "css", label: "css" },
                //         { language: "html", label: "html" }
                //     ]
                // }
                codeBlock: {
                    languages: [
                        { language: "css", label: "CSS" },
                        { language: "html", label: "HTML" },
                        { language: "javascript", label: "Javascript" }
                    ]
                }
                // language: "en"
            }
        };
    },
    created() {
        console.log(
            "this.editor? ",
            this.editor.builtinPlugins.map(item => item.pluginName)
        );
        // console.log("BoldPlugin? ", BoldPlugin);
    },
    methods: {
        emptyEditor() {
            this.editorData = "";
        },
        sendPost() {
            console.log(this.editorData);
        }
    }
};

class MyUploadAdapter {
    constructor(loader) {
        console.log("constructor loader? ", loader);
        this.loader = loader;
    }

    upload() {
        console.log("MyUploadAdapter upload called", this.loader);

        return this.loader.file.then(file => {
            console.log("return loader.file");
            return new Promise((resolve, reject) => {
                resolve();
            });
        });
    }

    abort() {
        console.log("abort");
    }
}
</script>