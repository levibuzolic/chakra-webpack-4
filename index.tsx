import {createRoot} from 'react-dom/client';
import {Button, useTheme} from '@chakra-ui/react';
import {ChakraProvider} from '@chakra-ui/react';

const TestComponent = () => {
  const theme = useTheme();

  const themeString = JSON.stringify(theme, null, 2);

  return (
    <>
      <Button>{themeString === '{}' ? 'Theme is empty, this is broken 😭' : 'Looks like it’s working, yay!'}</Button>
      <pre>{JSON.stringify(theme, null, 2)}</pre>
    </>
  );
};

const root = document.getElementById('root');
if (root instanceof HTMLElement)
  createRoot(root).render(
    <ChakraProvider>
      <TestComponent />
    </ChakraProvider>,
  );
