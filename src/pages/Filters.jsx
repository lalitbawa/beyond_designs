import React from 'react'
import './filters.css'
import { useState } from 'react'
import tshirtdata from '../clothingdata/tshirts.json'

const showFilter = ()=>{
    document.getElementsByClassName('sidebar')[0].classList.toggle('is-active')
}

const Filters = (props) => {

const [redVal, setredVal] = useState("none")
const [blueVal, setblueVal] = useState("none")
const [greenVal, setgreenVal] = useState("none")
const [yellowVal, setyellowVal] = useState("none")
const [whiteVal, setwhiteVal] = useState("none")

let makeBlue = "blue"

const setData = ()=>{
    props.setTshirtData(
    tshirtdata.filter( val => val.color === {redVal} || val.color === {yellowVal} || val.color === {greenVal} || val.color==={whiteVal} || val.color==="blue").map(data => (
      <div  key={data.id}>
      <img src={data.itemlink} alt="" />
      <p>color - {data.color} brand - {data.brand} gender - {data.gender}</p>
      </div>)
  ))

  console.log(makeBlue)
}

  return (
    <div>
      <button type='submit' className='showfilter' onClick={showFilter}>Show/Hide Filters &rarr;</button>
    <div className='sidebar'>
        <h3>Filters</h3>
        <div className='sidebar-brand'>
            <h4>Brands</h4>
            <div><input type="checkbox" id='sidebar-brand-gucci'/>
            <label htmlFor="sidebar-brand-gucci">Gucci</label></div>
            <div><input type="checkbox" id='sidebar-brand-armani'/>
            <label htmlFor="sidebar-brand-armani">Armani</label></div>
            <div><input type="checkbox" id='sidebar-brand-boss'/>
            <label htmlFor="sidebar-brand-boss">Boss</label></div>
            <div><input type="checkbox" id='sidebar-brand-hackett'/>
            <label htmlFor="sidebar-brand-hackett">Hackett</label></div>
            <div><input type="checkbox" id='sidebar-brand-lv'/>
            <label htmlFor="sidebar-brand-lv">Louis Vuitton</label></div>
            <div><input type="checkbox" id='sidebar-brand-bd'/>
            <label htmlFor="sidebar-brand-bd">Beyond Designs Handmade</label></div>
        </div>
        <div className='sidebar-price'>
            <h4>Price</h4>
            <div><input type="checkbox" id='sidebar-price-200'/>
            <label htmlFor="sidebar-price-200">0-200$</label></div>
            <div><input type="checkbox" id='sidebar-price-400'/>
            <label htmlFor="sidebar-price-400">0-400$</label></div>
            <div><input type="checkbox" id='sidebar-price-600'/>
            <label htmlFor="sidebar-price-600">0-600$</label></div>
            <div><input type="checkbox" id='sidebar-price-800'/>
            <label htmlFor="sidebar-price-800">0-800$</label></div>
            <div><input type="checkbox" id='sidebar-price-1000'/>
            <label htmlFor="sidebar-price-1000">0-1000$</label></div>
        </div>
        <div className='sidebar-color'>
            <h4>Color</h4>
            <form action="/">
            <div><input type="checkbox" id='sidebar-color-red' value={redVal} onChange={(e)=>{
              if(e.target.checked === true){
                setredVal("red")
              }
              else{
                setredVal("none")
              }
            }}/>
            <label htmlFor="sidebar-color-red"><span className='makeitred'>red</span>Red</label></div>
            <div><input type="checkbox" id='sidebar-color-green' value={greenVal} onChange={(e)=>{
              if(e.target.checked === true){
                setgreenVal("green")
              }
              else{
                setgreenVal("none")
              }
            }}/>
            <label htmlFor="sidebar-color-green"><span className='makeitgreen'>red</span>Green</label></div>
            <div><input type="checkbox" id='sidebar-color-blue' value={blueVal} onChange={(e)=>{
              if(e.target.checked === true){
                setblueVal("blue")
                makeBlue = "blue"
                setData()
              }
              else{
                setblueVal("none")
                makeBlue = "none"
                setData()
              }
            }}/>
            <label htmlFor="sidebar-color-blue"><span className='makeitblue' >red</span>Blue</label></div>
            <div><input type="checkbox" id='sidebar-color-yellow' value={yellowVal} onChange={(e)=>{
              if(e.target.checked === true){
                setyellowVal("yellow")
              }
              else{
                setyellowVal("none")
              }
            }}/>
            <label htmlFor="sidebar-color-yellow"><span className='makeityellow'>red</span>Yellow</label></div>
            <div><input type="checkbox" id='sidebar-color-white' value={whiteVal} onChange={(e)=>{
              if(e.target.checked === true){
                setwhiteVal("white")
              }
              else{
                setwhiteVal("none")
              }
            }}/>
            <label htmlFor="sidebar-color-white"><span className='makeitwhite'>red</span>White</label></div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Filters