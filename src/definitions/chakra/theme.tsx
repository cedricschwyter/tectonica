import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const styles = {
  global: {
    body: {
      bg: 'white'
    },
  },
}

const theme = extendTheme({
  config,
  styles
});

export default theme;