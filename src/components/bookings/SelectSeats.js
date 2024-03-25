import React, { useContext } from 'react';
import Data from '../../DataContext';
import { MdOutlineEventSeat } from "react-icons/md";

const SelectSeats = () => {
    const { screen, time, setSelectedSeats, selectedSeats, setCost, cost } = useContext(Data);
    let bookedSeats = [];
    if(time === '10.00AM') bookedSeats = screen.show1;
    if(time === '1.00PM') bookedSeats = screen.show2;
    if(time === '4.30PM') bookedSeats = screen.show3;
    const handleSeat = (e,val,c) => {
        e.target.style.color = 'blue';
        setSelectedSeats([...selectedSeats, val]);
        setCost(cost+c);
    }
   
  return (
    <main className='selectSeats'>
      <h2>{screen.screenName}</h2>
      <div id='seats'>
        <div>
            <p>--------first class Rs.220----------</p>
            { bookedSeats.includes(1) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,1,220)}} />} 
            { bookedSeats.includes(2) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,2,220)}} />} 
            { bookedSeats.includes(3) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,3,220)}} />} 
            { bookedSeats.includes(4) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,4,220)}} />} 
            { bookedSeats.includes(5) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,5,220)}} />} 
            { bookedSeats.includes(6) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,6,220)}} />} 
            { bookedSeats.includes(7) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,7,220)}} />} 
            { bookedSeats.includes(8) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,8,220)}} />} 
            { bookedSeats.includes(9) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,9,220)}} />} 
            { bookedSeats.includes(10) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,10,220)}} />} 
            { bookedSeats.includes(11) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,11,220)}} />} 
            { bookedSeats.includes(12) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,12,220)}} />} 
            { bookedSeats.includes(13) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,13,220)}} />} 
            { bookedSeats.includes(14) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,14,220)}} />} 
            { bookedSeats.includes(15) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,15,220)}} />} 
            { bookedSeats.includes(16) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,16,220)}} />} 
            { bookedSeats.includes(17) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,17,220)}} />} 
            { bookedSeats.includes(18) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,18,220)}} />} 
            { bookedSeats.includes(19) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,19,220)}} />} 
            { bookedSeats.includes(20) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,20,220)}} />} 
            { bookedSeats.includes(21) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,21,220)}} />} 
            { bookedSeats.includes(22) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,22,220)}} />} 
            { bookedSeats.includes(23) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,23,220)}} />} 
            { bookedSeats.includes(24) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,24,220)}} />} 
            { bookedSeats.includes(25) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,25,220)}} />} 
        </div>
        <div>
            <p>--------second class Rs.190----------</p>
            { bookedSeats.includes(26) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,26,190)}} />} 
            { bookedSeats.includes(27) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,27,190)}} />} 
            { bookedSeats.includes(28) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,28,190)}} />} 
            { bookedSeats.includes(29) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,29,190)}} />} 
            { bookedSeats.includes(30) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,30,190)}} />} 
            { bookedSeats.includes(31) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,31,190)}} />} 
            { bookedSeats.includes(32) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,32,190)}} />} 
            { bookedSeats.includes(33) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,33,190)}} />} 
            { bookedSeats.includes(34) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,34,190)}} />} 
            { bookedSeats.includes(35) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,35,190)}} />} 
            { bookedSeats.includes(36) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,36,190)}} />} 
            { bookedSeats.includes(37) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,37,190)}} />} 
            { bookedSeats.includes(38) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,38,190)}} />} 
            { bookedSeats.includes(39) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,39,190)}} />} 
            { bookedSeats.includes(40) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,40,190)}} />} 
            { bookedSeats.includes(41) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,41,190)}} />} 
            { bookedSeats.includes(42) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,42,190)}} />} 
            { bookedSeats.includes(43) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,43,190)}} />} 
            { bookedSeats.includes(44) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,44,190)}} />} 
            { bookedSeats.includes(45) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,45,190)}} />} 
            { bookedSeats.includes(46) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,46,190)}} />} 
            { bookedSeats.includes(47) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,47,190)}} />} 
            { bookedSeats.includes(48) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,48,190)}} />} 
            { bookedSeats.includes(49) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,49,190)}} />} 
            { bookedSeats.includes(50) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,50,190)}} />} 
        </div>
        <div>
            <p>--------third class Rs.150----------</p>
            { bookedSeats.includes(51) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,51,120)}} />} 
            { bookedSeats.includes(52) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,52,120)}} />} 
            { bookedSeats.includes(53) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,53,120)}} />} 
            { bookedSeats.includes(54) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,54,120)}} />} 
            { bookedSeats.includes(55) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,55,120)}} />} 
            { bookedSeats.includes(56) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,56,120)}} />} 
            { bookedSeats.includes(57) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,57,120)}} />} 
            { bookedSeats.includes(58) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,58,120)}} />} 
            { bookedSeats.includes(59) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,59,120)}} />} 
            { bookedSeats.includes(60) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,60,120)}} />} 
            { bookedSeats.includes(61) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,61,120)}} />} 
            { bookedSeats.includes(62) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,62,120)}} />} 
            { bookedSeats.includes(63) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,63,120)}} />} 
            { bookedSeats.includes(64) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,64,120)}} />} 
            { bookedSeats.includes(65) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,65,120)}} />} 
            { bookedSeats.includes(66) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,66,120)}} />} 
            { bookedSeats.includes(67) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,67,120)}} />} 
            { bookedSeats.includes(68) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,68,120)}} />} 
            { bookedSeats.includes(69) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,69,120)}} />} 
            { bookedSeats.includes(70) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,70,120)}} />} 
            { bookedSeats.includes(71) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,71,120)}} />} 
            { bookedSeats.includes(72) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,72,120)}} />} 
            { bookedSeats.includes(73) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,73,120)}} />} 
            { bookedSeats.includes(74) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,74,120)}} />} 
            { bookedSeats.includes(75) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,75,120)}} />} 
            { bookedSeats.includes(76) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,76,120)}} />} 
            { bookedSeats.includes(77) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,77,120)}} />} 
            { bookedSeats.includes(78) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,78,120)}} />} 
            { bookedSeats.includes(79) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,79,120)}} />} 
            { bookedSeats.includes(80) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,80,120)}} />} 
            { bookedSeats.includes(81) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,81,120)}} />} 
            { bookedSeats.includes(82) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,82,120)}} />} 
            { bookedSeats.includes(83) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,83,120)}} />} 
            { bookedSeats.includes(84) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,84,120)}} />} 
            { bookedSeats.includes(85) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,85,120)}} />} 
            { bookedSeats.includes(86) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,86,120)}} />} 
            { bookedSeats.includes(87) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,87,120)}} />} 
            { bookedSeats.includes(88) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,88,120)}} />} 
            { bookedSeats.includes(89) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,89,120)}} />} 
            { bookedSeats.includes(90) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,90,120)}} />} 
            { bookedSeats.includes(91) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,91,120)}} />} 
            { bookedSeats.includes(92) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,92,120)}} />} 
            { bookedSeats.includes(93) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,93,120)}} />} 
            { bookedSeats.includes(94) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,94,120)}} />} 
            { bookedSeats.includes(95) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,95,120)}} />} 
            { bookedSeats.includes(96) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,96,120)}} />} 
            { bookedSeats.includes(97) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,97,120)}} />} 
            { bookedSeats.includes(98) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,98,120)}} />} 
            { bookedSeats.includes(99) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,99,120)}} />} 
            { bookedSeats.includes(100) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,100,120)}} />} 
        </div>
        <div>
            <p>--------exclusive class Rs.75----------</p>
            { bookedSeats.includes(101) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,101,75)}} />} 
            { bookedSeats.includes(102) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,102,75)}} />} 
            { bookedSeats.includes(103) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,103,75)}} />} 
            { bookedSeats.includes(104) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,104,75)}} />} 
            { bookedSeats.includes(105) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,105,75)}} />} 
            { bookedSeats.includes(106) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,106,75)}} />} 
            { bookedSeats.includes(107) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,107,75)}} />} 
            { bookedSeats.includes(108) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,108,75)}} />} 
            { bookedSeats.includes(109) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,109,75)}} />} 
            { bookedSeats.includes(110) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,110,75)}} />} 
            { bookedSeats.includes(111) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,111,75)}} />} 
            { bookedSeats.includes(112) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,112,75)}} />} 
            { bookedSeats.includes(113) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,113,75)}} />} 
            { bookedSeats.includes(114) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,114,75)}} />} 
            { bookedSeats.includes(115) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,115,75)}} />} 
            { bookedSeats.includes(116) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,116,75)}} />} 
            { bookedSeats.includes(117) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,117,75)}} />} 
            { bookedSeats.includes(118) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,118,75)}} />} 
            { bookedSeats.includes(119) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,119,75)}} />} 
            { bookedSeats.includes(75) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,120,75)}} />} 
            { bookedSeats.includes(121) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,121,75)}} />} 
            { bookedSeats.includes(122) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,122,75)}} />} 
            { bookedSeats.includes(123) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,123,75)}} />} 
            { bookedSeats.includes(124) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,124,75)}} />} 
            { bookedSeats.includes(125) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,125,75)}} />} 
            { bookedSeats.includes(126) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,126,75)}} />} 
            { bookedSeats.includes(127) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,127,75)}} />} 
            { bookedSeats.includes(128) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,128,75)}} />} 
            { bookedSeats.includes(129) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,129,75)}} />} 
            { bookedSeats.includes(130) ? <MdOutlineEventSeat style={{ color: 'gray'}}/> : <MdOutlineEventSeat onClick={(e) => { handleSeat(e,130,75)}} />}
          </div>
      </div>
      <div>
        <h2> Lover </h2>
        <div>
            <p> 2D </p>
            <p> TAM </p>
        </div>
        <button onClick={()=>{
          console.log('no of seat selected : ', selectedSeats.length);
          console.log(' cost is', cost);
        }}> BOOK NOW </button>
      </div>
    </main>
  )
}

export default SelectSeats;
