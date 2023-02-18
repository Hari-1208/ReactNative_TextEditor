import ckeditor from './ckeditor';
import {Dimensions} from 'react-native';
import {colors} from '../utils/themes';
import {ToolBar_Config} from '../utils/constants';

const customColors = {
  backgroundColor: colors.white,
  offContentBackgroundColor: colors.grey,
  color: colors.black,
  bg5: colors.green,
};
const {height} = Dimensions.get('screen');
const editorHeight = height * 0.75;

const editorConfig = {
  toolbar: ToolBar_Config,
  ckfinder: {
    uploadUrl:
      'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json',
  },
};

const customHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>CKEditor</title>
            <script src="https://ckeditor.com/apps/ckfinder/3.5.0/ckfinder.js"></script>
            <script >
            ${ckeditor}
            </script>
            <script>
              document.addEventListener("message", function(data) {
                console.log(data.data);
                editor.setData(data.data);
              });
            </script>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <style>
              .ck-editor__editable {
                  height: ${editorHeight}px;
                  max-height: ${editorHeight}px;
              }
              .ck.ck-editor__main>.ck-editor__editable {
                background: ${colors.white};
                color: ${colors.black};
                font-family: ${'-apple-system, "Helvetica Neue", "Lucida Grande"'};
                border-style: none;
              }
              .ck .ck-toolbar {
                background: ${customColors.offContentBackgroundColor};
                border: 0px;
              }
              .ck.ck-reset_all, .ck.ck-reset_all * {
                color: ${colors.black}
              }
              .ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused {
                border: 1px;
              }
              .ck-toolbar .ck-on .ck.ck-icon, .ck-toolbar .ck-on .ck.ck-icon * { 
                color: ${customColors.bg5} !important; 
              }
              .ck-toolbar .ck-button:hover .ck.ck-icon, .ck-toolbar .ck-button:hover .ck.ck-icon * {
                color: ${customColors.bg5}; 
              }
              ${''}
            </style>
        </head>

        <body>
        <textarea name="editor1" placeholder="Enter text here..." id="editor1"></textarea>
        <script>
        ClassicEditor
            .create( document.querySelector( '#editor1' ),${JSON.stringify(
              editorConfig,
            )})
            .then( editor => {
                console.log( editor );
                window.editor = editor;
                editor.model.document.on('change:data', () => {
                  try {
                    window.ReactNativeWebView.postMessage(editor.getData())
                  }
                  catch (e) {
                    alert(e)
                  }
                } );
                
            } )
            .catch(error => {
                console.error( error );
            });
        </script>
        </body>
        </html>`;

export default customHTML;
