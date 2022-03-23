import { useEffect, useState } from "react"
import { Button } from "theme-ui"
import { navigate } from "gatsby-link"


const TempuratureButton = ({metric}) => {
  const [label, setLabel] = useState()
  const [variant, setVariant] = useState()

  const updateDefaultTemp = (event, temp) => {
    event.preventDefault()
    localStorage.setItem("defaultTempMetric", temp)
    const currentPath = window && window.location.pathname
    console.log(currentPath)
    if (currentPath !== '/' && currentPath.slice(-1) !== temp) {
      navigate( currentPath.substr(0, currentPath.length-1) + temp)
    } else {
      // @todo
      window.location.href = currentPath
    }
  }

  useEffect(() => {
    const temp = localStorage.getItem("defaultTempMetric") ? localStorage.getItem("defaultTempMetric") : 'c'
    setLabel(metric === 'c' ? '℃': '℉')
    setVariant(metric === temp ? 'primary' : 'link')
  }, [])

  return (
    <Button variant={variant} onClick={event => {
      updateDefaultTemp(event, metric)
    }}>
      {label}
    </Button>
  )
}

export default TempuratureButton