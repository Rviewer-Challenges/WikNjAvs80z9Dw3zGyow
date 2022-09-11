import {useState, useEffect} from 'react';
import Joyride, { STATUS } from 'react-joyride';

const steps = [
  {
    content: 'RateIt es una aplicación para valorar cursos y educadores del ámbito IT y así poder ayudar a la gente que quiere aprender, facilitándoles la búsqueda de la mejor educación para ellos.',
    locale: { skip: <strong aria-label="skip">Salir</strong> },
    placement: 'center',
    target: 'body',
    title: 'Bienvenido a RateIT',
  },
  {
    content: 'Para poder valorar los cursos y educadores primero se tienen que añadir. Cualquier persona puede publicar de manera que la comunidad hará grande esta plataforma. Lo único que tienes que hacer es pulsar aquí y rellenar los campos.',
    floaterProps: {
      disableAnimation: true,
    },
    spotlightPadding: 20,
    target: '.add_button',
    title: 'Añadir cursos y educadores:',
    placement: 'top',
  },
  {
    content: 'Para filtrar haz clic en este icono y te saldrán todas las opciones disponibles para filtrar y ordenar los diferentes cursos y educadores.',
    placement: 'bottom',
    target: '.filter_button',
    title: 'Filtrar:',
  },
  {
    content: 'Haciendo clic en nuestro logo podrás volver siempre a esta página.',
    target: '.main_logo',
    placement: 'bottom',
    title: 'Logo:',
  },
  {
    content: 'En este apartado podrás ver los resultados de tu búsqueda. Si haces clic en un elemento de la lista podrás ver su información y sus valoraciones. En el caso de los cursos también te da información del educador, si haces clic en esa zona te mostrará la información del educador.',
    placement: 'bottom',
    target: '.list div',
    title: 'Lista:'
  },
]

function addToLocalStorage() {
  localStorage.setItem('tour-shown', JSON.stringify(true));
}

function showTour() {
  const shown = JSON.parse(localStorage.getItem('tour-shown'))

  return !shown
}

export default function JoyrideItem() {
  const [run, setRun] = useState(false);

  useEffect(() => {
    handleStart();
  }, []);

  const handleStart = () => {
    const show = showTour()
    if(show) {
      setRun(true);
    }
  };

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setRun( false );
      addToLocalStorage();
    }
  };

  return (
    <Joyride
      callback={handleJoyrideCallback}
      continuous
      hideCloseButton
      run={run}
      scrollToFirstStep
      showProgress
      showSkipButton
      steps={steps}
      styles={{
        options: {
          zIndex: 10000,
        },
      }}
    />
  )
}
