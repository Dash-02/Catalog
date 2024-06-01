import { useEffect, useRef, useState } from 'react'

import { element } from '../FakeData/FakeData.js';
import { sortedPriceObjects } from '../Sorting/Sorting'

import style from './DropDownSale.module.scss'

const DropDownSale = ({ default_arg, args, sortedPriceObjects, element }) => {
	const [clicked, setClicked] = useState(false);
	const [clickedHidden, setClickedHidden] = useState(false);

	const refsLi = useRef([]);
	let catMenu = useRef();

	const [selectedElement, setSelectedElement] = useState('');
	const [selectedElementIndex, setSelectedElementIndex] = useState(null);

	const [indexY, setIndexY] = useState(0);
	const [clickedTypePrice, setClickedTypePrice] = useState({
		24: false,
		48: false,
		72: false,
		0: false,
		1: false,
		2: false,
	});

	useEffect(() => {
		let handler = e => {
			if (catMenu.current && !catMenu.current.contains(e.target)) {
				setClickedHidden(false);
			}
		};

		document.addEventListener('mousedown', handler);

		return () => {
			document.removeEventListener('mousedown', handler);
		};
	}, []);

	const handleClickedElement = (element, index) => {
		setClicked(true);
		if (selectedElementIndex === index) {
			setSelectedElement('');
			setSelectedElementIndex(null);
			setClicked(false);
		} else {
			setSelectedElement(element);
			setSelectedElementIndex(index);
		}
	};

	const handleClickedHidden = () => {
		setClickedHidden(!clickedHidden);
	};

	const handleClickedTypePrice = (key, index) => {
		setClickedTypePrice(prevState => {
			setIndexY(index);
			let newState = {
				24: false,
				48: false,
				72: false,
				0: false,
				1: false,
				2: false,
			};
			newState[key] = true;
			return newState;
		});
	};

	return (
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
									handleClickedElement(element, index);
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

			{element && element[0] && element[0].priceObjects && element[0].priceObjects[0] && (
				<div className={style.priceType}>
					{sortedPriceObjects(element[0].priceObjects[0]).map(
						(time, index) =>
							!time.hot && (
								<button
									key={index}
									className={
										clickedTypePrice[time.time]
											? style.clickedBtn
											: style.nonClickedButton
									}
									onClick={() => handleClickedTypePrice(time.time, index)}
								>
									{time.time === 24 && '1/24'}
									{time.time === 48 && '1/48'}
									{time.time === 72 && '1/72'}
									{time.time === 0 && 'натив'}
									{time.time === 1 && 'репост'}
									{time.time === 2 && 'б/уд'}
									{time.hot_date}
								</button>
							)
					)}
				</div>
			)}
		</div>
	);
};

export default DropDownSale;
