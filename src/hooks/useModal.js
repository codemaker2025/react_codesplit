import { useState } from "react"

export default function useModal(){
    const[isVisible,setIsVisible] = useState(false)
    function openModal(){
        setIsVisible(true)
    }
    function closeModal(){
        setIsVisible(false)
    }
    return {
        isVisible,
        openModal,
        closeModal
    }
}