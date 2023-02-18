import React from 'react';
import {View, SafeAreaView} from 'react-native';

import WebView from 'react-native-webview';

import styles from './styles';

import customHTML from '../../components/customHtml';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as EditorActions from '../../redux/actions/editorActions';

function HomeScreen(props) {
  const {data, actions} = props;

  const handleOnChange = content => {
    actions.onDataChange(content);
  };

  const onMessage = event => {
    const data = event.nativeEvent.data;
    handleOnChange(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.editorContainer}>
        <WebView
          style={styles.editorStyles}
          source={{html: customHTML}}
          onMessage={onMessage}
          javaScriptEnabled
          injectedJavaScript={
            data?.contentData
              ? `window.editor.setData(\`${data?.contentData.replace(
                  "'",
                  "\\'",
                )}\`); true;`
              : null
          }
        />
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({
  data: state.editorReducer,
});

const Actions = {
  ...EditorActions,
};

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(Actions, dispatch)};
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
