<template>
  <div class="about">
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
      @change="onEditorChange($event)">
    </quill-editor>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  name: 'about',
  data () {
    return {
      content: null,
      editorOption: {}
    }
  },
  components: {
    quillEditor
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
