import Clipboard from '@react-native-community/clipboard';

export const copyToClipboard = (content: string) => {
  Clipboard.setString(content);
};
