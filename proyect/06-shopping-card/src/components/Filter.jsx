import * as React from "react"
import "./Filter.css"
import { useFilters } from "../hooks/useFilters";

export function Filter() {
    const {filters ,setFilters} = useFilters() //estado global

    // const [mainPrice, setMainPrice] = React.useState(0); //estado local

    const mainPriceId = React.useId()
    const filterCatergoryId = React.useId()

    function onChangeMainPrice(event){
        // tenemos dos fuentes de la verdad
        // setMainPrice(event.target.value)
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    function handleChangeCategory(event){
        setFilters(prevState => ({
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
                onChange={onChangeMainPrice}
                value={filters.minPrice} />
                <span>${filters.minPrice}</span>
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
