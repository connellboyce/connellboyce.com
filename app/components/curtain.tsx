"use client";
import {useEffect} from "react";
import gsap from "gsap";

export const animatePageIn = () => {
    const bannerOne = document.getElementById("curtain1")
    const bannerTwo = document.getElementById("curtain2")
    const bannerThree = document.getElementById("curtain3")
    const bannerFour = document.getElementById("curtain4")
    console.log("entered")
    if (bannerOne && bannerTwo && bannerThree && bannerFour) {
        console.log("entered2")
        const tl = gsap.timeline()

        tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: 0,
        }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: 100,
            stagger: 0.1,
        })
    }
}

export const animatePageOut = () => {
    const bannerOne = document.getElementById("curtain1")
    const bannerTwo = document.getElementById("curtain2")
    const bannerThree = document.getElementById("curtain3")
    const bannerFour = document.getElementById("curtain4")
    console.log("entered")
    if (bannerOne && bannerTwo && bannerThree && bannerFour) {
        console.log("entered2")
        const tl = gsap.timeline()

        tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: -100,
        }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: 0,
            stagger: 0.1,
            onComplete: () => {
              console.log("complete")
            },
        })
    }
}

export default function Curtain() {
    useEffect(() => {
        animatePageIn();
    }, [])

    return (
        <div>
            <div id="curtain1" className="min-h-screen bg-[#F9004D] z-10 fixed top-0 left-0 w-1/4"></div>
            <div id="curtain2" className="min-h-screen bg-[#E00047] z-10 fixed top-0 left-1/4 w-1/4"></div>
            <div id="curtain3" className="min-h-screen bg-[#CC0041] z-10 fixed top-0 left-1/2 w-1/4"></div>
            <div id="curtain4" className="min-h-screen bg-[#B8003A] z-10 fixed top-0 left-3/4 w-1/4"></div>
        </div>
    )
}