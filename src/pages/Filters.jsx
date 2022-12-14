import React from 'react'
import './filters.css'
import { useRef } from 'react'
import {useNavigate } from 'react-router-dom'


const Filters = (props) => {
  
  const showFilter = () => {
    document.getElementsByClassName('sidebar')[0].classList.toggle('is-active')
  }

  const showSortBtn = () => {
    document.getElementsByClassName('hidden_filter_btn')[0].classList.toggle('isactive2')
  }

  const redT = useRef()
  const greenT = useRef()
  const blueT = useRef()
  const yellowT = useRef()
  const whiteT = useRef()
  const gucciT = useRef()
  const lvT = useRef()
  const bdT = useRef()
  const bossT = useRef()
  const hackettT = useRef()
  const armaniT = useRef()
  const p200 = useRef()
  const p400 = useRef()
  const p600 = useRef()
  const p800 = useRef()
  const p1000 = useRef()

  const gucciFunc = () => {
    if (gucciT.current.checked === true) {
      return "gucci"
    }
    if (gucciT.current.checked === false) {
      return "none"
    }
  }

  const hackettFunc = () => {
    if (hackettT.current.checked === true) {
      return "hackett"
    }
    if (hackettT.current.checked === false) {
      return "none"
    }
  }

  const lvFunc = () => {
    if (lvT.current.checked === true) {
      return "louis_vuitton"
    }
    if (lvT.current.checked === false) {
      return "none"
    }
  }

  const bossFunc = () => {
    if (bossT.current.checked === true) {
      return "boss"
    }
    if (bossT.current.checked === false) {
      return "none"
    }
  }

  const armaniFunc = () => {
    if (armaniT.current.checked === true) {
      return "armani"
    }
    if (armaniT.current.checked === false) {
      return "none"
    }
  }

  const bdFunc = () => {
    if (bdT.current.checked === true) {
      return "beyond_designs"
    }
    if (bdT.current.checked === false) {
      return "none"
    }
  }

  const redFunc = () => {
    if (redT.current.checked === true) {
      return "red"
    }
    if (redT.current.checked === false) {
      return "none"
    }
  }

  const greenFunc = () => {
    if (greenT.current.checked === true) {
      return "green"
    }
    if (greenT.current.checked === false) {
      return "none"
    }
  }

  const whiteFunc = () => {
    if (whiteT.current.checked === true) {
      return "white"
    }
    if (whiteT.current.checked === false) {
      return "none"
    }
  }

  const yellowFunc = () => {
    if (yellowT.current.checked === true) {
      return "yellow"
    }
    if (yellowT.current.checked === false) {
      return "none"
    }
  }

  const blueFunc = () => {
    if (blueT.current.checked === true) {
      return "blue"
    }
    if (blueT.current.checked === false) {
      return "none"
    }
  }

  const p200Func = (v) => {
    if(p200.current.checked === true){
      return 200
    }
    if(p200.current.checked === false){
      return 'none'
    }
  }

  const p400Func = (v) => {
    if(p400.current.checked === true){
      return 400
    }
    if(p400.current.checked === false){
      return 'none'
    }
  }

  const p600Func = (v) => {
    if(p600.current.checked === true){
      return 600
    }
    if(p600.current.checked === false){
      return 'none'
    }
  }

  const p800Func = (v) => {
    if(p800.current.checked === true){
      return 800
    }
    if(p800.current.checked === false){
      return 'none'
    }
  }

  const p1000Func = (v) => {
    if(p1000.current.checked === true){
      return 800
    }
    if(p1000.current.checked === false){
      return 'none'
    }
  }

const navigate = useNavigate()

let dataToShowItem = 0;

const routeChange = ()=>{
  let path = '/showitem'
  navigate(path,{state:{id : dataToShowItem}})
}

  const mapData = (data)=>{
    return <div key={data.id} className="mentshirt_container_items">
    <img src={data.itemlink} alt="" typeof='submit' onClick={()=>{
      dataToShowItem = data.id
      routeChange()
    }} />
    <h3>{data.brand.charAt(0).toUpperCase() + data.brand.slice(1).replaceAll("_"," ")}</h3>
    <p><span className='mentshirt_container_items_text'>Gender</span>{" - " + data.gender.charAt(0).toUpperCase() + data.gender.slice(1)}</p>
    <p><span className='mentshirt_container_items_text'>Color</span>{" - " + data.color.charAt(0).toUpperCase() + data.color.slice(1)}</p>
    <p><span className='mentshirt_container_items_text'>Price (in $)  </span>{" - " + data.price}</p>
    <button type='submit' onClick={()=>{
      console.log("you pressed add to cart");
    }}>Add to Cart</button>
    <button type='submit'>
    Remove from Cart
    </button>
    </div>
  }


  const makeChangeToBrandAndColor = () => {
    props.changeMenTee(
      props.datamt.filter(val => (val.brand.includes(gucciFunc()) || val.brand.includes(hackettFunc()) || val.brand.includes(bdFunc()) || val.brand.includes(lvFunc()) || val.brand.includes(bossFunc()) || val.brand.includes(armaniFunc())) && (val.color.includes(redFunc()) || val.color.includes(greenFunc()) || val.color.includes(yellowFunc()) || val.color.includes(whiteFunc()) || val.color.includes(blueFunc()))).map(
        data => mapData(data)
      )
    )
  }

  const makeChangeToBrandOnly = () => {
    props.changeMenTee(
      props.datamt.filter(val => val.brand.includes(gucciFunc()) || val.brand.includes(hackettFunc()) || val.brand.includes(bdFunc()) || val.brand.includes(lvFunc()) || val.brand.includes(bossFunc()) || val.brand.includes(armaniFunc())).map(
        data => mapData(data)
      )
    )
  }

  const makeChangeToColorOnly = () => {
    props.changeMenTee(
      props.datamt.filter(val => val.color.includes(redFunc()) || val.color.includes(greenFunc()) || val.color.includes(yellowFunc()) || val.color.includes(whiteFunc()) || val.color.includes(blueFunc())).map(
        data => mapData(data)
      )
    )
  }

  const makeChangeToPriceOnly = () => {
    props.changeMenTee(
      props.datamt.filter(val => (val.price<=(p200Func()) || (val.price >=200 && val.price <=(p400Func())) || (val.price >=400 && val.price <=(p600Func())) || (val.price >=600 && val.price <=(p800Func())) || (val.price >=(p1000Func())))).map(
        data => mapData(data)
      )
    )
  }

  const makeChangeToAll = ()=>{
    props.changeMenTee(
      props.datamt.filter(val => (val.price<=(p200Func()) || (val.price >=200 && val.price <=(p400Func())) || (val.price >=400 && val.price <=(p600Func())) || (val.price >=600 && val.price <=(p800Func())) || (val.price >=(p1000Func()))) && (val.brand.includes(gucciFunc()) || val.brand.includes(hackettFunc()) || val.brand.includes(bdFunc()) || val.brand.includes(lvFunc()) || val.brand.includes(bossFunc()) || val.brand.includes(armaniFunc())) && (val.color.includes(redFunc()) || val.color.includes(greenFunc()) || val.color.includes(yellowFunc()) || val.color.includes(whiteFunc()) || val.color.includes(blueFunc()))).map(
        data => mapData(data)
      )
    )
  }

  const makeChangeToPriceAndColor = ()=>{
    props.changeMenTee(
      props.datamt.filter(val => (val.price<=(p200Func()) || (val.price >=200 && val.price <=(p400Func())) || (val.price >=400 && val.price <=(p600Func())) || (val.price >=600 && val.price <=(p800Func())) || (val.price >(p1000Func()))) && (val.color.includes(redFunc()) || val.color.includes(greenFunc()) || val.color.includes(yellowFunc()) || val.color.includes(whiteFunc()) || val.color.includes(blueFunc()))).map(
        data => mapData(data)
      )
    )
  }

  const makeChangeToBrandAndPrice = ()=>{
    props.changeMenTee(
      props.datamt.filter(val => (val.price<=(p200Func()) || (val.price >=200 && val.price <=(p400Func())) || (val.price >=400 && val.price <=(p600Func())) || (val.price >=600 && val.price <=(p800Func())) || (val.price >=(p1000Func()))) && (val.brand.includes(gucciFunc()) || val.brand.includes(hackettFunc()) || val.brand.includes(bdFunc()) || val.brand.includes(lvFunc()) || val.brand.includes(bossFunc()) || val.brand.includes(armaniFunc()))).map(
        data => mapData(data)
      )
    )
  }

  let sortedArray = props.datamt.slice(0).sort((a,b)=>{
    return a.price - b.price
  })

  const lowToHigh = ()=>{
    props.changeMenTee(sortedArray.map(data => mapData(data)))
  }

  let sortedArray2 = props.datamt.slice(0).sort((a,b)=>{
    return b.price - a.price
  })

  const highToLow = ()=>{
    props.changeMenTee(sortedArray2.map(data => mapData(data)))
  }

  const resetFilter = ()=>{
    props.changeMenTee(props.datamt.map(data=>mapData(data)))
  }

  return (
    <div>
      <div className='filter_button_container'>
        <button type='submit' className='showfilter' onClick={showFilter}>Filters &rarr;</button>
        <button type='submit' className='showfilter2' onClick={showSortBtn}> Sort By &rarr;</button>
      </div>
      <div className='hidden_filter_btn'>
        <button type='submit' onClick={()=>{
          lowToHigh()
          showSortBtn()
        }}>Low to High</button>
        <button type='submit' onClick={()=>{
          highToLow()
          showSortBtn()
        }}>High to Low</button>
      </div>
      <div className='sidebar'>
        <h3>Filters</h3>
        <h5 onClick={showFilter}>X  Close Filters</h5>
        <div className='sidebar-brand'>
          <h4>Brands</h4>
          <div><input type="checkbox" id='sidebar-brand-gucci' ref={gucciT} onClick={(e) => {

          }} />
            <label htmlFor="sidebar-brand-gucci" >Gucci</label></div>
          <div><input type="checkbox" id='sidebar-brand-armani' ref={armaniT} />
            <label htmlFor="sidebar-brand-armani">Armani</label></div>
          <div><input type="checkbox" id='sidebar-brand-boss' ref={bossT} />
            <label htmlFor="sidebar-brand-boss">Boss</label></div>
          <div><input type="checkbox" id='sidebar-brand-hackett' ref={hackettT} />
            <label htmlFor="sidebar-brand-hackett">Hackett</label></div>
          <div><input type="checkbox" id='sidebar-brand-lv' ref={lvT} />
            <label htmlFor="sidebar-brand-lv">Louis Vuitton</label></div>
          <div><input type="checkbox" id='sidebar-brand-bd' ref={bdT} />
            <label htmlFor="sidebar-brand-bd">Beyond Designs Handmade</label></div>
        </div>
        <div className='sidebar-price'>
          <h4>Price</h4>
          <div><input type="checkbox" id='sidebar-price-200' ref={p200} />
            <label htmlFor="sidebar-price-200">0-200$</label></div>
          <div><input type="checkbox" id='sidebar-price-400' ref={p400} />
            <label htmlFor="sidebar-price-400">200-400$</label></div>
          <div><input type="checkbox" id='sidebar-price-600' ref={p600} />
            <label htmlFor="sidebar-price-600">400-600$</label></div>
          <div><input type="checkbox" id='sidebar-price-800' ref={p800} />
            <label htmlFor="sidebar-price-800">600-800$</label></div>
          <div><input type="checkbox" id='sidebar-price-1000' ref={p1000} />
            <label htmlFor="sidebar-price-1000">800$+</label></div>
        </div>
        <div className='sidebar-color'>
          <h4>Color</h4>
          <form action="/">
            <div><input type="checkbox" id='sidebar-color-red' ref={redT} />
              <label htmlFor="sidebar-color-red"><span className='makeitred'>red</span>Red</label></div>
            <div><input type="checkbox" id='sidebar-color-green' ref={greenT} />
              <label htmlFor="sidebar-color-green"><span className='makeitgreen'>red</span>Green</label></div>
            <div><input type="checkbox" id='sidebar-color-blue' ref={blueT} />
              <label htmlFor="sidebar-color-blue"><span className='makeitblue' >red</span>Blue</label></div>
            <div><input type="checkbox" id='sidebar-color-yellow' ref={yellowT} />
              <label htmlFor="sidebar-color-yellow"><span className='makeityellow'>red</span>Yellow</label></div>
            <div><input type="checkbox" id='sidebar-color-white' ref={whiteT} />
              <label htmlFor="sidebar-color-white"><span className='makeitwhite'>red</span>White</label></div>
          </form>
          <button type='submit' className='filter_apply' onClick={(e) => {
            if ((gucciT.current.checked === true || hackettT.current.checked === true || bdT.current.checked === true || lvT.current.checked === true || bossT.current.checked === true || armaniT.current.checked === true) && (redT.current.checked === true || yellowT.current.checked === true || blueT.current.checked === true || greenT.current.checked === true || whiteT.current.checked === true) && (p200.current.checked === false && p400.current.checked === false && p600.current.checked === false && p800.current.checked === false && p1000.current.checked === false)) {
              makeChangeToBrandAndColor()
            }
            else if ((gucciT.current.checked === false && hackettT.current.checked === false && bdT.current.checked === false && lvT.current.checked === false && bossT.current.checked === false && armaniT.current.checked === false) && (redT.current.checked === true || whiteT.current.checked === true || yellowT.current.checked === true || blueT.current.checked === true || greenT.current.checked === true) && (p200.current.checked=== false && p400.current.checked=== false && p600.current.checked=== false && p800.current.checked=== false && p1000.current.checked=== false)) {
              makeChangeToColorOnly()
            }
            else if ((gucciT.current.checked === true || hackettT.current.checked === true || bdT.current.checked === true || lvT.current.checked === true || bossT.current.checked === true || armaniT.current.checked === true) && (redT.current.checked === false && whiteT.current.checked === false && yellowT.current.checked === false && blueT.current.checked === false && greenT.current.checked === false) && (p200.current.checked=== false && p400.current.checked=== false && p600.current.checked=== false && p800.current.checked=== false && p1000.current.checked=== false)) {
              makeChangeToBrandOnly()
            }
            else if ((p200.current.checked === true || p400.current.checked === true || p600.current.checked === true || p800.current.checked === true || p1000.current.checked === true) && (gucciT.current.checked === false && hackettT.current.checked === false && bdT.current.checked === false && lvT.current.checked === false && bossT.current.checked === false && armaniT.current.checked === false)&& (redT.current.checked === false && whiteT.current.checked === false && yellowT.current.checked === false && blueT.current.checked === false && greenT.current.checked === false)) {
              makeChangeToPriceOnly()
            }
            else if((p200.current.checked === true || p400.current.checked === true || p600.current.checked === true || p800.current.checked === true || p1000.current.checked === true) && (gucciT.current.checked === true || hackettT.current.checked === true || bdT.current.checked === true || lvT.current.checked === true || bossT.current.checked === true || armaniT.current.checked === true)&& (redT.current.checked === true || whiteT.current.checked === true || yellowT.current.checked === true || blueT.current.checked === true || greenT.current.checked === true)){
              makeChangeToAll()
            }
            else if((p200.current.checked === true || p400.current.checked === true || p600.current.checked === true || p800.current.checked === true || p1000.current.checked === true) && (gucciT.current.checked === false && hackettT.current.checked === false && bdT.current.checked === false && lvT.current.checked === false && bossT.current.checked === false && armaniT.current.checked === false)&& (redT.current.checked === true || whiteT.current.checked === true || yellowT.current.checked === true || blueT.current.checked === true || greenT.current.checked === true)){
              makeChangeToPriceAndColor()
            }
            else if((p200.current.checked === true || p400.current.checked === true || p600.current.checked === true || p800.current.checked === true || p1000.current.checked === true) && (gucciT.current.checked === true || hackettT.current.checked === true || bdT.current.checked === true || lvT.current.checked === true || bossT.current.checked === true || armaniT.current.checked === true)&& (redT.current.checked === false && whiteT.current.checked === false && yellowT.current.checked === false && blueT.current.checked === false && greenT.current.checked === false)){
              makeChangeToBrandAndPrice()
            }
          showFilter()}}>Apply Changes</button>
          <button className='filter_apply' type='submit' onClick={()=>{resetFilter()
          showFilter()}}>Reset Filters</button>
        </div>
      </div>
    </div>
  )
}

export default Filters