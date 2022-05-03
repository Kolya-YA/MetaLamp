export function dropdown() {
    console.log("DD")

    const pluralWords = ({few, one, two}) => {
        const titles = [one, two, few];
      
        return (number) => {
          const cases = [2, 0, 1, 1, 1, 2];
      
          return titles[
            number % 100 > 4 && number % 100 < 20
              ? 2
              : cases[number % 10 < 5 ? number % 10 : 5]
          ];
        };
      };

    const dropdownWigets = document.querySelectorAll('.dropdown-widget')

    const ddwHandler = e => {
        if (e.target.classList.contains('dropdown-item__btn')) {
            const minVal = +e.target.parentElement.dataset.minval
            const maxVal = +e.target.parentElement.dataset.maxval

            if (e.target.classList.contains('dropdown-item__btn--plus')) {
                if (+e.target.nextSibling.textContent < maxVal)
                e.target.nextSibling.textContent++
            } else if (e.target.classList.contains('dropdown-item__btn--minus')) {
                if (+e.target.previousSibling.textContent > minVal)
                e.target.previousSibling.textContent--
            }

            e.target.parentElement.parentElement.parentElement.childNodes.forEach(item => {
                if (item.classList.contains('dropdown-item')) {
                    console.log(item.querySelector('.dropdown-item__qty').textContent)

                }
            })
        }
    }

    dropdownWigets.forEach(w => {
        w.addEventListener('click', ddwHandler)
    })
}