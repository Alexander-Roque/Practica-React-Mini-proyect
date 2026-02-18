import * as React from "react"
import "./Filter.css"

export function Filter({onChangeFilter}) {
    const [mainPrice, setMainPrice] = React.useState(0);

    const mainPriceId = React.useId()
    const filterCatergoryId = React.useId()

    function onChangeMainPrice(event){
        setMainPrice(event.target.value)
        onChangeFilter(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    function handleChangeCategory(event){
        onChangeFilter(prevState => ({
            ...prevState,
            category:event.target.value
        }))
    }

    return(
        <section className="filters">
            <div>
                <label htmlFor={mainPriceId}>Precio</label>
                <input 
                type="range"
                id={mainPriceId}
                min="0"
                max="1000"
                onChange={onChangeMainPrice} />
                <span>${mainPrice}</span>
            </div>
            <div>
                <label htmlFor={filterCatergoryId}>Category</label>
                <select id={filterCatergoryId} onChange={handleChangeCategory}>
                    <option value="all">Todos</option>
                    <option value="smartphones">Celulares</option>
                    <option value="laptops">Portatiles</option>
                </select>
            </div>
        </section>
    )
}
