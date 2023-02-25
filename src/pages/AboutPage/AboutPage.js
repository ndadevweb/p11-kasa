import { useEffect } from 'react'
import image from '../../assets/images/mountains.jpg'
import classes from './AboutPage.module.css'
import { Dropdown, HeaderImage } from '../../components/'
import {
  STATUS as DropdownStatus,
  OPTION_STYLE as DropdownOptionStyle
} from '../../components/Dropdown/Dropdown'

/**
 * AboutPage component
 *
 * @component
 *
 * @returns (<AboutPage>)
 */
export default function AboutPage() {
  const dropdownInformations = [
    { status: DropdownStatus.close, title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." },
    { status: DropdownStatus.open, title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
    { status: DropdownStatus.close, title: "Service", content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." },
    { status: DropdownStatus.close, title: "Responsabilité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
  ]

  const optionStyle = DropdownOptionStyle.large

  useEffect(() => {
    document.title = 'A propos'
  }, [])

  /**
   * Build list of dropdown components
   *
   * @param {Array[Object]} informations
   * @returns {Array[<Dropdown />]}
   */
  function dropdowns(informations) {
    return informations.map((information, index) =>
      <Dropdown
        title={ information.title }
        defaultStatus={ information.status }
        optionStyle={ optionStyle }
        key={ index }
      >
        <p className={ classes.dropdownInformationContent }>{ information.content }</p>
      </Dropdown>
    )
  }

  return (
    <>
      <HeaderImage image={ image } alternativeText="Mountains" />
      { dropdowns(dropdownInformations) }
    </>
  )
}
