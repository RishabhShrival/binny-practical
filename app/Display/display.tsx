import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../_layout';

export default function Display() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <>
    </>
  );
}