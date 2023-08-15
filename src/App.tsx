import CryButton from './basic-components/CryButton';
import { ButtonStyle } from './basic-components/consts';
import { showConfetti } from './utils/global-confetti';
import {
  GlobalToaster,
  showErrorToast,
  showRegularToast,
  showSuccessToast,
} from './utils/global-toasts';

function App() {
  const handleButtonClick = () => {
    showSuccessToast('Hello World');
    showErrorToast('Hello World');
    showRegularToast('Hello World');
    showConfetti();
  };

  return (
    <main className='bg-gray-800 h-screen overflow-hidden'>
      <GlobalToaster richColors position='bottom-center' closeButton />

      <h1 className='bg-gray-900 text-white text-center p-2 rounded-2xl m-5'>
        Fernando el mancazo
      </h1>
      <CryButton
        onClick={handleButtonClick}
        styleClass={ButtonStyle.DANGER}
        text='Dale clic'
        disabled={true}
      ></CryButton>
    </main>
  );
}

export default App;
