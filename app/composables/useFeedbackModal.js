export const useFeedbackModal = () => {
  const isOpen = useState('feedbackModalIsOpen', () => false)

  function open() {
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  return { isOpen, open, close }
}
