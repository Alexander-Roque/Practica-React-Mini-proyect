import { Link } from "../Link"

const i18n = {
  es:{
    title: 'Sobre nosotros',
    button: 'Ir la home',
    description: '¡Hola! Me llamo Alexander Roque y estoy creando un clon de React Router'
  },
  en: {
    title: 'About us',
    button: 'go to Home',
    description: '¡HI! My name is Alexander Roque and I am creatin a clone of React Router'
  }
}

const useI18n = (lang)=> {
  return i18n[lang] || i18n.en
}

export default function About({routeParams}){
  const i18n = useI18n(routeParams.lang ?? 'es')

  return(
    <>
    <h1>{i18n.title}</h1>
    <div>
      <img src='../public/Cori.png' alt='Foto del rey Pixie'/>
    <p>{i18n.description}</p>
    </div>
    <Link to={'/'}>{i18n.button}</Link>
    </>
  )
}
