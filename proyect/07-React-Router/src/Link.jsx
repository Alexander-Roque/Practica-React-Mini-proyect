import { EVENT } from "./consts"
import { BUTTON } from "./consts"


function navigate (href){
  window.history.pushState({},'',href)
  const navigativeEvent = new Event(EVENT.PUSHSTATE)
  window.dispatchEvent(navigativeEvent)
}

export function Link ({target, to , ...props}) {
  function handleClick (event) {
    const isMainEvent = event.button === BUTTON.primary;
    const isModifiedEvent = event.metakey || event.altkey || event.ctrlKey || event.shiftKey;
    const isManageableEv = target === undefined || target === '_self'

    if(isMainEvent && isManageableEv && !isModifiedEvent){
      event.preventDefault()
      navigate(to)
    }
  }
  return <a onClick={handleClick} href={to} target={target} {...props}/>

}
