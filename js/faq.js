const selectors = {
  root: '.faq__block',
  answer: '.faq__answer',
  toggleButton: '.faq__toggle',
};

const stateClasses = {
  answer: {
    isClosed: 'faq__answer--closed',
    isOpen: 'faq__answer--open'
  },
  toggleButton: {
    isClosed:'faq__toggle--closed',
    isOpen:'faq__toggle--open'
  }
};

const toggle = ({target}) => {
  
  const faqItemNode = target.closest(selectors.root);
  const answerNode = faqItemNode.querySelector(selectors.answer)
  const toggleButtonNode = faqItemNode.querySelector(selectors.toggleButton)

  const isOpen = answerNode.classList.contains(stateClasses.answer.isOpen)

  answerNode.classList.toggle(stateClasses.answer.isClosed, isOpen)
  toggleButtonNode.classList.toggle(stateClasses.toggleButton.isClosed, isOpen)
  answerNode.classList.toggle(stateClasses.answer.isOpen, !isOpen)
  toggleButtonNode.classList.toggle(stateClasses.toggleButton.isOpen, !isOpen)

};

const initFaqToggle = () => {
  const rootNodes = document.querySelectorAll(selectors.root)

  rootNodes.forEach((node) => {
    node.addEventListener('click', toggle)
  })
};

window.addEventListener('DOMContentLoaded', initFaqToggle);

