import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Slot } from 'expo-router';

export default () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Slot />
    </ApplicationProvider>
  )
}
