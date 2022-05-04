export function dropdown() {
    console.log("Dropdown")

    const pluralWords = number => {
        const cases = [2, 0, 1, 1, 1, 2];
    
        return number % 100 > 4 && number % 100 < 20
            ? 2
            : cases[number % 10 < 5 ? number % 10 : 5]
    };

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
            
            const items = []
            const onePlural = e.currentTarget.dataset.plural && JSON.parse(e.currentTarget.dataset.plural)
            
            e.target.parentElement.parentElement.parentElement.childNodes.forEach(item => {
                if (item.classList.contains('dropdown-item')) {
                    items.push([
                        item.childNodes[1].childNodes[1].textContent,
                        item.childNodes[0].textContent
                    ])
                }
            })

            const placeholder = e.currentTarget.childNodes[1].firstChild.firstChild.dataset.placeholder
            if (onePlural) {
                const sum = items.reduce((acc, x) => acc + +x[0], 0)
                const dropdownValue = `${sum} ${onePlural[pluralWords(sum)]}`
                console.log(dropdownValue)
                // e.target.parentElement.parentElement.parentElement.previousSibling.firstChild.textContent = dropdownValue
                e.currentTarget.childNodes[1].firstChild.firstChild.textContent = sum 
                    ? dropdownValue
                    : placeholder
            } else console.log((items.toString()))
        }        
    }

    document.querySelectorAll('.dropdown-widget').forEach(w => {
        w.addEventListener('click', ddwHandler)
    })
}
