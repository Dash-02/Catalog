import { useState, useEffect, useRef, useCallback } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datepickerStyles.css';
import DateInput from '../DateInput/DateInput.jsx';

import DropDowmEditor from "../DropDownEditor/DropDownEditor.jsx";
// import { sortedPriceObjects } from "../Sorting/Sorting";
import style from "./Editor.module.scss";

import { element } from "../FakeData/FakeData.js";
import iconAdvix from "../../assets/img/advix_photo.png";
import icoReload from "../../assets/icons/reload.svg";
import iconExclamation from "../../assets/icons/exclamation.svg"

export const Editor = () => {
  // let price = element[0].priceObjects[0].price
  // let count_subscribers const [timeRemaining, setTimeRemaining] = useState('');= element[0].count_subscribers
  // let views = element[0].views
  // let posts_count = element[0].posts_count

  // let aver_views_post = views / posts_count
  // let cpm = (price / aver_views_post) * 1000
  // let err = (aver_views_post / count_subscribers) * 100 // в процентах %

  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('');
  const [description, setDescription] = useState("");
  const [costAdverts, setCostAdverts] = useState(['', '', '']);
  const [save, setSave] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [timeRemaining, setTimeRemaining] = useState('');
  const [channel, setChannel] = useState('');
  // const [clicked, setClicked] = useState(false);
  const [indexY, setIndexY] = useState(0);
  const [clickedTypeTime, setClickedTypeTime] = useState({
    24: false,
    48: false,
    72: false,
    0: false,
    1: false,
    2: false,
  });
 //  =================== DROP DOWN ================================
  const categoryList = [
    "Telegram",
    "Новости и СМИ",
    "Литература",
    "Криптовалюта",
    "Искусство",
    "Путешествия",
    "Юмор и приколы",
  ];
  const default_argCategory = "Не выбрано";

  const langList = ["Русский", "Английский", "Арабский"];
  const default_argLang = "Не выбрано";

  const [selectedCategory, setSelectedCategory] = useState(default_argCategory);
  const [selectedLang, setSelectedLang] = useState(default_argLang);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleLangChange = (value) => {
    setSelectedLang(value);
  };
// =========================================================
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileName(shortenFileName(file.name));
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReloadPicture = () => {
    setImage(null);
    setFileName('');
    fileInputRef.current.value = '';
  };

  const shortenFileName = useCallback((name) => {
    const maxLength = 20;
    if (name.length <= maxLength) {
      return name;
    }
    const start = name.slice(0, 10);
    const end = name.slice(-10);
    return `${start}...${end}`;
  }, []);

  const handleReload = () => {
    setDescription("");
  };

  const handleCostAdvertsChange = (e) => {
    setCostAdverts(e.target.value);
  };

  const handleSave = () => {
    const lastEnteredPrice = costAdverts[costAdverts.length - 1];
    setSave(lastEnteredPrice);
    console.log('save: ', save)
  };

  const handleRemoveChannel = () => {
    setChannel('');
  };

  // useEffect(()=>
  // {
  //   const hand = setClickedTypeTime(condition.time)
  //   // condition.map(key => (
  //   //   handleTypeTime(key.time)
  // // ))
  //   // if (key) {
  //   //   setClickedTypeTime({[key] : true})
  //   // } else {
  //   //   setClickedTypeTime({[key] : false})
  //   // }
  //   // console.log(key)
  //   // console.log('usestate ', clickedTypeTime)
  // }, [clickedTypeTime])
  
  // useEffect(() =>
  // {

  // }, [setClickedTypeTime])

  // const handleTypeTime = (e) => {
    
  //   setClickedTypeTime(parseInt(e.target.value))
  //   // setClickedTypeTime({
  //   //   [key] : true})
  //   // key === condition.time ? (
  //   // setClickedTypeTime({[key]: false,})) : setClickedTypeTime({[key] : true})
  //   console.log(e)
  //   console.log('usestate ', clickedTypeTime)
  // };
  // const handleTypeTime = (e) => {
  //   const selectedTime = parseInt(e.target.value);

  //   setClickedTypeTime((prevState) => {
  //     const newState = { ...prevState };

  //     Object.keys(newState).forEach((key) => {
  //       newState[key] = false;
  //     });
  //     newState[selectedTime] = true;

  //     return newState;
  //   });
  //   console.log(e)
  //   console.log('usestate ', clickedTypeTime)
  // };

  const handleTypeTime = key => {
		setClickedTypeTime(prevState => {
			let newState = {
				24: false,
				48: false,
				72: false,
				0: false,
				1: false,
				2: false,
			}
			newState[key] = true
			return newState
		})
    console.log(key)
    console.log('usestate ', clickedTypeTime)
	}


  // const timeLabels = {
  //     24: "1/24",
  //     48: "1/48",
  //     72: "1/72",
  //     0: "натив",
  //     1: "репост",
  //     2: "б/уд",
  //   };

  const condition = [
    {
      time: 24,
      state: true
    }, 
    {
      time: 48, 
      state: false
    },
    {
      time: 72,
      state: false
    }, 
    {
      time: 0,
      state: false
    }, 
    {
      time: 1,
      state: false
    }, 
    {
      time: 2,
      state: false
    }, 
]
const priceSettings = [
    {
      id: 1,
      default_price: null,
      current_time: 24,
      hot_price: null,
      hot_date: null
    },
    {
      id: 2,
      default_price: null,
      current_time: null,
      hot_price: null,
      hot_date: null
    },
    {
      id: 3,
      default_price: null,
      current_time: null,
      hot_price: null,
      hot_date: null
    }
]

useEffect(() => {
  const updateRemainingTime = () => {
    if (!startDate) return;

    const now = new Date();
    const distance = startDate - now;

    if (distance < 0) {
      setTimeRemaining('00:00:00');
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTimeRemaining(
      `${days > 0 ? days + 'дн ' : ''}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    );
  };

  const interval = setInterval(updateRemainingTime, 1000);
  updateRemainingTime(); // обновляем сразу после изменения даты

  return () => clearInterval(interval);
}, [startDate]);

  return (
    <>
      <div className={style.editor}>
        {/* ======= Header ======= */}
        <header className={style.headerEditor}>
          <div className={style.logoEditor}>
            <img src={iconAdvix} alt="iconAdvix" />
            <span>Advix: новости</span>
          </div>
          {(selectedCategory === default_argCategory || selectedLang === default_argLang) ? <div className={style.imgExclamation}><img src={iconExclamation} alt="!" /><span>Укажите категорию, язык и стоимость рекламы, чтобы канал появился в каталоге</span></div> : ''} {/*должно пропадать когда выполнены условия */}
          <div className={style.headerBtn}>
            <button className={style.btnPublish}>ОПУБЛИКОВАТЬ</button>
            <button className={style.btnDraft}>ЧЕРНОВИК</button>
          </div>
        </header>

        <div className={style.editorContent}>
          {/* ======= Block 1 paramsChannel ======= */}
          <div className={style.paramsChannel}>
            <span className={style.paramsHeader}>Параметры канала</span>
            <div className={style.paramsContent}>
              <div className={style.item}>
                <span>Обложка</span>
                <button className={style.reloadBtn} onClick={handleReloadPicture}>
                  <img
                    src={icoReload}
                    alt="iconReload"
                    className={style.imgIcon}
                  />
                </button>
                <button className={style.btnDownload} onClick={handleButtonClick}>
                  {!image ? 'Загрузить': fileName}
                  {image && <img src={image} alt="cover" className={style.previewCover} />}
                </button>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </div>
      {/* ======= DROP DOWN ============== */}
              <div className={style.item}>
                <span>Категория</span>
                <DropDowmEditor
                  default_arg={default_argCategory}
                  args={categoryList}
                />
              </div>

              <div className={style.item}>
                <span>Язык</span>
                <DropDowmEditor default_arg={default_argLang} args={langList} />
              </div>
      {/* ================================ */}
              <div className={style.item}>
                <span>Описание</span>
                <button className={style.reloadBtn} onClick={handleReload}>
                  <img
                    src={icoReload}
                    alt="iconReload"
                    className={style.imgIcon}
                  />
                </button>
                <textarea
                  className={style.description}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  maxLength={255}
                  cols="5"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>

          {/* ======= element 1 Block 2 costAdvertising ======= */}
          <div className={style.costAdvertising}>
            <span className={style.paramsHeader}>
              Стоимость рекламы на обычных условиях
            </span>
            {priceSettings.map((el) => 
            <div className={style.advertisingContent} key={el.id}>
              <div className={style.itemAdv}>
                <span className={style.number}>{el.id}</span>
                <div className={style.advertisingItem}>
                  <label htmlFor="costAdver">
                    <input
                      type="number"
                      id="costAdver"
                      className={style.inputCost}
                      placeholder="Введите стоимость"
                      value={costAdverts} //default_price
                      onChange={handleCostAdvertsChange}
                    />
                  </label>
                  {
                    el.id === 1 ? <select className={style.btnSale}
                                    onChange={(e) =>
                                      handleTypeTime(parseInt(e.target.value))
                                  }>
                                  {condition.map(item => (
                                  item.time === 24 ? (
                                  <option key={item.time} value={item.time}>
                                  {'1/24'}
                                  </option>
                                  ) : null
                              ))}
                                  </select> : <select className={style.btnSale}
                                    onChange={handleTypeTime}>
                                  {condition.map(item => (
                                    item.state === true ? null : (
                                  <option key={item.time} value={item.time}>
                                  {item.time === 48 ? '2/48' : ''}
                                  {item.time === 72 ? '4/72' : ''}
                                  {item.time === 0 ? 'б/уд' : ''}
                                  {item.time === 1 ? 'натив' : ''}
                                  {item.time === 2 ? 'репост' : ''} {/*{console.log(item.state)} */}
                                  </option>)
                              ))}
                                  </select>
                  }
                  
                  <button className={style.btnCost} onClick={handleSave}>СОХРАНИТЬ</button>
                </div>
              </div>
            </div>)}

            {/* ====== element 3 block 2 ====== */}
            {/* <div className={style.advertisingContent}>
              <div className={style.itemAdv}>
                <span className={style.number}>3</span>
                <div className={style.advertisingItem}>
                  <label htmlFor="costAdver">
                    <input
                      type="number"
                      id="costAdver"
                      className={style.inputCost}
                      placeholder="Введите стоимость"
                      value={costAdverts}
                      onChange={handleCostAdvertsChange}
                    />
                  </label>

                  <div className={style.priceType}> */}
                    {/* {sortedPriceObjects(element[0].priceObjects).map(
					                (time, index) =>
						                time.hot === false && (
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
				                )} */}
                    {/* <select
                      onChange={(e) =>
                        handleClickedTypePrice(parseInt(e.target.value))
                      }
                    >
                      {sortedPriceObjects(element[0].priceObjects)
                        .filter((time) => !time.hot)
                        .map((time, index) => {
                          console.log("time:", time.time);
                          return (
                            <option key={index} value={time.time}>
                              {time.time === 24 && "1/24"}
                              {time.time === 48 && "1/48"}
                              {time.time === 72 && "1/72"}
                              {time.time === 0 && "натив"}
                              {time.time === 1 && "репост"}
                              {time.time === 2 && "б/уд"}
                              {time.hot_date}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <button className={style.btnCost}>СОХРАНИТЬ</button>
                </div>
              </div>
            </div> */}
          </div>
          {/* ====== element 1 block 3 ====== */}
          <div className={style.salesBlock}>
            <span className={style.paramsHeader}>
              Создать горящее предложение &#128293;
            </span>
            <div className={style.salesContent}>
              <div className={style.itemSale}>
                <label htmlFor="costAdver">
                  <input
                    type="number"
                    id="costAdver"
                    className={style.inputCost}
                    placeholder="Введите стоимость"
                    // value={}
                    // onChange={handleCostAdvertsChange}
                  />
                </label>

                <div className={style.saleElement}>
                  20% скидка
                </div>
                <div className={style.saleElement}>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd.MM.yyyy"
                    className={style.datePicker}
                    customInput={<DateInput className={style.dateInput}/>}
                  />
                </div>
                <div className={style.saleElement}>
                  {timeRemaining}
                </div>
                <button className={style.btnStart}>ЗАПУСТИТЬ</button>
              </div>
            </div>
            <div className={style.horizontalLine}></div>
          </div>
        </div>

        <div className={style.wrapperBtnDelete}>
          <button className={style.btnDelete} onClick={handleRemoveChannel}>
            УДАЛИТЬ
          </button>
        </div>
        
      </div>
    </>
  );
};