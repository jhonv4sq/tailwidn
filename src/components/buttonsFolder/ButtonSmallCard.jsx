import React, { useState }from 'react'

const ButtonSmallCard = () => {

    const buttonSubEvent = 'APUNTATE';
    const [textSubscribe, setTextUnsubEvent] = useState(buttonSubEvent);

    function swapText() {
        setTextUnsubEvent('Loading');
        
        setTimeout(() => {
            setTextUnsubEvent(buttonSubEvent);
        }, 1000);
        
    }

    
        

    return (
        <>
        <button onClick={swapText} class="place-content-center tracking-[0.20em] flex mx-[] min-w-fit min-h-fit py-[16px] px-[60px]   font-librefranklin font-bold text- md:text-[24px] bg-colorGreen rounded-bl-[10px] rounded-br-[10px]  text-colorWhite">
            {textSubscribe}
        </button>
        </>
    )
}

export default ButtonSmallCard