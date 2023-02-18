import {StyleSheet} from 'react-native';
import {colors} from '../../utils/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  editorContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.green,
  },
  editorStyles: {backgroundColor: 'transparent'},
});

export default styles;
