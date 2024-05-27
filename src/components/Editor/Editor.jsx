import { useState, useEffect, useRef } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datepickerStyles.css';
import DateInput from '../DateInput/DateInput.jsx';

import DropDowmEditor from "../DropDownEditor/DropDownEditor.jsx";
import { sortedPriceObjects } from "../Sorting/Sorting";
import style from "./Editor.module.scss";

import { element } from "../FakeData/FakeData.js";
import iconAdvix from "../../assets/img/advix_photo.png";
import icoReload from "../../assets/icons/reload.svg";
import iconExclamation from "../../assets/icons/exclamation.svg"

export const Editor = () => {
  // let price = element[0].priceObjects[0].price
  // let count_subscribers = element[0].count_subscribers
  // let views = element[0].views
  // let posts_count = element[0].posts_count

  // let aver_views_post = views / posts_count
  // let cpm = (price / aver_views_post) * 1000
  // let err = (aver_views_post / count_subscribers) * 100 // в процентах %

  // block-1, button adding picture
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('');

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

  // function for block-1 adding picture name
  const shortenFileName = (name) => {
    const maxLength = 20;
    if (name.length <= maxLength) {
      return name;
    }
    const start = name.slice(0, 10);
    const end = name.slice(-10);
    return `${start}...${end}`;
  };

  // block-1, input with discription
  const [description, setDescription] = useState("");
  
  const handleReload = () => {
    setDescription("");
  };

  // block-2, input with cost adverts
  const [costAdverts, setCostAdverts] = useState('');

  const handleCostAdvertsChange = (event) => {
    setCostAdverts(event.target.value);
  }

  // choose date in calendar, block-3
  const [startDate, setStartDate] = useState(new Date());

  // button Remove card
  const [channel, setChannel] = useState('');
  const handleRemoveChannel = () => {
    setChannel();
  }

  // block-1
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

  // sale in block 2
  const [clicked, setClicked] = useState(false);
  const [indexY, setIndexY] = useState(0);
  const [clickedTypePrice, setClickedTypePrice] = useState({
    24: false,
    48: false,
    72: false,
    0: false,
    1: false,
    2: false,
  });

  const handleClickedTypePrice = (key, index) => {
    setClickedTypePrice((prevState) => {
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
  const timeLabels = {
    24: "1/24",
    48: "1/48",
    72: "1/72",
    0: "натив",
    1: "репост",
    2: "б/уд",
  };

  // const [clicked, setClicked] = useState(false);
  // const [indexY, setIndexY] = useState(0);
  // const [selectedTypePrice, setSelectedTypePrice] = useState('24');

  useEffect(() => {
    const defaultIndex = sortedPriceObjects(element[0].priceObjects).findIndex(
      (time) => time.time === 24
    );
    setIndexY(defaultIndex);
  }, []);

  const handleSelectedTypePrice = (event) => {
    const selectedValue = event.target.value;
    // setSelectedTypePrice(selectedValue);
    const selectedIndex = sortedPriceObjects(element[0].priceObjects).findIndex(
      (time) => time.time.toString() === selectedValue
    );
    setIndexY(selectedIndex);
  };

  const getDisplayText = (time) => {
    switch (time) {
      case 24:
        return "1/24";
      case 48:
        return "1/48";
      case 72:
        return "1/72";
      case 0:
        return "натив";
      case 1:
        return "репост";
      case 2:
        return "б/уд";
      default:
        return "";
    }
  };

  return (
    <>
      <div className={style.editor}>
        {/* ======= Header ======= */}
        <header className={style.headerEditor}>
          <div className={style.logoEditor}>
            <img src={iconAdvix} alt="iconAdvix" />
            <span>Advix: новости</span>
          </div>
          {/* <img src={iconExclamation} alt="!" /> //должно пропадать когда выполнены условия */}
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
                {/* {image && (
                  <a href={image} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt="cover" className={style.preview} />
                  </a>
                )} */}
              </div>

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
            <div className={style.advertisingContent}>
              <div className={style.itemAdv}>
                <span className={style.number}>1</span>
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
                  <button className={style.btnSale}>1/24</button>
                  <button className={style.btnCost}>СОХРАНИТЬ</button>
                </div>
              </div>
            </div>

            {/* ====== element 2 block 2 ====== */}
            <div className={style.advertisingContent}>
              <div className={style.itemAdv}>
                <span className={style.number}>2</span>
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

                  <div className={style.priceType}>
                    {/* <DropDownSale /> */}
                    {/* <DropDownSale default_arg={default_argCategory} args={'1/24'} /> */}
                  </div>
                  <button className={style.btnCost}>СОХРАНИТЬ</button>
                </div>
              </div>
            </div>

            {/* ====== element 3 block 2 ====== */}
            <div className={style.advertisingContent}>
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

                  <div className={style.priceType}>
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
                    <select
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
            </div>
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
                    value={costAdverts}
                    onChange={handleCostAdvertsChange}
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
                  00:00
                </div>
                <button className={style.btnStart}>ЗАПУСТИТЬ</button>
              </div>
            </div>
            <div className={style.horizontalLine}></div>
          </div>
        </div>

        <div className={style.wrapperBtnDelete}>
          <button className={style.btnDelete} onClick={handleReloadPicture}>
            УДАЛИТЬ
          </button>
        </div>
        
      </div>
    </>
  );
};
