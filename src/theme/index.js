import { DefaultTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectThemeMode } from '../redux/themeSlice';

const light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    light400: '#a8a29e',
    primary700: '#0e7490',
  },
};

const dark = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    light400: '#fff', // 根据需要修改为暗模式下的颜色值
    primary700: '#17A5CC', // 根据需要修改为暗模式下的颜色值
  },
};

const Theme = () => {
  const themeMode = useSelector(selectThemeMode);

  return themeMode === 'light' ? light : dark;
};

export default Theme;
