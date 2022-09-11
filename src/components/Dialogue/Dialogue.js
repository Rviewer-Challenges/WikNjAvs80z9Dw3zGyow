import { FaTimes } from 'react-icons/fa';
import { DialogueBackground, Dialogue, CloseButton } from './styles'

export default function dialogue({show, close, children}) {
  function closeDialogue (e) {
    if (e.target.id === 'dialogue-background' || e.target.id === 'dialogue-close') {
      close()
    }
  }
  return show && <DialogueBackground id="dialogue-background" onClick={closeDialogue}>
      <Dialogue id="dialogue">
        <CloseButton id="dialogue-close" onClick={closeDialogue}>
          <FaTimes id="dialogue-close" />
        </CloseButton>
        {children}
      </Dialogue>
    </DialogueBackground>
}