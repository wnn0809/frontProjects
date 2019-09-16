<template>
  <div class="about">
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
      @change="onEditorChange($event)">
    </quill-editor>
    <!-- tinymce富文本 -->
    <div class="tinymce">
      <Editor id="tinymce" v-model="tinymceHtml" :init="init"></Editor>
    </div>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 引入tinymce
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver'
// 引入tinymce插件
import 'tinymce/plugins/image'
import 'tinymce/plugins/media'
import 'tinymce/plugins/table'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/help'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/print'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/hr'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/pagebreak'
import 'tinymce/plugins/spellchecker'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/visualchars'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/nonbreaking'
import 'tinymce/plugins/autosave'
import 'tinymce/plugins/fullpage'
import 'tinymce/plugins/toc'

export default {
  name: 'about',
  data () {
    return {
      content: null,
      editorOption: {},
      // tinymac
      init: {
        selector: 'Editor',
        // language_url: '/tinymce/langs/zh_CN.js',
        // language: 'zh_CN',
        // disabled: true,
        skin_url: '/tinymce/skins/ui/oxide',
        height: 500,
        menubar: false,
        browser_spellcheck: true,
        branding: false,
        statusbar: false,
        elementpath: false,
        paste_data_images: true,
        plugins:
        'lists image media table wordcount code fullscreen help  toc fullpage autosave nonbreaking insertdatetime visualchars visualblocks searchreplace spellchecker pagebreak link charmap paste print preview hr anchor',
        toolbar: [
          'newdocument undo redo | formatselect visualaid|cut copy paste selectall| bold italic underline strikethrough |codeformat blockformats| superscript subscript  | forecolor backcolor | alignleft aligncenter alignright alignjustify | outdent indent |  removeformat ',
          'code  bullist numlist | lists image media table link |fullscreen help toc fullpage restoredraft nonbreaking insertdatetime visualchars visualblocks searchreplace spellchecker pagebreak anchor charmap  pastetext print preview hr'
        ]
      },
      tinymceHtml: ''
    }
  },
  components: {
    quillEditor,
    // 引入tinymac组件
    Editor
  },
  mounted () {
    tinymce.init({})
  },
  methods: {
    onEditorReady (editor) {
      // 准备编辑器
      console.log('111')
    },
    onEditorBlur () {
      // 失去焦点事件
      console.log('111')
    },
    onEditorFocus () {
      // 获得焦点事件
      console.log('222')
    },
    onEditorChange () {
      // 内容改变事件
      console.log('333')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
