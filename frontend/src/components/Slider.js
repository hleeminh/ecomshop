import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React, {useState} from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if(direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1: 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1: 0)
        }
    }

    return (
        <div className='slider-container'>
            <Arrow className='slider-arrow' direction='left' onClick={() => handleClick('left')}>
                <ArrowBackIosOutlined style={{ fontSize: 45 }} />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((sliderItem, index) => (
                    <Slide bg={sliderItem.bg} key={index}>
                        <div className='slider-image'>
                            <img className='slider-image-item' src={sliderItem.img} alt=''/>
                        </div>
                        <div className='slider-info'>
                            <div className='slider-info-title'>{sliderItem.title}</div>
                            <div className='slider-info-desc'>{sliderItem.desc}</div>
                            <button className='slider-info-btn'>PURCHASE NOW</button>
                        </div>
                    </Slide>
                ))}


            </Wrapper>

            <Arrow className='slider-arrow' direction='right' onClick={() => handleClick('right')}>
                <ArrowForwardIosOutlined style={{ fontSize: 45 }} />
            </Arrow>

        </div>
    )
}

const Arrow = styled.div`
    display: flex;
    width: 45px;
    height: 45px;
    /* background-color: ; */
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '0px'};
    right: ${props => props.direction === 'right' && '0px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    transform: translate(${props => props.slideIndex * -100}vw);
    transition: all 1s ease;
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`

export default Slider