import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    flexWrap: 'nowrap',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '90%',
    height: '90%',
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  webview: { flex: 1 },
  closeButtonView: {
    padding: 10,
    alignSelf: 'flex-start',
  },
});

export default styles;
