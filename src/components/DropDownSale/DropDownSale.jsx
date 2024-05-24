import { useEffect, useRef, useState } from 'react'

import style from './DropDownSale.module.scss'

const DropDownSale = ({ default_arg, args }) => {

    const [clicked, setClicked] = useState(false)
	const [clickedHidden, setClickedHidden] = useState(false)

    const refsLi = useRef([])
	let catMenu = useRef()

	const [selectedElement, setSelectedElement] = useState('')
	const [selectedElementIndex, setSelectedElementIndex] = useState(null)

	useEffect(() => {
		let handler = e => {
			if (!catMenu.current.contains(e.target)) {
				setClickedHidden(false)
			}
		}

		document.addEventListener('mousedown', handler)

		return () => {
			document.removeEventListener('mousedown', handler)
		}
	})

	const handleClickedElement = (element, index) => {
		setClicked(true)
		if (selectedElementIndex === index) {
			setSelectedElement('')

			setSelectedElementIndex(null)
			setClicked(false)
		} else {
			setSelectedElement(element)
			setSelectedElementIndex(index)
		}
	}

	const handleClickedHidden = () => {
		setClickedHidden(!clickedHidden)
	}

	const handleReload = () => {
		setSelectedElement('')
		setSelectedElementIndex(null)
		setClicked(false)
	}

    return (
        <>
            <div className={style.dropDownWrapper}>
                <div ref={catMenu} className={style.wrapperDropDown}>
				    <button className={style.btnSort} onClick={handleClickedHidden}>
					    {!clicked ? default_arg : selectedElement}
					    <div
						    className={
							    clickedHidden
								    ? `${style.polygonDropDown}`
								    : `${style.polygonDropDownRotate}`
						    }
					    ></div>
				    </button>
				    {clickedHidden && (
					    <ul>
						    {args.map((element, index) => (
							    <li
								    key={index}
								    ref={el => (refsLi.current[index] = el)}
								    onClick={() => {
									    handleClickedElement(element, index)
								    }}
								    style={{
									    backgroundColor:
										    selectedElementIndex === index ? '#00a5e9' : 'transparent',
									    color: selectedElementIndex === index ? '#fff' : '#99a8b2',
								    }}
							    >
								    {element}
							    </li>
						    ))}
					    </ul>
				    )}
			    </div>
            </div>
        </>
    )
}

export default DropDownSale