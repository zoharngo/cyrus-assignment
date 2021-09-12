import React from 'react';
import { Modal, View, ActivityIndicator, Text, TouchableWithoutFeedback } from 'react-native';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { WebView } from 'react-native-webview';
import styles from './web-view-modal.style';

function WebViewModal() {
  const { showModalAction } = useStoreActions((actions) => actions.stacklOverflowSearchReducer);

  const {
    data: {
      modalView: { visible, uri },
    },
  } = useStoreState((state) => state.stacklOverflowSearchReducer);

  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modal}>
        <View style={styles.modalContainer}>
          <View style={styles.closeButtonView}>
            <TouchableWithoutFeedback
              onPress={() => {
                showModalAction({
                  visible: false,
                  uri: '',
                });
              }}
            >
              <Text>X</Text>
            </TouchableWithoutFeedback>
          </View>

          <WebView
            renderLoading={<ActivityIndicator color='#009688' size='large' style={styles.activityIndicatorStyle} />}
            style={styles.webview}
            source={{ uri }}
          />
        </View>
      </View>
    </Modal>
  );
}

export default WebViewModal;
