window.addEventListener('DOMContentLoaded', () => {

    const faqBlocks = document.querySelectorAll('.faq__block');
     
    const toggle = function () {
      
      // Проверяю скрыт ли ответ. 
      if (this.querySelector('.faq__answer').classList.contains('faq__answer--closed'))

      {
      // Если скрыт - открываю. Добавляю и удаляю соотв. классы
      this.querySelector('.faq__answer').classList.remove('faq__answer--closed');
      this.querySelector('.faq__answer').classList.add('faq__answer--open');
      this.querySelector('.faq__toggle').classList.remove('faq__toggle--closed');
      this.querySelector('.faq__toggle').classList.add('faq__toggle--open');
      
    } else {
      // Если открыт - закрываю. Добавляю и удаляю соотв. классы
      this.querySelector('.faq__answer').classList.remove('faq__answer--open');
      this.querySelector('.faq__answer').classList.add('faq__answer--closed');
      this.querySelector('.faq__toggle').classList.remove('faq__toggle--open');
      this.querySelector('.faq__toggle').classList.add('faq__toggle--closed');
    }
        
    };
   
    faqBlocks.forEach((block) => {
      block.addEventListener('click', toggle )         
    });

});
